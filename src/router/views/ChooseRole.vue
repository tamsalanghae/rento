<template>
  <div id="background" class="d-flex justify-content-center">
    <b-card tag="article" class="mb-2 col-4">
      <b-card-body>
        <div class="login-box">
          <h3 class="text-center">Đăng nhập với tư cách</h3><br><br>
          <div class="form-check">
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input"
                name="optradio"
              />Người cho thuê
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label" >
              <input
                type="radio"
                class="form-check-input"
                name="optradio"
                
              />Người thuê
            </label>
          </div>
          <br>
          <a href="Signup">
            <input class="float-right btn btn-primary" type="submit" value="Tiếp tục" style="background-color: #fc9807; border-color: #fc9807"/>
          </a>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ChooseRole",
  data() {
    return {};
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
</style>
