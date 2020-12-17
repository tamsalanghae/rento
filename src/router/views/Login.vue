<template>
  <div id="background" class="d-flex justify-content-center">
    <b-card
        tag="article"
        class="mb-2 col-4"
    >
      <b-card-body>
        <div class="login-box">
          <h1>Login</h1>
          <div class="textbox">
            <font-awesome-icon :icon="['fas', 'user-secret']"/>
            <input type="text" placeholder="Username" name="" value="">
          </div>

          <div class="textbox">
            <i class="fa fa-lock"></i>
            <input type="password" placeholder="Password" name="" value="">
          </div>
          <input class="btn" type="button" name="" value="Sign in" onclick="">
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>
#background {
  background-size: cover;
  height: 100vh;
  background-image: url(~@/assets/img/back-gr10.jpg);
}

.login-box {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.login-box h1 {
  float: left;
  font-size: 60px;
  color: #FC9807;
  border-bottom: 6px solid #FC9807;
  margin-bottom: 50%;
  padding: 13px 0;
}

.textbox {
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  padding: 8px 0;
  margin: 8px 0;
  border-bottom: 1px solid #FC9807;
}

.textbox i {
  width: 30px;
  float: left;
  text-align: center;
  color: #FC9807;
}

.textbox input {
  border: none;
  outline: none;
  background: none;
  color: #000000;
  font-size: 18px;
  width: 80%;
  float: left;
  margin: 0 10px;
}

.btn {
  width: 100%;
  background: none;
  border: 2px solid #eee;
  color: #FC9807;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  margin: 30px 0;

  outline: none;
  border: #eee;
  box-shadow: 0 4px #FC9807;
}

.btn:hover {
  background-color: #FC9807;
  color: #eeeeee;
}

.btn:active {
  background-color: #FC9807;
  box-shadow: 0 5px #BFBFBF;
  transform: translateY(4px);
  color: #eeeeee;
}

</style>