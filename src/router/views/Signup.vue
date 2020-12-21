<template>
  <div>
    <div id="background" class="d-flex justify-content-center">
      <b-card tag="article" class="mb-2 col-4">
        <b-card-body>
          <div class="login-box">
            <h1>Sign up</h1>
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
              placeholder="Password"
              name=""
              :type="passwordType"
            />
             <br>
                <span style="color: red; font-size:14px">{{ errors[0] }}</span>
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
             <br>
                <span style="color: red; font-size:14px">{{ errors[0] }}</span>
              </ValidationProvider>
            </ValidationObserver>
          </div>
            <div class="textbox">
              <font-awesome-icon :icon="['fas', 'user-secret']" />
              <ValidationObserver>
                <ValidationProvider rules="required" v-slot="{ errors }">
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
              <ValidationObserver>
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <input
                    v-model="phonenumber"
                    placeholder="Phone Number*"
                    name=""
                    :type="passwordType"
                  />
                  <br />
                  <span style="color: red; font-size:14px">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </ValidationObserver>
            </div>
            <input type="checkbox" @click="Show()" />
            <a href="Home"><input
              class="btn"
              type="button"
              name=""
              value="Sign up"
              @click="Signup"
            /></a>
            
          </div>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
extend('required', {
    ...required,
    message: "* This field cannot be empty",
});
export default {
  name: "Signup",
  data() {
    return {
      username: "",
      password: "",
      passwordType: "password",
    };
  },
  methods: {
    signin() {
      axios
        .post("https://localhost:44334/Users/authenticate", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          if (res.status == 200) {
            console.log(res.status == 200);
          }
          this.$router.push("/Home");
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
    margin-top: 10px;
    margin-right: 30px;
    margin-left: 30px;
}

.login-box h1 {
  float: left;
  font-size: 50px;
  color: #fc9807;
  border-bottom: 6px solid #fc9807;
  margin-bottom: 20%;
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
