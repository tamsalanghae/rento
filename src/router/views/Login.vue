<template>
  <div id="background" class="d-flex justify-content-center">
    <b-card tag="article" class="mb-2 col-md-6 col-12">
      <b-alert
        v-model="showWrongPasswordAlert"
        dismissible
        variant="danger"
        class="position-fixed"
        style="top: 1rem; right: 1rem"
        fade
        >Bạn đã nhập sai username hoặc mật khẩu. Vui lòng thử lại.</b-alert
      >
      <b-card-body>
        <div class="login-box">
          <h1>Login</h1>
          <div class="textbox">
            <ValidationObserver>
              <ValidationProvider rules="required" v-slot="{ errors }">
                <input
                  v-model="username"
                  placeholder="Username"
                  name="fieldName"
                />
                <br />
                <div style="color: red; font-size: 14px">{{ errors[0] }}</div>
              </ValidationProvider>
            </ValidationObserver>
          </div>

          <div class="textbox">
            <ValidationObserver>
              <ValidationProvider rules="required" v-slot="{ errors }">
                <input
                  v-model="password"
                  placeholder="Password"
                  name=""
                  :type="passwordType"
                />
                <font-awesome-icon
                  :icon="[
                    'fas',
                    passwordType === 'password' ? 'eye' : 'eye-slash',
                  ]"
                  class="text-dark"
                  style="cursor: pointer"
                  @click="Show"
                  title="Toggle Show Password"
                />
                <br />
                <span style="color: red; font-size: 14px">{{ errors[0] }}</span>
              </ValidationProvider>
            </ValidationObserver>
          </div>
          <input
            class="btn"
            type="button"
            name=""
            value="Đăng nhập"
            @click="signin"
          />
          <p style="color: black">
            Bạn chưa có tài khoản? <a href="ChooseRole">Đăng ký</a>
          </p>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import axios from "../../utils/axios";
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "* This field cannot be empty",
});
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      passwordType: "password",
      showWrongPasswordAlert: false,
    };
  },

  mounted: function () {
    if (
      localStorage.getItem("username") != null &&
      localStorage.getItem("password") != null
    ) {
      this.username = localStorage.getItem("username");
      this.password = localStorage.getItem("password");
      console.log("this.signin();");
    }
  },
  methods: {
    signin() {
      console.log(localStorage.getItem("username"));
      console.log(localStorage.getItem("password"));
      axios
        .post("/Users/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            localStorage.setItem("username", this.username);
            localStorage.setItem("password", this.password);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role)
            console.log(res.status == 200);
            console.log(localStorage.getItem("username"));
            const userRole = res.data.role;
            if (userRole === "Admin") {
              this.$router.push({ name: "AdminPostIndex" });
            } else if(userRole === "Host") this.$router.push( "/host/postindex"); else this.$router.push("/Home");
          }
        })
        .catch(() => {
          this.showWrongPasswordAlert = true;
        });
    },
    Show() {
      if (this.passwordType == "password") {
        console.log(this.passwordType);
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
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
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.login-box h1 {
  float: left;
  font-size: 60px;
  color: #fc9807;
  border-bottom: 6px solid #fc9807;
  margin-bottom: 30%;
  padding: 13px 0;
}

.textbox {
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  padding: 8px 0;
  margin: 8px 0;
  border-bottom: 1px solid #fc9807;
}

.textbox i {
  width: 30px;
  float: left;
  text-align: center;
  color: #fc9807;
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
  color: #fc9807;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  margin: 30px 0;

  outline: none;
  border: #eee;
  box-shadow: 0 4px #fc9807;
}

.btn:hover {
  background-color: #fc9807;
  color: #eeeeee;
}

.btn:active {
  background-color: #fc9807;
  box-shadow: 0 5px #bfbfbf;
  transform: translateY(4px);
  color: #eeeeee;
}
</style>
