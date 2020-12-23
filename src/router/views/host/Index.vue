<template>
  <div>
    <navbar></navbar>
    <div id="background" class="d-flex justify-content-center">
      <div class="container-fluid col-lg-10">
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
          <template #cell(actions)="row">
            <b-row fluid>
              <div style="width: 15px"></div>
              <b-button size="sm" @click="edit(row.index)" variant="info">
                <b-icon-pencil style="color: white"></b-icon-pencil>
              </b-button>
              <div style="width: 10px"></div>
              <b-button size="sm" @click="remove(row.index)" variant="danger">
                <b-icon-trash style="color: white"></b-icon-trash> </b-button
            ></b-row>
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
import axios from "axios";
import Navbar from "../../../components/navbar.vue";

export default {
  name: "PostIndex",

  components: { Navbar },
  data() {
    return {
      connection: "",
      myval: "",

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
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTJiZjdlN2IyZmE5ZTU1NjFjMDEyOCIsInJvbGUiOiJIb3N0IiwibmJmIjoxNjA4Njk1Njc4LCJleHAiOjE2MDkzMDA0NzgsImlhdCI6MTYwODY5NTY3OH0.4mi2FT8KpJusSO3BeNJudhKjf0NUGXtgvkR9gmbtiGI",
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
    this.myval =  setInterval(() => this.checkNoti(), 5000);
  },  
  beforeDestroy(){
clearInterval(this.myval);
  },
  methods: {
    checkNoti() {
      axios
        .get("https://localhost:44334/Notifications", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) =>
          res.data.forEach((n) =>
            this.$bvToast.toast(n.post.caption, {
              title: n.content,
              variant: n.success ? "success" : "danger",
              autoHideDelay: 3000,
            })
          )
        );
    },
    approve(index) {
      var ind = index + (this.currentPage - 1) * this.searchParams.take;
      axios
        .post(
          `https://localhost:44334/Posts/${this.items[ind].id}/approve`,
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
    edit(index) {
      var ind = index + (this.currentPage - 1) * this.searchParams.take;
      this.$router.push(`/post/${this.items[ind].id}`);
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
      return axios.post(
        "https://localhost:44334/Posts/search",
        this.searchParams,
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );
    },
  },
};
</script>