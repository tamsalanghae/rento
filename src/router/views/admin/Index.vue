<template>
  <div>
    <navbar></navbar>
    <div id="background" class="d-flex justify-content-center">
      <div
        class="container-fluid col-lg-10"
        style="padding-top: 50px; padding-bottom: 50px"
      >
        <b-row>
          <b-col lg="3" class="my-1">
            <b-form-group
              label="Sắp xếp"
              label-for="sort-by-select"
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
              class="mb-0"
            >
              <b-input-group size="sm">
                <b-form-select
                  id="sort-by-select"
                  v-model="tempSort"
                  :options="sortOptions"
                  @change="mapSort(tempSort)"
                  class="w-50"
                >
                </b-form-select>

                <b-form-select
                  v-model="tempDesc"
                  :disabled="tempSort == 'Mặc định'"
                  :options="['Tăng dần', 'Giảm dần']"
                  @change="mapDesc(tempDesc)"
                  size="sm"
                  class="w-50"
                >
                </b-form-select>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col lg="3" class="my-1">
            <b-form-group
              label="Hiển thị bài đã từ chối"
              label-for="filter-input"
              label-cols-lg="9"
              label-align-sm="right"
              label-size="sm"
            >
              <b-form-checkbox
                size="lg"
                v-model="searchParams.showRejected"
              ></b-form-checkbox>
            </b-form-group>
          </b-col>
          <b-col lg="5" class="my-1">
            <b-form-group
              label="Tìm kiếm"
              label-for="filter-input"
              label-cols-sm="2"
              label-align-sm="right"
              label-size="sm"
              class="mb-0"
            >
              <b-input-group size="sm">
                <b-form-input
                  id="filter-input"
                  v-model="tempKeyword"
                  type="search"
                  placeholder="Nhập từ khóa"
                  class="w-75"
                ></b-form-input>
                <b-form-select
                  v-model="tempField"
                  :options="['Bài đăng', 'Địa chỉ']"
                  size="sm"
                  class="w-25"
                >
                </b-form-select>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col lg="1" class="my-1">
            <b-button size="sm" @click="search">Tìm kiếm</b-button>
          </b-col>
        </b-row>

        <b-table
          :fields="fields"
          :items="items"
          id="my-table"
          :per-page="searchParams.take"
          :current-page="currentPage"
          fixed
          ref="table"
          outlined
        >
          <template #cell(actions)="row" class="text-center">
            <b-row v-if="statusMap.indexOf(row.item.status) == 2" fluid>
              <div style="width: 40px"></div>
              <b-button size="sm" @click="remove(row.index)" variant="danger">
                <b-icon-trash style="color: white"></b-icon-trash> </b-button
            ></b-row>

            <b-row v-else-if="statusMap.indexOf(row.item.status) == 0">
              <div style="width: 15px"></div>

              <b-button size="sm" @click="approve(row.index)" variant="success">
                <b-icon-check-circle></b-icon-check-circle>
              </b-button>
              <div style="width: 10px"></div>
              <b-button size="sm" @click="reject(row.index)" variant="warning">
                <b-icon-x-circle></b-icon-x-circle>
              </b-button>
            </b-row>
            <b-row v-else>
              <div style="width: 15px"></div>

              <b-button size="sm" @click="approve(row.index)" variant="success">
                <b-icon-check-circle></b-icon-check-circle>
              </b-button>
              <div style="width: 10px"></div>
              <b-button size="sm" @click="remove(row.index)" variant="danger">
                <b-icon-trash style="color: white"></b-icon-trash>
              </b-button>
            </b-row>
          </template>
        </b-table>
        <b-row class="justify-content-end">
          <b-col lg="3" class="my-1">
            <b-form-group
              label="Kích cỡ trang"
              label-for="per-page-select"
              label-cols="6"
              label-align-sm="right"
              label-size="sm"
              class="mb-0"
            >
              <b-form-select
                id="per-page-select"
                v-model="searchParams.take"
                :options="pageOptions"
                @change="search"
                size="sm"
              ></b-form-select>
            </b-form-group>
          </b-col>

          <b-col lg="4" class="my-1">
            <b-pagination
              v-model="currentPage"
              :total-rows="total"
              :per-page="searchParams.take"
              @change="handlePageChange"
              align="fill"
              size="sm"
              class="my-0 justify-content-end"
              aria-controls="my-table"
            ></b-pagination>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import axios from "../../../utils/axios";
import navbar from "../../../components/navbar.vue";

export default {
  name: "PostIndex",
  components: {
    navbar,
  },
  data() {
    return {
      pageOptions: [5, 10, 20],
      sortOptions: ["Mặc định", "Giá thuê", "Đánh giá", "Lượt xem"],
      fieldOptions: ["Bài đăng", "Địa chỉ"],

      tempSort: "Mặc định",
      tempDesc: "Tăng dần",
      tempKeyword: "",
      tempField: "Bài đăng",

      currentPage: 1,
      total: 0,

      statusMap: ["Chưa duyệt", "Đã từ chối", "Đã duyệt"],

      searchParams: {
        captionKeyword: "",
        addressKeyword: "",
        wardCode: "",
        districtCode: "",
        provinceCode: "",
        take: 5,
        skip: 0,
        sort: 0,
        desc: false,
        minRent: 0,
        maxRent: 100000000000000,
        showRejected: true,
      },
      token: localStorage.getItem('token'),
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTBiOWJiYTIyOWMwOTljMzI3ZWJlYiIsInJvbGUiOiJBZG1pbiIsIm5iZiI6MTYwODU2MzEzMSwiZXhwIjoxNjA5MTY3OTMxLCJpYXQiOjE2MDg1NjMxMzF9.jcirT3_S0BPkh1LRgcx7tjYAupIm7wQDmS5pI11eCXA",
      fields: [
        { key: "caption", label: "Bài đăng", stickyColumn: true },
        { key: "address", label: "Địa chỉ" },
        { key: "rent", label: "Tiền trọ" },
        { key: "views", label: "Lượt xem" },
        { key: "rating", label: "Đánh giá" },
        { key: "status", label: "Trạng thái" },
        { key: "actions", label: "Hành động" },
      ],
      items: [],
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    approve(index) {
      var ind = index + (this.currentPage - 1) * this.searchParams.take;
      axios
        .post(
          `/Posts/${this.items[ind].id}/approve`,
          {},
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((res) => {
          this.items[ind] = res.data;
          this.mapStatus();
        });
    },
    reject(index) {
      var ind = index + (this.currentPage - 1) * this.searchParams.take;
      axios
        .post(
          `https://localhost:44334/Posts/${this.items[ind].id}/reject`,
          {},
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((res) => {
          this.items[ind] = res.data;
          this.mapStatus();
        });
    },
    remove(index) {
      var ind = index + (this.currentPage - 1) * this.searchParams.take;
      window.console.log("yoooooooooooo");
      axios
        .delete(`https://localhost:44334/Posts/${this.items[ind].id}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) this.items.splice(ind, 1);
          this.mapStatus();
        });
    },
    mapStatus() {
      this.items.forEach((item) => {
        item.status = Number.isInteger(item.status)
          ? this.statusMap[item.status]
          : item.status;
      });
      this.$refs.table.refresh();
    },
    search() {
      this.searchParams.captionKeyword =
        this.tempField == "Bài đăng" ? this.tempKeyword : "";
      this.searchParams.addressKeyword =
        this.tempField == "Địa chỉ" ? this.tempKeyword : "";
      this.searchParams.skip = 0;
      this.fetch().then((res) => {
        this.items = res.data.result;
        this.total = res.data.count;
        this.currentPage = 1;
        this.mapStatus();
      });
    },
    mapSort(value) {
      this.searchParams.sort = this.sortOptions.indexOf(value);
    },
    mapDesc(value) {
      this.searchParams.desc = value == "Giảm dần";
    },
    handlePageChange(value) {
      this.searchParams.skip = (value - 1) * this.searchParams.take;
      if ((value - 1) * this.searchParams.take + 1 > this.items.length) {
        this.fetch().then((res) => {
          this.items = this.items.concat(res.data.result);
          this.total = res.data.count;
          window.console.log(this.items);
          this.mapStatus();
        });
      }
    },
    fetch() {
      return axios.post("/Posts/search", this.searchParams, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
    },
  },
};
</script>