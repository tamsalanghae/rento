<template>
  <div>
    <div class="header bg-main">
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">


            <div class="d-flex justify-content-start">
                <a class="navbar-brand" href="">
                    <img src="@/assets/img/logo.png" class="w-40">
                </a>
            </div>
            <div class="d-flex justify-content-end">
                <div class="collapse navbar-collapse" id="navb">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item mr-3">
                            <a href="#" class="nav-link text-white fs-20"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a href="#" class="nav-link text-white fs-20">Nguyên căn</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a href="#" class="nav-link text-white fs-20">Ở ghép</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a href="#" class="nav-link text-white fs-20">Phòng trọ</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a href="#" class="nav-link text-white fs-20"><i class="fas fa-user-circle"></i> Đăng nhập</a>
                        </li>
                        <li class="nav-item">
                            <a href="input.html" class="nav-link text-white fs-20 btn btn-post"><i class="fas fa-edit"></i> Đăng bài</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</div>
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
                                <input class="form-control" placeholder="Tiêu đề">
                            </div>
                            <div class="form-group">
                                <label>Họ và tên chủ nhà</label>
                                <input class="form-control" placeholder="Họ và tên chủ nhà">
                            </div>
                            <div class="form-group">
                                <label>SĐT chủ nhà</label>
                                <input class="form-control" placeholder="SĐT">
                            </div>
                            <div class="form-group">
                                <label>Địa chỉ nhà</label>
                                <input class="form-control" placeholder="Địa chỉ">
                            </div>
                            <div class="form-group">
                                <label>Mô tả ngắn</label>
                                <textarea class="form-control" rows="3"></textarea>
                            </div>
                            <div class="text-center">
                                <label class="control-label">Danh sách Ảnh</label>
                            </div>
                            <form action="/file-upload" class="dropzone">
                                <input type="hidden" name="media"/>
                            </form>
                        </fieldset>
                        <button type="button" class="btn btn-success" id="addRoom">
                            Thêm phòng
                        </button>
                        <div class="room-area">
                            <fieldset class="scheduler-border">
                                <legend class="scheduler-border">Thông tin phòng</legend>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Diện tích phòng</label>
                                            <input class="form-control" placeholder="Họ và tên chủ nhà">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Diện tích phòng</label>
                                            <input class="form-control" placeholder="Họ và tên chủ nhà">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Giá tiền/tháng</label>
                                            <input class="form-control" placeholder="Giá tiền">
                                        </div>
                                    </div>
                                    <di class="col-6">
                                        <div class="form-group">
                                            <label>Khu vực</label>
                                            <select class="form-control">
                                                <option>Thanh Xuân</option>
                                                <option>Xuân Thủy</option>
                                                <option>Nguyễn Trãi</option>
                                                <option>Hò Tùng Mậu</option>
                                                <option>Cầu Giấy</option>
                                            </select>
                                        </div>
                                    </di>
                                </div>
                                <div class="text-center">
                                    <label class="control-label">Danh sách Ảnh</label>
                                </div>
                                <form action="/file-upload" class="dropzone">
                                    <input type="hidden" name="media"/>
                                </form>
                            </fieldset>
                        </div>
                        <div class="row">
                            <div class="col-12 text-center">
                                <button class="btn btn-primary ">
                                    Submit
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
export default {
  name: "Post",
  data() {
    return {};
  },

};
</script>


<style scoped>


.bg-main {
  background-color: #FFBA00;
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

.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
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
  background-color: #FC9807;
  border-color: #FC9807;
}
.text-main-orange {
  color: #FC9807;
}
a.text-main-orange:hover{
  color: #FC9807;
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


.min-max-slider {position: relative; width: 200px; text-align: center; margin-bottom: 20px;}
.min-max-slider > label {display: none;}
span.value {height: 1.7em; font-weight: bold; display: inline-block;}
span.value.lower::before {content: "€"; display: inline-block;}
span.value.upper::before {content: "- €"; display: inline-block; margin-left: 0.4em;}
.min-max-slider > .legend {display: flex; justify-content: space-between;}
.min-max-slider > .legend > * {font-size: small; opacity: 0.25;}
.min-max-slider > input {cursor: pointer; position: absolute;}

/* webkit specific styling */
.min-max-slider > input {
  -webkit-appearance: none;
  outline: none!important;
  background: transparent;
  background-image: linear-gradient(to bottom, transparent 0%, transparent 30%, silver 30%, silver 60%, transparent 60%, transparent 100%);
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
.min-max-slider > input::-webkit-slider-runnable-track {cursor: pointer;}

.box-shadow {
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.1);
}
fieldset.scheduler-border {
  border: 1px groove #ddd !important;
  padding: 0 1.4em 1.4em 1.4em !important;
  margin: 0 0 1.5em 0 !important;
  -webkit-box-shadow:  0px 0px 0px 0px #000;
  box-shadow:  0px 0px 0px 0px #000;
}

/*legend.scheduler-border {*/
/*    font-size: 1.2em !important;*/
/*    font-weight: bold !important;*/
/*    text-align: left !important;*/
/*}*/
legend.scheduler-border {
  width:inherit; /* Or auto */
  padding:0 10px; /* To give a bit of padding on the left and right */
  border-bottom:none;
}
[data-toggle="collapse"] .fa:before {
  content: "\f139";
}

[data-toggle="collapse"].collapsed .fa:before {
  content: "\f13a";
}

</style>