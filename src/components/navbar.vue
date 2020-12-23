<template>
  <div class="header bg-main">
    <b-navbar toggleable="lg" type="dark">
      <div class="container" style="max-width: 1200px">
        <div class="d-flex justify-content-start">
          <b-navbar-brand>
            <img src="@/assets/img/logo.png" class="w-40" />
          </b-navbar-brand>
        </div>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <div class="d-flex justify-content-end">
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav v-if="role == 'Renter'">
              <b-nav-item>
                <router-link to="/home" class="nav-link text-white fs-20"
                  ><i class="fas fa-home"></i> Home</router-link
                >
              </b-nav-item>
              <b-nav-item>
                <router-link to="/rentoList" class="nav-link text-white fs-20"
                  >Nguyên căn</router-link
                >
              </b-nav-item>
              <b-nav-item>
                <router-link to="/rentoList" class="nav-link text-white fs-20"
                  >Ở ghép</router-link
                >
              </b-nav-item>
              <b-nav-item>
                <router-link to="/rentoList" class="nav-link text-white fs-20"
                  >Phòng trọ</router-link
                >
              </b-nav-item>
              <b-nav-item>
                <router-link
                  to="/rentoFavorite"
                  class="nav-link text-white fs-20"
                  ><font-awesome-icon :icon="['fas', 'heart']" /> Yêu thích</router-link
                >
              </b-nav-item>
              <b-nav-item>
                <button
                type="button"
                 style="background-color: #fc9807; border-color: #fc9807; height:50px">
            
                <router-link
                  to="/Post"
                  class="nav-link text-white fs-20"
                  ><font-awesome-icon style="font-size: 20px;" :icon="['far', 'edit']"></font-awesome-icon> Bài đăng</router-link
                >
                </button>
              </b-nav-item>
              <b-nav-item>
                <a class="nav-link text-white fs-20" @click="onSignOut"
                  >Đăng xuất</a
                >
              </b-nav-item>
              


              <b-nav-item href="Profile"
                ><img src="@/assets/img/av.jpg" alt="Avatar" class="avatar" style="object-fit: cover;"
              /></b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav v-else-if="role == 'Admin'">
              <b-nav-item>
                <router-link
                  to="/admin/userindex"
                  class="nav-link text-white fs-20"
                  ><i class="fas fa-home"></i>Chủ trọ</router-link
                >
              </b-nav-item>
              <b-nav-item>
                <router-link
                  to="/admin/postindex"
                  class="nav-link text-white fs-20"
                  >Bài đăng</router-link
                >
              </b-nav-item>
              <b-nav-item>
                <a class="nav-link text-white fs-20" @click="onSignOut"
                  >Đăng xuất</a
                >
              </b-nav-item>
              <b-nav-item href="Profile"
                ><img src="@/assets/img/av.jpg" alt="Avatar" class="avatar" style="object-fit: cover;"
              /></b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav v-else>
              <b-nav-item>
                <router-link
                  to="/admin/postindex"
                  class="nav-link text-white fs-20"
                  >Bài đăng</router-link
                >
              </b-nav-item>
              <b-nav-item>
                <a class="nav-link text-white fs-20" @click="onSignOut"
                  >Đăng xuất</a
                >
              </b-nav-item>
            </b-navbar-nav>
            <b-nav-item href="Profile"
              ><img src="@/assets/img/cat-1.svg" alt="Avatar" class="avatar"
            /></b-nav-item>
          </b-collapse>
        </div>
      </div>
    </b-navbar>
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
    },
  },
  data() {
    return {
      role: "",
    };
  },
  mounted: function () {
    this.role = localStorage.getItem("role");
  },
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
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
