<template>
  <div id="background" class="d-flex justify-content-center">
    <b-card tag="article" class="mb-2 col-4">
      <b-card-body>
        <div class="login-box">
          <h3 class="text-center">Đăng nhập với tư cách</h3>
          <br /><br />
          <div class="form-check">
            <div class="row">
              <div class="card" @click="setRole('Host')">
                <img
                  src="@/assets/img/cat-2.svg"
                  alt="Avatar"
                  style="width:50%"
                />
                <div class="container">
                  <h5><b>Cho thuê</b></h5>
                </div>
              </div>

              <div class="card" @click="setRole('Renter')">
                <img
                  src="@/assets/img/cat-2.svg"
                  alt="Avatar"
                  style="width:50%"
                />
                <div class="container">
                  <h5><b>Người thuê</b></h5>
                </div>
              </div>

            </div>
          </div>
          <br />
          <input
            class="float-right btn btn-primary"
            type="submit"
            value="Tiếp tục"
            @click="submit"
            style="background-color: #fc9807; border-color: #fc9807"
          />
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>

export default {
  name: "ChooseRole",
  data() {
    return {
      role: "",
    };
  },
  methods: {
    setRole(value){
      this.role = value;
        localStorage.setItem("role", this.role);
        console.log(this.role);
  },
    submit() {
      // 
     this.$router.push("/Signup");
    },
  },
  
};
</script>
<style scoped>
#background {
  background-size: cover;
  height: 100vh;
  background-image: url(~@/assets/img/back-gr10.jpg);
}
.login-box {
  margin-top: 150px;
  margin-right: 30px;
  margin-left: 30px;
}
input {
  margin-top: 20%;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 45%;
  margin-right: 15px;
  text-align: center;
}
.card :active {
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(134, 2, 2, 0.493);
}
.card img {
  height: 100px;
  margin-left: 25%;
}
.container {
}
</style>
