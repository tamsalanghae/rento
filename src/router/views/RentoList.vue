<template>
  <div>
    <navbar />
    <div class="main-content">
      <div class="container">
        <div class="information mt-3">
          <div class="row">
            <div class="col-3 mt-3">
              <div class="p-3 box-shadow bg-white">
                <div class="slider range">
                  <h5 class="text-main-orange">Chọn khoảng giá</h5>
                  <div class="min-max-slider" data-legendnum="2">
                    <label for="min">Minimum price</label>

                    <label for="max">Maximum price</label>
                  </div>
                </div>

                <div class="check-box">
                  <h5 class="text-main-orange">Chọn địa điểm</h5>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="cau-giay"
                    />
                    <label class="custom-control-label" for="cau-giay"
                      >Cầu giấy</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="thanh-xuan"
                    />
                    <label class="custom-control-label" for="thanh-xuan"
                      >Thanh Xuân</label
                    >
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="xuan-thuy"
                    />
                    <label class="custom-control-label" for="xuan-thuy"
                      >Xuân Thủy</label
                    >
                  </div>

                  <div id="collapse" class="collapse">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="hoang-quoc-viet"
                      />
                      <label class="custom-control-label" for="hoang-quoc-viet"
                        >Hoàng Quốc Việt</label
                      >
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="tran-quoc-hoan"
                      />
                      <label class="custom-control-label" for="tran-quoc-hoan"
                        >Trần Quốc Hoàn</label
                      >
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="nguyen-trai"
                      />
                      <label class="custom-control-label" for="nguyen-trai"
                        >Nguyễn Trãi</label
                      >
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-main-orange"
                    data-toggle="collapse"
                    data-target="#collapse"
                    >Xem thêm</a
                  >
                </div>
              </div>
            </div>
            <div class="col-9 mt-3">
              <div class="p-3 box-shadow bg-white">
                <div class="row">
                  <div class="col-md-4">
                    <div class="card mb-2 single-item">
                      <img
                        class="card-img-top"
                        src="@/assets/img/back-gr10.jpg"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 d-none d-md-block">
                    <div class="card mb-2 single-item">
                      <img
                        class="card-img-top"
                        src="@/assets/img/back-gr10.jpg"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 d-none d-md-block">
                    <div class="card mb-2 single-item">
                      <img
                        class="card-img-top"
                        src="@/assets/img/back-gr10.jpg"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-4">
                    <div class="card mb-2 single-item">
                      <img
                        class="card-img-top"
                        src="@/assets/img/back-gr10.jpg"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 d-none d-md-block">
                    <div class="card mb-2 single-item">
                      <img
                        class="card-img-top"
                        src="@/assets/img/back-gr10.jpg"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 d-none d-md-block">
                    <div class="card mb-2 single-item">
                      <img
                        class="card-img-top"
                        src="@/assets/img/back-gr10.jpg"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-4">
                    <div class="card mb-2 single-item">
                      <img
                        class="card-img-top"
                        src="@/assets/img/back-gr10.jpg"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 d-none d-md-block">
                    <div class="card mb-2 single-item">
                      <img
                        class="card-img-top"
                        src="@/assets/img/back-gr10.jpg"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 d-none d-md-block">
                    <div class="card mb-2 single-item">
                      <img
                        class="card-img-top"
                        src="@/assets/img/back-gr10.jpg"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
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
import Navbar from "../../components/navbar.vue";
export default {
  name: "RentoList",
  components: {
    Navbar,
  },
  data() {
    return {
      price: 0,
    };
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