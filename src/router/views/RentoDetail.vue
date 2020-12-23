<template>
  <div>
    <navbar />
    <div class="main-content">
      <div class="container">
        <div class="information bg-white box-shadow">
          <b-carousel
            id="carousel-1"
            :interval="3000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
              v-for="item in photos"
              :key="item"
              :img-src="getPhoto(item)"
            ></b-carousel-slide>
          </b-carousel>
          <div class="detail-infor">
            <h3 class="text-main-orange text-center p-3">{{ caption }}</h3>
            <div class="row mt-3">
              <div class="col-6">
                <div class="p-3">
                  <table class="table table-striped p-3">
                    <tr>
                      <th>Tên chủ nhà</th>
                      <td>{{ hostName }}</td>
                    </tr>
                    <tr>
                      <th>SĐT</th>
                      <td>{{ hostNumber }}</td>
                    </tr>
                    <tr>
                      <th>Khu vực</th>
                      <td>{{ province }}</td>
                    </tr>
                    <tr>
                      <th>Địa chỉ</th>
                      <td>{{ address }}</td>
                    </tr>
                    <tr>
                      <th>Diện tích</th>
                      <td>{{ area }} m2</td>
                    </tr>
                    <tr>
                      <th>Giá thuê phòng/tháng</th>
                      <td>{{ rent }} VNĐ</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="col-6">
                <div class="p-3">
                  <h5 class="text-center">Mô tả</h5>
                  <span v-if="description != null">{{ description }} </span>
                  <span v-else
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec nec pharetra lorem. Pellentesque id est sem. Aenean at
                    augue eu tortor convallis interdum. Phasellus id vulputate
                    mi, id pellentesque sapien. Praesent vel eleifend est, vitae
                    cursus urna. Maecenas maximus dui non ex hendrerit, ut
                    mollis ipsum rhoncus. Maecenas augue tellus, dapibus vel
                    quam nec, commodo egestas nisl. Sed rutrum urna tortor, a
                    mollis dui imperdiet quis. Aliquam finibus est augue, ut
                    convallis sapien facilisis at. Quisque ullamcorper tempus
                    sollicitudin. Duis id neque dapibus nisl vehicula
                    scelerisque. Nam sodales ac diam vel dictum. Vestibulum
                    consequat tincidunt dignissim. Vestibulum vehicula turpis
                    id.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="comments-outside">
      <hr class="my-4" />
      <div class="comments-header">
        <div class="comments-stats">
          <span><font-awesome-icon :icon="['fas', 'eye']" /> {{ view }} </span>
          <span
            ><font-awesome-icon :icon="['fas', 'thumbs-up']" /> {{ rating }} / 5
          </span>
        </div>
      </div>
      <comments
        :comments_wrapper_classes="['custom-scrollbar', 'comments-wrapper']"
        :comments="comments.slice().reverse()"
        :current_user="current_user"
        @submit-comment="submitComment"
      ></comments>
    </div>
  </div>
</template>

<script>
import navbar from "../../components/navbar.vue";
import axios from "../../utils/axios";
import comments from "../../components/comments.vue";

export default {
  components: { navbar, comments },
  name: "RentoList",
  created() {
    this.getComment();
    this.getRoomData();
  },
  data() {
    return {
      roomId: this.$route.params.id,
      hostName: "",
      hostNumber: "",
      description: "",
      caption: "",
      area: "",
      province: "",
      address: "",
      rent: 0,
      view: 20,
      rating: 5.0,
      photos: [],
      token: localStorage.getItem('token'),
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTFkOGJhNDI2YWExMzVkM2MyMWY4MyIsInJvbGUiOiJIb3N0IiwibmJmIjoxNjA4NjM2NjAyLCJleHAiOjE2MDkyNDE0MDIsImlhdCI6MTYwODYzNjYwMn0.OPH5pJquyGripFVwUXwdujJswnq9J1AW5ZchIn7woJo",
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTFjNjJmMzY0M2ZhZTRhOTU3MGI3YyIsInJvbGUiOiJSZW50ZXIiLCJuYmYiOjE2MDg3MzE2MDUsImV4cCI6MTYwOTMzNjQwNSwiaWF0IjoxNjA4NzMxNjA1fQ.guphM1n273DlIFsAwbXRE8UdVZz1kR9R9EGz-C9wWLo",
      likes: 15,

      current_user: {
        avatar:
          "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png",
        user: "Me",
      },
      comments: [],
    };
  },
  methods: {
    // getView() {
    //   axios
    //     .get(`/Posts/${this.roomId}/view`, {
    //       headers: {
    //         Authorization: `Bearer ${this.token}`,
    //       },
    //     })
    //     .then((res) => {
    //       console.log(res);
    //       this.view = res.data;
    //     });
    // },
    // postView() {
    //   axios
    //     .post(`/Posts/${this.roomId}/view`, {
    //       headers: {
    //         Authorization: `Bearer ${this.token}`,
    //       },
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     });
    // },
    getComment: function () {
      this.comments = [];
      axios
        .get(`/Posts/${this.roomId}/comment`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => {
          console.log(res);
          res.data.forEach((element, index) => {
            this.comments.push({
              id: index,
              text: element.content,
              user: "Unknown",
              avatar:
                "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png",
            });
          });
        });
    },
    submitComment: function (reply) {
      axios
        .post(
          `/Posts/${this.roomId}/comment`,
          { content: reply },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.getComment();
        });
    },
    getRoomData() {
      return axios
        .get(`/Posts/${this.roomId}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            var data = res.data;
            this.hostName = data.host.username;
            this.hostNumber = data.host.phoneNumber;
            this.description = data.description;
            this.province = data.ward.district.province.province;
            this.address = `${data.address}, ${data.ward.ward}, ${data.ward.district.district}, ${data.ward.district.province.province}`;
            this.photos = data.photos;
            this.rating = data.rating;
            this.view = data.views;
            this.caption = data.caption;
            this.area = data.area;
            this.rent = data.rent;
          }
        });
    },
    getPhoto(string) {
      // return `https://picsum.photos/1024/480/?image=${string}`;
      return `https://localhost:44334/Posts/${this.roomId}/images?file=${string}`
    },
  },
};
</script>


<style scoped>
a {
  text-decoration: none;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ececec;
  margin: 1em 0;
  padding: 0;
}
.comments-outside {
  margin: 0 auto;
  max-width: 80%;
}
.comments-header {
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 80px;
  font-size: 20px;
}
.comments-header .comments-stats span {
  margin-left: 10px;
}
.post-owner {
  display: flex;
  align-items: center;
}
.post-owner .avatar > img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
}
.post-owner .username {
  margin-left: 5px;
}
.post-owner .username > a {
  color: #333;
}
</style>