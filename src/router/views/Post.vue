<template>
  <div>
    <navbar />
    <div class="main-content">
      <div class="container">
        <div class="information mt-3 bg-white box-shadow">
          <div class="row">
            <div class="col-12">
              <div class="p-3">
                <fieldset class="scheduler-border">
                  <legend class="scheduler-border">Thông tin Chủ nhà</legend>
                  <div class="form-group">
                    <label>Tiêu đề cho thuê</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Tiêu đề"
                      v-model="title"
                    />
                  </div>
                  <div class="form-group">
                    <label>Họ và tên chủ nhà</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Họ và tên chủ nhà"
                      v-model="landlord"
                    />
                  </div>
                  <div class="form-group">
                    <label>Số điện thoại chủ nhà</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Số điện thoại chủ nhà"
                      v-model="phonenumber"
                    />
                  </div>
                  <div class="form-group">
                    <label>Địa chỉ nhà</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Địa chỉ nhà"
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
                    :data-images="images"
                    idUpload="myIdUpload"
                    editUpload="myIdEdit"
                  ></vue-upload-multiple-image>
                </fieldset>
                <div class="col-12 text-center">
                  <button
                    type="button"
                    class="btn btn-success"
                    v-on:click="addRoom"
                  >
                    Tạo hồ sơ chủ nhà
                  </button>
                </div>

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
                            class="form-control"
                            placeholder="Diện tích phòng"
                          />
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="form-group">
                          <label>Giá tiền/tháng</label>
                          <input class="form-control" placeholder="Giá tiền" />
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="form-group">
                          <label>Thành phố:</label>
                          <b-form-select
                            v-model="cityCode"
                            :options="cities"
                          ></b-form-select>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="form-group">
                          <label>Phường:</label>
                          <b-form-select
                            v-model="districtCode"
                            :options="districts"
                          ></b-form-select>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="form-group">
                          <label>Xã:</label>
                          <b-form-select
                            v-model="wardCode"
                            :options="wards"
                          ></b-form-select>
                        </div>
                      </div>
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
                      :data-images="images"
                      idUpload="myIdUpload"
                      editUpload="myIdEdit"
                    ></vue-upload-multiple-image>
                  </fieldset>
                </div>
                <div class="row">
                  <div class="col-12 text-center">
                    <button class="btn btn-primary">Thêm phòng</button>
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

export default {
  name: "Post",
  components: { VueUploadMultipleImage, Navbar },
  data() {
    return {
      title: "",
      landlord: "",
      phonenumber: "",
      address: "",
      description: "",
      caption: "",
      cityCode: null,
      districtCode: null,
      wardCode: null,
      location: "",
      images: [],
      cities: [
        { value: null, text: "Chọn khu vực" },
        { value: "01", text: "Hà Nội" },
        { value: "02", text: "Bắc Ninh" },
        { value: "03", text: "Thanh Hóa" },
        { value: "04", text: "Hồ Chí Minh" },
      ],
      districts: [
        { value: null, text: "Chọn khu vực" },
        { value: "01", text: "Thanh Xuân" },
        { value: "02", text: "Cầu Giấy" },
        { value: "03", text: "Bắc Từ Liêm" },
        { value: "04", text: "Cổ Nhuế" },
      ],
      wards: [
        { value: null, text: "Chọn khu vực" },
        { value: "01", text: "Xuân Đỉnh" },
        { value: "02", text: "Xuân Tảo" },
        { value: "03", text: "Xuân La" },
        { value: "04", text: "Cổ Nhuế" },
      ],
    };
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log("data", formData, index, fileList);
      // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
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
      console.log(
        `${this.title} ${this.landlord} ${this.phonenumber} ${this.address} ${this.description}`
      );
    },
    selectLocalCode(index) {
      console.log(index);
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