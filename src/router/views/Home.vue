<template>
  <div>
    <navbar />
    <div class="banner-wrapper">
      <div class="bx-wrapper">
        <img class="banner" src="@/assets/img/banner.jpg" />
      </div>
      <div class="container position-relative">
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <div class="search-box">
              <input
                type="text"
                class="search-bar"
                placeholder="Search..."
                v-model="query"
                @keypress="search"
              />
              <div class="row">
                <div class="col-3">
                  <div class="type">
                    <b-form-select
                      v-model="cityCode"
                      v-on:change="getDistricts"
                      :options="cities"
                    ></b-form-select>
                  </div>
                </div>
                <div class="col-3">
                  <div class="type">
                    <b-form-select
                      v-on:change="getWards"
                      v-if="cityCode == previousCityCode"
                      v-model="districtCode"
                      :options="districts"
                    ></b-form-select>
                    <b-form-select v-else v-model="districtCode" class="mb-3"
                      ><b-form-select-option :value="null"
                        >Chọn quận/huyện</b-form-select-option
                      >
                    </b-form-select>
                  </div>
                </div>
                <div class="col-3">
                  <div class="type">
                    <b-form-select
                      v-if="
                        districtCode == previousDistrictCode &&
                        cityCode == previousCityCode
                      "
                      v-model="wardCode"
                      :options="wards"
                    ></b-form-select>
                    <b-form-select v-else v-model="wardCode" class="mb-3"
                      ><b-form-select-option :value="null"
                        >Chọn xã/phường</b-form-select-option
                      >
                    </b-form-select>
                  </div>
                </div>
                <div class="col-3">
                  <div class="type">
                    <b-form-select
                      v-on:change="setPrice"
                      v-model="rentValue"
                      :options="rentPrice"
                    ></b-form-select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="container bg-white">
        <div class="information mt-3">
          <div class="row">
            <div class="col">
              <div class="p-4">
                <div class="row d-table">
                  <div class="col-md-5 d-table-cell align-middle">
                    <img class="w-100" src="@/assets/img/cat-1.svg" />
                  </div>
                  <div class="col-md-7 d-table-cell align-middle">
                    <h4 class="w-100">Nguyên căn</h4>
                    <p class="w-100">4,000 tin mua bán</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="p-4">
                <div class="row d-table">
                  <div class="col-md-5 d-table-cell align-middle">
                    <img class="w-100" src="@/assets/img/cat-2.svg" />
                  </div>
                  <div class="col-md-7 d-table-cell align-middle">
                    <h4>Ở ghép</h4>
                    <p>4,000 tin mua bán</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="p-4">
                <div class="row d-table">
                  <div class="col-md-5 d-table-cell align-middle">
                    <img class="w-100" src="@/assets/img/cat-3.svg" />
                  </div>
                  <div class="col-md-7 d-table-cell align-middle">
                    <h4>Phòng trọ</h4>
                    <p>4,000 tin mua bán</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="zone-1 mt-3">
          <div class="container my-4">
            <hr class="my-4" />
            <h4 class="mb-3 text-main-orange">Nguyên căn</h4>
            <!--First slide-->
            <carousel :items="items" />
            <!--/.First slide-->
          </div>
          <div class="container my-4 mt-3">
            <hr class="my-4" />
            <h4 class="mb-3 text-main-orange">Ở ghép</h4>
            <!--Second slide-->
            <carousel :items="items" />
            <!--/.Second slide-->
          </div>
          <div class="container my-4 mt-3">
            <hr class="my-4" />
            <h4 class="mb-3 text-main-orange">Phòng trọ</h4>
            <!--Third slide-->
            <carousel :items="items" />
            <!--/.Third slide-->
          </div>
        </div>
      </div>
    </div>
    <footerPage></footerPage>
  </div>
</template>

<script>
import Carousel from "../../components/carousel.vue";
import Navbar from "../../components/navbar.vue";
import axios from "../../utils/axios";
import footerPage from "../../components/footer.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Navbar,
    footerPage,
  },
  created: function () {
    this.token = localStorage.getItem("token");
    window.console.log(localStorage.getItem("role"));
    this.getProvinces();
    this.postSearchRequest().then((res) => {
      console.log(res);
      res.data.result.forEach((element) => {
        this.items.push({
          id: element.id,
          title: element.caption,
          content: element.description ?? "Bài viết chưa có nội dung",
          image:
            element.photos.length === 0
              ? "https://solidstarts.com/wp-content/uploads/when-can-babies-eat-watermelon.jpg"
              : `https://localhost:44334/Posts/${element.id}/images?file=${element.photos[0]}`,
        });
      });
    });
  },
  data() {
    return {
      token: localStorage.getItem("token"),
      items: [],
      cities: [{ value: null, text: "Chọn thành phố" }],
      districts: [{ value: null, text: "Chọn quận/huyện" }],
      wards: [{ value: null, text: "Chọn xã/phường" }],
      rentPrice: [
        { value: "00", text: "Chọn mức giá" },
        { value: "01", text: "Dưới 1 triệu" },
        { value: "02", text: "Từ 1 - 3 triệu" },
        { value: "03", text: "Từ 3 - 5 triệu" },
        { value: "04", text: "Từ 5 - 10 triệu" },
        { value: "05", text: "Trên 10 triệu" },
      ],
      rentValue: "00",
      previousCityCode: null,
      cityCode: null,
      previousDistrictCode: null,
      districtCode: null,
      wardCode: null,
      query: "",
      minRent: 0,
      maxRent: 9999999999,
    };
  },

  methods: {
    postSearchRequest() {
      return axios.post(
        "/Posts/search",
        {
          captionKeyword: this.query,
          addressKeyWord: "",
          wardCode: this.wardCode ?? "",
          districtCode: this.districtCode ?? "",
          provinceCode: this.cityCode ?? "",
          minRent: this.minRent,
          maxRent: this.maxRent,
        },
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );
    },
    search(e) {
      if (e.key == "Enter") {
        this.postSearchRequest().then((res) => {
          if (res.status == 200) {
            this.items = [];
            console.log(res);
            res.data.result.forEach((element) => {
              this.items.push({
                id: element.id,
                title: element.caption,
                content: element.description ?? "Bài viết chưa có nội dung",
                image:
                  element.photos.length === 0
                    ? "https://solidstarts.com/wp-content/uploads/when-can-babies-eat-watermelon.jpg"
                    : `https://localhost:44334/Posts/${element.id}/images?file=${element.photos[0]}`,
              });
            });
          }
        });
      }
    },
    setPrice() {
      switch (this.rentValue) {
        case "00":
          this.minRent = 0;
          this.maxRent = 9999999999;
          break;
        case "01":
          this.minRent = 0;
          this.maxRent = 1000000;
          break;
        case "02":
          this.minRent = 1000000;
          this.maxRent = 3000000;
          break;
        case "03":
          this.minRent = 3000000;
          this.maxRent = 5000000;
          break;
        case "04":
          this.minRent = 5000000;
          this.maxRent = 10000000;
          break;
        case "05":
          this.minRent = 10000000;
          this.maxRent = 9999999999;
          break;
      }
    },
    getProvinces() {
      console.log("fetch Provinces");
      (this.cities = [{ value: null, text: "Chọn thành phố" }]),
        (this.districts = [{ value: null, text: "Chọn quận/huyện" }]),
        (this.wards = [{ value: null, text: "Chọn xã/phường" }]),
        (this.districtCode = null);
      this.wardCode = null;
      return axios
        .get(
          "/Locations/provinces",
          {},
          {
            headers: {
              // Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          res.data.forEach((element) => {
            this.cities.push({
              value: element.provinceCode,
              text: element.province,
            });
          });
        });
    },

    getDistricts() {
      console.log("fetch Districts");
      (this.districts = [{ value: null, text: "Chọn quận/huyện" }]),
        (this.wards = [{ value: null, text: "Chọn xã/phường" }]),
        (this.wardCode = null);
      this.districtCode = null;

      this.previousCityCode = this.cityCode;
      return axios
        .get("/Locations/districts", {
          headers: {
            // Authorization: `Bearer ${this.token}`,
          },
          params: {
            provinceCode: this.cityCode,
          },
        })
        .then((res) => {
          console.log(res);
          res.data.forEach((element) => {
            this.districts.push({
              value: element.districtCode,
              text: element.district,
            });
          });
        });
    },
    getWards() {
      this.wards = [{ value: null, text: "Chọn xã/phường" }];
      this.wardCode = null;
      console.log("fetch Wards");
      this.previousDistrictCode = this.districtCode;
      return axios
        .get("/Locations/wards", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
          params: {
            districtCode: this.districtCode,
          },
        })
        .then((res) => {
          console.log(res);
          res.data.forEach((element) => {
            this.wards.push({
              value: element.wardCode,
              text: element.ward,
            });
          });
        });
    },
  },
};
</script>

<style scoped>
.banner {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

.search-box {
  margin-top: -25%;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 0%;

  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px 5px 5px 5px;
  transition: 0.4s;
}
.search-box .type {
  display: block;
  width: 100%;
  margin-top: 5%;

  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.banner-wrapper::after {
  content: "";
  margin-top: 0%;
  left: 0;
  height: 300px;
  width: 100%;
  background-color: #000;
  opacity: 0.5;
}
.text-main-orange {
  color: #fc9807;
}
a.text-main-orange:hover {
  color: #fc9807;
}

.card-img-top {
  border-top-left-radius: 25px !important;
  border-top-right-radius: 25px !important;
}
</style>