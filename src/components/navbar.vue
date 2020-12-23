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
                <router-link to="/home" class="nav-link text-white fs-20"><i class="fas fa-home"></i> Home</router-link> 
              </li>
              <li class="nav-item mr-3">
                 <router-link to="/rentoList" class="nav-link text-white fs-20">Nguyên căn</router-link> 
              </li>
              <li class="nav-item mr-3">
                <router-link to="/rentoList" class="nav-link text-white fs-20">Ở ghép</router-link> 
              </li>
              <li class="nav-item mr-3">
                <router-link to="/rentoList" class="nav-link text-white fs-20">Phòng trọ</router-link> 
              </li>
              <li class="nav-item mr-3">
               <a class="nav-link text-white fs-20" @click="onSignOut">Đăng xuất</a> 
              </li>
              <li class="nav-item">
                <router-link to="/post" class="nav-link text-white fs-20 btn btn-post"
                  ><font-awesome-icon style="font-size: 20px;" :icon="['far', 'edit']"></font-awesome-icon> Đăng bài</router-link> 
              </li>
              <li class="nav-item mr-3">
               <router-link to="/rentoFavorite" class="nav-link text-white fs-20" style="margin-left:20px">Yêu thích</router-link> 
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
  name: "navbar",
  methods: {
    onSignOut() {
      localStorage.removeItem("username");
      localStorage.removeItem("role");
      localStorage.removeItem("token");
      localStorage.removeItem("password");
      this.$router.push("/login");
    }
  }
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

.nav-link:hover {
  cursor: pointer;
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