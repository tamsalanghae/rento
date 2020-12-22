<template>
  <div id="background" class="d-flex justify-content-center">
    <div class="container-fluid col-lg-10">
      <b-row>
        <b-col lg="4" class="my-1">
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
        <b-col lg="6" class="my-1">
          <b-form-group
            label="Tìm kiếm"
            label-for="filter-input"
            label-cols-sm="3"
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
        <b-col lg="2" class="my-1">
          <b-button size="sm" @click="search">Tìm kiếm</b-button>
        </b-col>
      </b-row>

      <b-table
        :fields="fields"
        :items="items"
        id="my-table"
        :per-page="searchParams.take"
        :current-page="currentPage"
        responsive
      >
        <template #cell(actions)="row">
          <b-button size="sm" @click="log(row)" variant="info">
            Chi tiết
          </b-button>
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
</template>

<style scoped>
.caption {
  width: 500px;
}
</style>

<script>
import axios from "axios";
export default {
  name: "PostIndex",
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
      },
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTBiOWJiYTIyOWMwOTljMzI3ZWJlYiIsInJvbGUiOiJBZG1pbiIsIm5iZiI6MTYwODU2MzEzMSwiZXhwIjoxNjA5MTY3OTMxLCJpYXQiOjE2MDg1NjMxMzF9.jcirT3_S0BPkh1LRgcx7tjYAupIm7wQDmS5pI11eCXA",
      fields: [
        { key: "caption", label: "Bài đăng", tdClass: "caption" },
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