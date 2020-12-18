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
                  <a href="" class="nav-link text-white fs-20"><i class="fas fa-user-circle"></i> Đăng nhập</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link text-white fs-20 btn btn-post"><i class="fas fa-edit"></i> Đăng bài</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="banner-wrapper">
      <div class="bx-wrapper">
        <img class="banner" src="@/assets/img/banner.jpg">
      </div>
      <div class="container position-relative">
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <div class="box-search">
              <nav class="text-center">
                <div class="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
                  <a class="nav-item nav-link active text-white" id="nav-all-tab" data-toggle="tab"
                     href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Tổng hợp</a>
                  <a class="nav-item nav-link text-white" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                     role="tab" aria-controls="nav-home" aria-selected="true">Nguyên căn</a>
                  <a class="nav-item nav-link text-white" id="nav-profile-tab" data-toggle="tab"
                     href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Ở
                    ghép</a>
                  <a class="nav-item nav-link text-white" id="nav-contact-tab" data-toggle="tab"
                     href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Phòng
                    trọ</a>
                </div>
              </nav>
              <div class="tab-content mt-3" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-all" role="tabpanel"
                     aria-labelledby="nav-all-tab">
                  <form action="">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search this blog">
                      <div class="input-group-append">
                        <button class="btn btn-secondary" type="button">
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="tab-pane fade show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <form action="">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search this blog">
                      <div class="input-group-append">
                        <button class="btn btn-secondary" type="button">
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="tab-pane fade mt-3" id="nav-profile" role="tabpanel"
                     aria-labelledby="nav-profile-tab">
                  <form action="">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search this blog">
                      <div class="input-group-append">
                        <button class="btn btn-secondary" type="button">
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="tab-pane fade mt-3" id="nav-contact" role="tabpanel"
                     aria-labelledby="nav-contact-tab">
                  <form action="">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search this blog">
                      <div class="input-group-append">
                        <button class="btn btn-secondary" type="button">
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
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
                    <img class="w-100" src="@/assets/img/cat-1.svg">
                  </div>
                  <div class="col-md-7 d-table-cell align-middle">
                    <h4>Nguyên căn</h4>
                    <p>4,000 tin mua bán</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="p-4">
                <div class="row d-table">
                  <div class="col-md-5 d-table-cell align-middle">
                    <img class="w-100" src="@/assets/img/cat-2.svg">
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
                    <img class="w-100" src="@/assets/img/cat-3.svg">
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
            <hr class="my-4">
            <a href="#"><h4 class="mb-3 text-main-orange">Nguyên căn</h4></a>
            <!--Carousel Wrapper-->
            <div id="multi-item-example-1" class="carousel slide carousel-multi-item" data-ride="carousel">

              <!--Controls-->
              <div class="left-control position-relative">
                <a class="btn-floating position-absolute left-chevron-control text-main-orange" href="#multi-item-example-1" data-slide="prev"><i class="fas fa-chevron-circle-left"></i></a>
              </div>
              <div class="text-center">
                <a class="btn-floating position-absolute right-chevron-control text-main-orange" href="#multi-item-example-1" data-slide="next"><i class="fas fa-chevron-circle-right"></i></a>
              </div>
              <!--/.Controls-->

              <!--Indicators-->
              <ol class="carousel-indicators">
                <li data-target="#multi-item-example-1" data-slide-to="0" class="active"></li>
                <li data-target="#multi-item-example-1" data-slide-to="1"></li>
                <li data-target="#multi-item-example-1" data-slide-to="2"></li>
              </ol>
              <!--/.Indicators-->

              <!--Slides-->
              <div class="carousel-inner" role="listbox">

                <!--First slide-->
                <div class="carousel-item active">

                  <div class="row">
                    <div class="col-md-4">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <!--/.First slide-->

                <!--Second slide-->
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <!--/.Second slide-->

                <!--Third slide-->
                <div class="carousel-item">

                  <div class="row">
                    <div class="col-md-4">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <!--/.Third slide-->

              </div>
              <!--/.Slides-->

            </div>
            <!--/.Carousel Wrapper-->


          </div>
          <div class="container my-4 mt-3">
            <hr class="my-4">
            <a href="#"><h4 class="mb-3 text-main-orange">Ở ghép</h4></a>
            <!--Carousel Wrapper-->
            <div id="multi-item-example-2" class="carousel slide carousel-multi-item" data-ride="carousel">

              <!--Controls-->
              <div class="left-control position-relative">
                <a class="btn-floating position-absolute left-chevron-control text-main-orange" href="#multi-item-example-2" data-slide="prev"><i class="fas fa-chevron-circle-left"></i></a>
              </div>
              <div class="text-center">
                <a class="btn-floating position-absolute right-chevron-control text-main-orange" href="#multi-item-example-2" data-slide="next"><i class="fas fa-chevron-circle-right"></i></a>
              </div>
              <!--/.Controls-->

              <!--Indicators-->
              <ol class="carousel-indicators">
                <li data-target="#multi-item-example-2" data-slide-to="0" class="active"></li>
                <li data-target="#multi-item-example-2" data-slide-to="1"></li>
                <li data-target="#multi-item-example-2" data-slide-to="2"></li>
              </ol>
              <!--/.Indicators-->

              <!--Slides-->
              <div class="carousel-inner" role="listbox">

                <!--First slide-->
                <div class="carousel-item active">

                  <div class="row">
                    <div class="col-md-4">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <!--/.First slide-->

                <!--Second slide-->
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <!--/.Second slide-->

                <!--Third slide-->
                <div class="carousel-item">

                  <div class="row">
                    <div class="col-md-4">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <!--/.Third slide-->

              </div>
              <!--/.Slides-->

            </div>
            <!--/.Carousel Wrapper-->


          </div>
          <div class="container my-4 mt-3">
            <hr class="my-4">
            <a href="#"><h4 class="mb-3 text-main-orange">Phòng trọ</h4></a>
            <!--Carousel Wrapper-->
            <div id="multi-item-example-3" class="carousel slide carousel-multi-item" data-ride="carousel">

              <!--Controls-->
              <div class="left-control position-relative">
                <a class="btn-floating position-absolute left-chevron-control text-main-orange" href="#multi-item-example-3" data-slide="prev"><i class="fas fa-chevron-circle-left"></i></a>
              </div>
              <div class="text-center">
                <a class="btn-floating position-absolute right-chevron-control text-main-orange" href="#multi-item-example-3" data-slide="next"><i class="fas fa-chevron-circle-right"></i></a>
              </div>
              <!--/.Controls-->

              <!--Indicators-->
              <ol class="carousel-indicators">
                <li data-target="#multi-item-example-3" data-slide-to="0" class="active"></li>
                <li data-target="#multi-item-example-3" data-slide-to="1"></li>
                <li data-target="#multi-item-example-3" data-slide-to="2"></li>
              </ol>
              <!--/.Indicators-->

              <!--Slides-->
              <div class="carousel-inner" role="listbox">

                <!--First slide-->
                <div class="carousel-item active">

                  <div class="row">
                    <div class="col-md-4">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <!--/.First slide-->

                <!--Second slide-->
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <!--/.Second slide-->

                <!--Third slide-->
                <div class="carousel-item">

                  <div class="row">
                    <div class="col-md-4">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 clearfix d-none d-md-block">
                      <div class="card mb-2 single-item">
                        <img class="card-img-top" src="@/assets/img/back-gr10.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                          <h4 class="card-title">Card title</h4>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                          <a class="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <!--/.Third slide-->

              </div>
              <!--/.Slides-->

            </div>
            <!--/.Carousel Wrapper-->


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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