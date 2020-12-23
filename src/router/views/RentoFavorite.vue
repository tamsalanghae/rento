<template>
  <div>
    <navbar />
    <div class="container-fluid">
      <div class="row">
        <div style="width: 100%">
          <div id="background" class="d-flex justify-content-center">
            <div class="card">
              <div class="none" style="height: 50px">
                <h4>Danh sách yêu thích</h4>
              </div>
              <div class="card-horizontal" v-for="item in items" :key="item">
                <div class="img-square-wrapper">
                  <img
                    class="img"
                    v-if="item.photos.length != 0"
                    :src="`https://localhost:44334/Posts/${item.id}/images?file=${item.photos[0]}`"
                    alt="Card image cap"
                  />
                  <img
                    class="img"
                    v-else
                    src="https://solidstarts.com/wp-content/uploads/when-can-babies-eat-watermelon.jpg"
                    alt="Card image cap"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">item.content</h5>
                  <p class="card-text">Địa chỉ {{ item.address }}</p>
                  <p class="card-text" style="font-size: 20px">
                    Giá tiền: {{ item.rent }} VNĐ/tháng
                  </p>
                </div>
                <div class="icon">
                  <b-button variant="danger" @click="deleteFavourite(item.id)"
                    ><font-awesome-icon
                      style="font-size: 20px"
                      :icon="['far', 'trash-alt']"
                    ></font-awesome-icon
                  ></b-button>
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
import axios from "../../utils/axios";

export default {
  name: "RentoFavorite",
  components: {
    Navbar,
  },
  data() {
    return {
      items: [],
      token: localStorage.getItem("token"),
    };
  },
  created() {
    this.getFavourite();
  },
  methods: {
    getFavourite() {
      axios
        .get(`/Posts/favorite`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => {
          this.items = [];
          console.log(res);
          res.data.forEach((element) => {
            this.items.push({
              id: element.id,
              address: `${element.address}, ${element.ward.ward}, ${element.ward.district.district}, ${element.ward.district.province.province}`,
              rent: element.rent,
              photos: element.photos,
              caption: element.caption,
              content: element.description,
            });
          });
        });
    },
    deleteFavourite(index) {
      axios
        .delete(`/Posts/${index}/favorite`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => {
          console.log(res);
          this.getFavourite();
        });
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
.card {
  width: 70%;
}

.card .none h4 {
  color: #fc9807;
  margin: 20px 30px 0px 10px;
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
