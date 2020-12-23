<template>
  <div>
    <navbar />
    <div id="background" class="d-flex justify-content-center">
      <div class="card">
        <div
          class="row-6"
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);   text-align: center;"
        >
          <img src="@/assets/img/av.jpg" alt="Avatar" class="avatar" /><br />
          <h2>Tâm Tâm</h2>
          <p style="font-size:18px">
            Chỉnh sửa hồ sơ cá nhân
            <font-awesome-icon @click="hihi"
              style="font-size: 21px; margin-left:10px; color: blue "
              :icon="['far', 'edit']"
            ></font-awesome-icon>
          </p>
        </div>
        <div>
          <div
            class="none"
            style="height:50px; margin-left:20px; margin-top:20px"
          >
            <h4>Bài đăng gần đây</h4>
          </div>
          <div class="card-horizontal">
            <div class="img-square-wrapper">
              <img
                class="img"
                src="@/assets/img/img6.jpg"
                alt="Card image cap"
              />
            </div>
            <div class="card-body">
              <p class="card-text">
                Mình cần tìm phòng, chuyển đến đầu - giữa tháng
                1</p>
                <p>Yêu cầu: Phòng khép kín, thích hợp ở 2-3ng
                Có thang máy, điều hoà, nóng lạnh, chỗ để xe free
              </p>
              <p class="card-text" style="font-size:17px">
                Khoảng tiền: 3.000.000đ/tháng
              </p>
            </div>
            <div class="icon">
              <b-button variant="danger" @click="deletePost"
                ><font-awesome-icon
                  style="font-size: 20px;"
                  :icon="['far', 'trash-alt']"
                ></font-awesome-icon
              ></b-button>
            </div>
          </div>
          <div class="card-horizontal">
            <div class="img-square-wrapper">
              <img
                class="img"
                src="@/assets/img/img19.jpg"
                alt="Card image cap"
              />
            </div>
            <div class="card-body">
              <p class="card-text">
                Mình cần tìm phòng, chuyển đến đầu - giữa tháng
                1</p>
                <p>Yêu cầu: Phòng khép kín, thích hợp ở 2-3ng
                Có thang máy, điều hoà, nóng lạnh, chỗ để xe free
              </p>
              <p class="card-text" style="font-size:17px">
                Khoảng tiền: 3.000.000đ/tháng
              </p>
            </div>
            <div class="icon">
              <b-button variant="danger" @click="deletePost"
                ><font-awesome-icon
                  style="font-size: 20px;"
                  :icon="['far', 'trash-alt']"
                ></font-awesome-icon
              ></b-button>
            </div>
          </div>
          <div class="card-horizontal">
            <div class="img-square-wrapper">
              <img
                class="img"
                src="@/assets/img/img17.jpg"
                alt="Card image cap"
              />
            </div>
            <div class="card-body">
              <p class="card-text">
                Mình cần tìm phòng, chuyển đến đầu - giữa tháng
                1</p>
                <p>Yêu cầu: Phòng khép kín, thích hợp ở 2-3ng
                Có thang máy, điều hoà, nóng lạnh, chỗ để xe free
              </p>
              <p class="card-text" style="font-size:17px">
                Khoảng tiền: 3.000.000đ/tháng
              </p>
            </div>
            <div class="icon">
              <b-button variant="danger" @click="deletePost"
                ><font-awesome-icon
                  style="font-size: 20px;"
                  :icon="['far', 'trash-alt']"
                ></font-awesome-icon
              ></b-button>
            </div>
          </div>
          <div class="card-horizontal">
            <div class="img-square-wrapper">
              <img
                class="img"
                src="@/assets/img/img16.jpg"
                alt="Card image cap"
              />
            </div>
            <div class="card-body">
              <p class="card-text">
                Mình cần tìm phòng, chuyển đến đầu - giữa tháng
                1</p>
                <p>Yêu cầu: Phòng khép kín, thích hợp ở 2-3ng
                Có thang máy, điều hoà, nóng lạnh, chỗ để xe free
              </p>
              <p class="card-text" style="font-size:17px">
                Khoảng tiền: 3.000.000đ/tháng
              </p>
            </div>
            <div class="icon">
              <b-button variant="danger" @click="deletePost"
                ><font-awesome-icon
                  style="font-size: 20px;"
                  :icon="['far', 'trash-alt']"
                ></font-awesome-icon
              ></b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/navbar.vue";
export default {
  name: "Profile",
  components: { Navbar },
  data() {
    return {};
  },
};
</script>
<style scoped>
#background {
  background-size: cover;

  
  background-color: #fc9807;
}
.card {
  height: 100%;
  width: 50%;
}

.avatar {
  object-fit: cover;
  vertical-align: middle;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-top: 3%;
  margin-bottom: 2%;
}
.card-horizontal {
  display: flex;
  margin-bottom: 1%;
  margin-left: 1%;
  margin-right: 1%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.card-horizontal .icon {
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
}
.card-horizontal img {
  object-fit: cover;
  border-radius: 20px;
  width: 170px;
  height: 130px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
