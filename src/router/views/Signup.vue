<template>
  <div>
    <div id="background" class="d-flex justify-content-center">
      <div class="card">
        <div class="row">
          <div class="col-12">
            <div class="p-3" style="width:70%; margin-left:15%; margin-top:10%">
              <fieldset class="scheduler-border">
                <legend class="scheduler-border" style="font-size:30px">
                  Đăng ký tài khoản
                </legend>
                <div class="form-group" style="margin-top:30px">
                  <label>Tên đăng nhập*</label>
                  <ValidationObserver>
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Vui lòng điền tên đăng nhập!"
                        v-model="username"
                        name="fieldName"
                        autocomplete="off"
                      />

                      <span style="color: red; font-size:14px">{{
                        errors[0]
                      }}</span>
                    </ValidationProvider>
                  </ValidationObserver>
                </div>

                <div class="form-group">
                  <label>Mật khẩu*</label>
                  <ValidationObserver>
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <div class="row">
                        <div class="col-10">
                          <input
                            class="form-control"
                            placeholder="Vui lòng điền mật khẩu!"
                            v-model="password"
                            name=""
                            :type="passwordType"
                            ref="password"
                            autocomplete="off"
                          />
                        </div>
                        <div class="col-2">
                          <font-awesome-icon
                            :icon="[
                              'fas',
                              passwordType === 'password' ? 'eye' : 'eye-slash',
                            ]"
                            class="text-dark"
                            style="cursor:pointer"
                            @click="Show"
                            title="Toggle Show Password"
                          />
                        </div>
                      </div>

                      <span style="color: red; font-size:14px">{{
                        errors[0]
                      }}</span>
                    </ValidationProvider>
                  </ValidationObserver>
                </div>
               
                <div class="form-group">
                  <label>Địa chỉ email*</label>
                  <ValidationObserver>
                    <ValidationProvider rules="email" v-slot="{ errors }">
                      <input
                        class="form-control"
                        placeholder="Vui lòng điền email!"
                        v-model="email"
                        name="fieldName"
                      />

                      <span style="color: red; font-size:14px">{{
                        errors[0]
                      }}</span>
                    </ValidationProvider>
                  </ValidationObserver>
                </div>

                <div class="form-group">
                  <label>Số điện thoại*</label>
                  <ValidationObserver>
                    <ValidationProvider rules="numeric" v-slot="{ errors }">
                      <input
                        class="form-control"
                        placeholder="Vui lòng điền số điện thoại!"
                        v-model="phoneNumber"
                        name="fieldName"
                      />

                      <span style="color: red; font-size:14px">{{
                        errors[0]
                      }}</span>
                    </ValidationProvider>
                  </ValidationObserver>
                </div>
              </fieldset>

              <div class="col-12 text-center">
                <button
                  type="button"
                  class="btn btn-success"
                  name=""
                  value="Sign up"
                  @click="signup"
                >
                  Đăng ký 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../utils/axios";
import { extend } from "vee-validate";
import { required, email, numeric } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "*Trường này không được để trống",
});
extend("email", {
  ...email,
  message: "*Email không hợp lệ",
});
extend("numeric", {
  ...numeric,
  message: "*Số điện thoại không hợp lệ",
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
      role: localStorage.getItem("role"),
    };
  },
  methods: {
    signup() {
      axios
        .post(
          "/Users/signup",
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
          if (this.role === "Renter") {
            this.$router.push("/Home");
          } else if (this.role === "Host") this.$router.push("/WaitingApprove");
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
.form-group {
  width: 100%;
  overflow: hidden;
  font-size: 20px;
}
.card {
  height: 100%;
  width: 50%;
}

fieldset.scheduler-border {
  border: 1px groove #ddd !important;
  padding: 0 1.4em 1.4em 1.4em !important;
  margin: 0 0 1.5em 0 !important;
  -webkit-box-shadow: 0px 0px 0px 0px #000;
  box-shadow: 0px 0px 0px 0px #000;
}

legend.scheduler-border {
  width: inherit; /* Or auto */
  padding: 0 10px; /* To give a bit of padding on the left and right */
  border-bottom: none;
}
[data-toggle="collapse"] .fa:before {
  content: "\f139";
}

[data-toggle="collapse"].collapsed .fa:before {
  content: "\f13a";
}
</style>
