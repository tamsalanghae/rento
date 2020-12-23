<template>
  <div class="header bg-main">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <div class="d-flex justify-content-start">
          <a class="navbar-brand" href="">
            <img src="@/assets/img/logo.png" class="w-40" />
          </a>
        </div>
        <div class="d-flex justify-content-end">
          <div class="collapse navbar-collapse" id="navb">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item mr-3">
                <router-link to="/admin/userindex" class="nav-link text-white fs-20"><i class="fas fa-home"></i>Chủ trọ</router-link> 
              </li>
              <li class="nav-item mr-3">
                 <router-link to="/admin/postindex" class="nav-link text-white fs-20">Bài đăng</router-link> 
              </li>
              <li class="nav-item">
                <router-link to="/post" class="nav-link text-white fs-20 btn btn-post"
                  ><i class="fas fa-edit"></i> Đăng bài</router-link> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbarAdmin",
};
</script>

<style scoped>
.bg-main {
  background-color: #ffba00;
}

.w-40 {
  width: 40%;
}

.fs-20 {
  font-size: 1.25rem;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #495057 !important;
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

[data-toggle="collapse"] .fa:before {
  content: "\f139";
}

[data-toggle="collapse"].collapsed .fa:before {
  content: "\f13a";
}
</style>