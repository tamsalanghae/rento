<template>
  <div>
    <navbar />
    <div class="main-content">
      <div class="container">
        <div class="information mt-3 bg-white box-shadow">
          <div class="row">
            <div class="col-12">
              <div class="p-3">                

                <div class="room-area">
                  <fieldset class="scheduler-border">
                    <legend class="scheduler-border">Thông tin phòng</legend>
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <label>Tiêu đề bài viết</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Tiêu đề bài viết"
                            v-model="caption"
                          />
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="form-group">
                          <label>Diện tích phòng</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Diện tích phòng"
                            v-model="area"
                          />
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="form-group">
                          <label>Giá tiền/tháng</label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Giá tiền"
                            v-model="rent"
                          />
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="form-group">
                          <label>Thành phố:</label>
                          <b-form-select
                            v-on:change="getDistricts"
                            v-model="cityCode"
                            :options="cities"
                          ></b-form-select>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="form-group">
                          <label>Phường:</label>
                          <b-form-select
                            v-on:change="getWards"
                            v-if="cityCode == previousCityCode"
                            v-model="districtCode"
                            :options="districts"
                          ></b-form-select>
                          <b-form-select
                            v-else
                            v-model="districtCode"
                            class="mb-3"
                            ><b-form-select-option :value="null"
                              >Chọn khu vực</b-form-select-option
                            >
                          </b-form-select>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="form-group">
                          <label>Xã:</label>
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
                              >Chọn khu vực</b-form-select-option
                            >
                          </b-form-select>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label>Địa chỉ</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Địa chỉ"
                        v-model="address"
                      />
                    </div>
                    <div class="form-group">
                      <label>Mô tả ngắn</label>
                      <textarea
                        type="text"
                        class="form-control"
                        placeholder="Mô tả ngắn"
                        v-model="description"
                        rows="3"
                      />
                    </div>
                    <div class="text-center">
                      <label class="control-label">Danh sách Ảnh</label>
                    </div>
                    <vue-upload-multiple-image
                      @upload-success="uploadImageSuccess"
                      @before-remove="beforeRemove"
                      @edit-image="editImage"
                      :data-images="roomImages"
                      idUpload="myIdUpload"
                      editUpload="myIdEdit"
                    ></vue-upload-multiple-image>
                  </fieldset>
                </div>
                <div class="row">
                  <div class="col-12 text-center">
                    <button class="btn btn-primary" v-on:click="addRoom">
                      Thêm phòng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";
import Navbar from "../../components/navbar.vue";
import axios from "../../utils/axios";

export default {
  name: "Post",
  components: { VueUploadMultipleImage, Navbar },
  data() {
    return {
      token: "",
      description: "",
      caption: "",
      address: "",
      rent: 0,
      previousCityCode: null,
      cityCode: null,
      previousDistrictCode: null,
      districtCode: null,
      wardCode: null,
      location: "",
      area: "",
      postId: "",
      imagesFormData: [],
      roomImages: [],
      cities: [{ value: null, text: "Chọn khu vực" }],
      districts: [{ value: null, text: "Chọn khu vực" }],
      wards: [{ value: null, text: "Chọn khu vực" }],
    };
  },
  created: function () {
    this.token = localStorage.getItem("token");
    this.postId = this.$route.params.id;  
    this.getProvinces();
    if(this.postId != null && this
    .postId != undefined){
       axios
        .get(`/Posts/${this.postId}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            var data = res.data;
            this.description = data.description;
            this.province = data.ward.district.province.province;
            this.address = data.address;
            this.photos = data.photos;
            this.caption = data.caption;
            this.area = data.area;
            this.rent = data.rent;
            this.cityCode = data.ward.district.province.provinceCode;
            this.getDistricts();            
            this.districtCode = data.ward.district.districtCode;
            this.getWards();
            this.wardCode = data.ward.wardCode;            
          }
        });
    }
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log("data", formData, index, fileList);
      this.imagesFormData.push(formData);
    },
    beforeRemove(index, done, fileList) {
      console.log("index", index, fileList);
      var r = confirm("remove image");
      if (r == true) {
        done();
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    },
    addRoom() {
      return axios
        .post(
          "/Posts",
          {
            id: "",
            caption: this.caption,
            wardCode: this.wardCode,
            address: this.address,
            rent: this.rent,
            description: this.description,
            area: this.area,
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((res) => {
          if (res.status == 200) {
            console.log(res);
            console.log(res.data.id);
            this.postId = res.data.id;
            this.postImages();
            this.$router.push("/host/postindex");
          }
        });
    },
    selectLocalCode(index) {
      console.log(index);
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
          "https://localhost:44334/Locations/provinces",
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
        .get("https://localhost:44334/Locations/districts", {
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
        .get("https://localhost:44334/Locations/wards", {
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
    postImages() {
      this.imagesFormData.forEach((element) =>
        axios
          .post(
            `https://localhost:44334/Posts/${this.postId}/images`,
            element,
            {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
            }
          )
          .then((response) => {
            console.log(response);
          })
      );
    },
  },
};
</script>


<style scoped>
.bg-main {
  background-color: #ffba00;
}
.bg-grey {
  background-color: rgb(244, 244, 244);
}
.w-40 {
  width: 40%;
}

.fs-20 {
  font-size: 1.25rem;
}

.uploading-image {
  display: flex;
}

.banner {
  width: 100%;
  max-height: 450px;
  object-fit: cover;
}

.box-search {
  margin-top: -15%;
  z-index: 999;
  position: relative;
}

.text-light {
  color: white;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #495057 !important;
}
.banner-wrapper::after {
  content: "";
  position: absolute;
  bottom: 435px;
  left: 0;
  height: 120px;
  width: 100%;
  background-color: #000;
  opacity: 0.5;
}
.btn-post {
  background-color: #fc9807;
  border-color: #fc9807;
}
.text-main-orange {
  color: #fc9807;
}
a.text-main-orange:hover {
  color: #fc9807;
}
.left-chevron-control {
  font-size: 50px;
  z-index: 100;
  top: 185px;
  left: -25px;
}
.right-chevron-control {
  font-size: 50px;
  z-index: 100;
  top: 185px;
  right: -25px;
}
.single-item {
  border-radius: 25px;
}
.card-img-top {
  border-top-left-radius: 25px !important;
  border-top-right-radius: 25px !important;
}

.min-max-slider {
  position: relative;
  width: 200px;
  text-align: center;
  margin-bottom: 20px;
}
.min-max-slider > label {
  display: none;
}
span.value {
  height: 1.7em;
  font-weight: bold;
  display: inline-block;
}
span.value.lower::before {
  content: "€";
  display: inline-block;
}
span.value.upper::before {
  content: "- €";
  display: inline-block;
  margin-left: 0.4em;
}
.min-max-slider > .legend {
  display: flex;
  justify-content: space-between;
}
.min-max-slider > .legend > * {
  font-size: small;
  opacity: 0.25;
}
.min-max-slider > input {
  cursor: pointer;
  position: absolute;
}

/* webkit specific styling */
.min-max-slider > input {
  -webkit-appearance: none;
  outline: none !important;
  background: transparent;
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 30%,
    silver 30%,
    silver 60%,
    transparent 60%,
    transparent 100%
  );
}
.min-max-slider > input::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 14px; /* Set a specific slider handle width */
  height: 14px; /* Slider handle height */
  background: #eee; /* Green background */
  cursor: pointer; /* Cursor on hover */
  border: 1px solid gray;
  border-radius: 100%;
}

.min-max-slider > input::-webkit-slider-runnable-track {
  cursor: pointer;
}

.box-shadow {
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.1);
}
fieldset.scheduler-border {
  border: 1px groove #ddd !important;
  padding: 0 1.4em 1.4em 1.4em !important;
  margin: 0 0 1.5em 0 !important;
  -webkit-box-shadow: 0px 0px 0px 0px #000;
  box-shadow: 0px 0px 0px 0px #000;
}

/*legend.scheduler-border {*/
/*    font-size: 1.2em !important;*/
/*    font-weight: bold !important;*/
/*    text-align: left !important;*/
/*}*/
legend.scheduler-border {
  width: inherit; /* Or auto */
  padding: 0 10px; /* To give a bit of padding on the left and right */
  border-bottom: none;
}
[data-toggle="collapse"] .fa:before {
  content: "\f139";
}

[data-toggle="collapse"].collapsed .fa:before {
  content: "\f13a";
}
</style>