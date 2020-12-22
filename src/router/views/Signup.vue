<template>
  <div>
    <div id="background" class="d-flex justify-content-center">
      <b-card tag="article" class="mb-2 col-4">
        <b-card-body>
          <div class="login-box">
            <h2>Create Account</h2>
            <div class="textbox">
              <font-awesome-icon :icon="['fas', 'user-secret']" />
              <ValidationObserver>
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <input
                    v-model="username"
                    placeholder="Username*"
                    name="fieldName"
                  />
                  <br />
                  <span style="color: red; font-size:14px">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </ValidationObserver>
            </div>
            <div class="textbox">
              <ValidationObserver>
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <input
                    v-model="password"
                    placeholder="Password*"
                    name=""
                    :type="passwordType"
                    ref="password"
                  />
                  <br />
                  <span style="color: red; font-size:14px">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </ValidationObserver>
            </div>

            <div class="textbox">
              <font-awesome-icon :icon="['fas', 'user-secret']" />
              <ValidationObserver>
                <ValidationProvider rules="email" v-slot="{ errors }">
                  <input
                    v-model="email"
                    placeholder="Email*"
                    name="fieldName"
                  />
                  <br />
                  <span style="color: red; font-size:14px">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </ValidationObserver>
            </div>
            <div class="textbox">
              <font-awesome-icon :icon="['fas', 'user-secret']" />
              <ValidationObserver>
                <ValidationProvider rules="numeric" v-slot="{ errors }">
                  <input
                    v-model="phoneNumber"
                    placeholder="Phone Number*"
                    name="fieldName"
                  />
                  <br />
                  <span style="color: red; font-size:14px">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </ValidationObserver>
            </div>

            <input type="checkbox" @click="Show()" />
            <input
              class="btn"
              type="button"
              name=""
              value="Sign up"
              @click="signup"
            />
          </div>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { extend } from "vee-validate";
import { required, email, numeric } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "*This field cannot be empty",
});
extend("email", {
  ...email,
  message: "*The email invalid",
});
extend("numeric", {
  ...numeric,
  message: "*The field invalid",
});
export default {
  name: "Signup",
  data() {
    return {
      username: "",
      password: "",
      passwordType: "password",
      email: "",
      phoneNumber: "",
      role: "Renter",
    };
  },
  methods: {
    signup() {
      axios
        .post(
          "https://localhost:44334/Users/signup",
          {
            username: this.username,
            password: this.password,
            role: this.role,
            email: this.email,
            phoneNumber: this.phoneNumber,
          },
          { headers: { "Content-type": "application/json" } }
        )
        .then(() => {
          if (this.role === "Renter"){
            this.$router.push("/Home")
          }
          else this.$router.push("/WaitingApprove")
        }
        );
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
  margin-top: 10px;
  margin-right: 30px;
  margin-left: 30px;
}

.login-box h2 {
  float: left;
  font-size: 47px;
  color: #fc9807;
  border-bottom: 6px solid #fc9807;
  margin-bottom: 10%;
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
  width: 60px;
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
