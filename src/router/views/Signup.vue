<template>
  <div>
    <div id="background" class="d-flex justify-content-center">
      <b-card tag="article" class="mb-2 col-4">
        <b-card-body>
          <div class="login-box">
            <h1>Sign up</h1>
            <br />
            <div>
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>
            </div>
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
              <font-awesome-icon :icon="['fas', 'user-secret']" />
              <ValidationObserver>
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <input
                    v-model="password"
                    placeholder="Password*"
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
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <input
                    v-model="comfirmpassword"
                    placeholder="Comfirm Password*"
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

            <input
              class="btn"
              type="button"
              name=""
              value="Sign up"
              @click="Signup"
            />
          </div>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
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
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}



.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}



input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
