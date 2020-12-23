<template>
  <div>
    <div id="background" class="d-flex justify-content-center">
      <div class="card">
        <img src="@/assets/img/ok-01.png" />
        <h2>Yêu cầu đăng ký đã được gửi đi!</h2>
        <p>
          Yêu cầu đăng ký tài khoản của bạn đang trong quá trình phê duyệt. Kết
          quả sẽ được gửi về email của bạn.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WaitingApprove",
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

.card {
  height: 35%;
  width: 70%;
  margin-top: 50px;
  text-align: center;
}
.card h2 {
  margin-top: 20px;
}
img {
  height: 85px;
  width: 85px;
  margin-left: 45%;
  margin-top: 2%;
}
</style>


