<template>
  <div id="background" class="d-flex justify-content-center">
    <b-card tag="article" class="mb-2 col-4">
      <b-card-body>
        <div class="login-box">
          <h3 class="text-center">Đăng nhập với tư cách</h3>
          <br /><br />
          <div class="form-check">
            <div class="row">
              <div class="col">
                <div class="img-container">
                  <img src="@/assets/img/cat-2.svg" @click='role="Host"'/>
                </div>
                <p>Cho thuê</p>
              </div>
              <div class="row">
                <div class="img-container">
                  <img src="@/assets/img/cat-2.svg" @click='role="Renter"'/>
                </div>
                <p>Người thuê</p>
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
      role : "",
    };
  },
  methods: {
    submit(){
    console.log(this.role);
    
  }
  }
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
.img-container {
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  width: 50%;
  height: 100%;
  padding-top: 20%;
  margin-right: 0%;
  margin-left: 0%;
}
img {
  object-fit: cover;
  width: 100%;
  height: 50%;
  margin-right: 0%;
  margin-left: 0%;
}
p {
  margin-bottom: 20px;
}
</style>
