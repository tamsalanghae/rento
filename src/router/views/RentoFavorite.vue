<template>
  <div>
      <navbar />
    <div class="container-fluid">
      <div class="row">
        <div style="width:100%;">
          <div id="background" class="d-flex justify-content-center">
            <div class="card">
              <div class="none" style="height:50px"><h4>Tất cả</h4></div>
              <div class="card-horizontal">
                <div class="img-square-wrapper">
                  <img
                    class="img"
                    src="@/assets/img/banner-main.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    Content content content content content content content
                  </h5>
                  <p class="card-text">Mã phường 123456</p>
                  <p class="card-text">Địa chỉ abcd1234</p>
                  <p class="card-text" style="font-size:20px">
                    Giá tiền: 5.000.000đ/tháng
                  </p>
                </div>
                <div class="icon">
                    <b-button variant="danger" @click="deletePost"><font-awesome-icon style="font-size: 20px;" :icon="['far', 'trash-alt']"></font-awesome-icon></b-button>
                </div>
              </div>
              
              
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
  name: "RentoFavorite",
  components: {
    
    Navbar,
  },
  data() {
    return {};
  },
  methods: {
      deletePost() {}
  }
};
</script>
<style scoped>
#background {
  background-size: cover;
  height: 100vh;
  background-image: url(~@/assets/img/back-gr10.jpg);
}
.card {
  width: 70%;
}
.card .none h4 {
  color: #a84c00;
  margin: 10px 10px 0px 10px;
  font-weight: 600;
  font-size: 23px;
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
  max-width: 260px;
  height: 180px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}


</style>
