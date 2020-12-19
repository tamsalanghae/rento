<template>
  <div>
<div class="header bg-main">
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <div class="d-flex justify-content-start">
                <a class="navbar-brand" href="Home">
                    <img src="@/assets/img/logo.png" class="w-40">
                </a>
            </div>
            <div class="d-flex justify-content-end">
                <div class="collapse navbar-collapse" id="navb">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item mr-3">
                            <a href="Home" class="nav-link text-white fs-20"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a href="RentoList" class="nav-link text-white fs-20">Nguyên căn</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a href="RentoList" class="nav-link text-white fs-20">Ở ghép</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a href="RentoList" class="nav-link text-white fs-20">Phòng trọ</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a href="Login" class="nav-link text-white fs-20"><i class="fas fa-user-circle"></i> Đăng
                                nhập</a>
                        </li>
                        <li class="nav-item">
                            <a href="Post" class="nav-link text-white fs-20 btn btn-post"><i
                                    class="fas fa-edit"></i> Đăng bài</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</div>
<div class="main-content">
    <div class="container">
        <div class="information bg-white box-shadow">
            <div id="demo" class="carousel slide" data-ride="carousel">

                <!-- Indicators -->
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>

                <!-- The slideshow -->
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="w-100" src="@/assets/img/la.jpg" alt="Los Angeles">
                    </div>
                    <div class="carousel-item">
                        <img class="w-100" src="@/assets/img/la.jpg" alt="Chicago">
                    </div>
                    <div class="carousel-item">
                        <img class="w-100" src="@/assets/img/la.jpg" alt="New York">
                    </div>
                </div>

                <!-- Left and right controls -->
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
            <div class="detail-infor">
                <h3 class="text-main-orange text-center p-3">Tiêu đề cho thuê</h3>
                <div class="row mt-3">
                    <div class="col-6">
                        <div class="p-3">
                            <table class="table table-striped p-3">
                                <tr>
                                    <th>Tên chủ nhà</th>
                                    <td>Nguyễn Văn A</td>
                                </tr>
                                <tr>
                                    <th>SĐT</th>
                                    <td>0123456789</td>
                                </tr>
                                <tr>
                                    <th>Khu vực</th>
                                    <td>Láng</td>
                                </tr>
                                <tr>
                                    <th>Địa chỉ</th>
                                    <td>Chùa láng</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="p-3">
                            <h5 class="text-center">Mô tả</h5>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec pharetra lorem. Pellentesque id est sem. Aenean at augue eu tortor convallis interdum. Phasellus id vulputate mi, id pellentesque sapien. Praesent vel eleifend est, vitae cursus urna. Maecenas maximus dui non ex hendrerit, ut mollis ipsum rhoncus. Maecenas augue tellus, dapibus vel quam nec, commodo egestas nisl. Sed rutrum urna tortor, a mollis dui imperdiet quis. Aliquam finibus est augue, ut convallis sapien facilisis at. Quisque ullamcorper tempus sollicitudin. Duis id neque dapibus nisl vehicula scelerisque. Nam sodales ac diam vel dictum. Vestibulum consequat tincidunt dignissim. Vestibulum vehicula turpis id.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail-room mt-3">
                <h3 class="text-main-orange text-center p-3">Danh sách phòng</h3>
                <div class="container">
                    <div id="accordion">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fa" aria-hidden="true"></i>
                                        Phòng 1
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
                                 data-parent="#accordion">
                                <div class="card-body">
                                    <div class="row mb-2">
                                        <div class="col-12">
                                            <span><strong>Diện tích:</strong> 20m2</span>
                                        </div>
                                    </div>
                                    <div class="row lightgallery">
                                        <a class="col-3" href="#">
                                            <img class="w-100" src="@/assets/img/la.jpg"/>
                                        </a>
                                        <a class="col-3" href="#">
                                            <img class="w-100" src="@/assets/img/la.jpg"/>
                                        </a>
                                        <a class="col-3" href="#">
                                            <img class="w-100" src="@/assets/img/la.jpg"/>
                                        </a>
                                        <a class="col-3" href="#">
                                            <img class="w-100" src="@/assets/img/la.jpg"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse"
                                            data-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">
                                        <i class="fa" aria-hidden="true"></i>
                                        Phòng 2
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                 data-parent="#accordion">
                                <div class="card-body">
                                    <div class="row lightgallery">
                                        <a class="col-3" href="#">
                                            <img class="w-100" src="@/assets/img/la.jpg"/>
                                        </a>
                                        <a class="col-3" href="#">
                                            <img class="w-100" src="@/assets/img/la.jpg"/>
                                        </a>
                                        <a class="col-3" href="#">
                                            <img class="w-100" src="@/assets/img/la.jpg"/>
                                        </a>
                                        <a class="col-3" href="#">
                                            <img class="w-100" src="@/assets/img/la.jpg"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse"
                                            data-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                        <i class="fa" aria-hidden="true"></i>
                                        Phòng 3
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                 data-parent="#accordion">
                                <div class="card-body">
                                    <div class="row lightgallery">
                                        <a class="col-3" href="#">
                                            <img class="w-100" src="@/assets/img/la.jpg"/>
                                        </a>
                                        <a class="col-3" href="#">
                                            <img class="w-100" src="@/assets/img/la.jpg"/>
                                        </a>
                                        <a class="col-3" href="#">
                                            <img class="w-100" src="@/assets/img/la.jpg"/>
                                        </a>
                                        <a class="col-3" href="#">
                                            <img class="w-100" src="@/assets/img/la.jpg"/>
                                        </a>
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
export default {
  name: "RentoList",
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