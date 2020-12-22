<template>
  <div>
    <navbar/>
    <div class="banner-wrapper">
      <div class="bx-wrapper">
        <img class="banner" src="@/assets/img/banner.jpg">
      </div>
      <div class="container position-relative">
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <div class="search-box">
              <div class="search-box">
                <input
                  type="text"
                  class="search-bar"
                  placeholder="Search..."
                  v-model="query"
                  @keypress="search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="container bg-white">
        <div class="information mt-3">
          <div class="row">
            <div class="col">
              <div class="p-4">
                <div class="row d-table">
                  <div class="col-md-5 d-table-cell align-middle">
                    <img class="w-100" src="@/assets/img/cat-1.svg">
                    </div>
                  <div class="col-md-7 d-table-cell align-middle">
                    <h4>Nguyên căn</h4>
                    <p>4,000 tin mua bán</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="p-4">
                <div class="row d-table">
                  <div class="col-md-5 d-table-cell align-middle">
                    <img class="w-100" src="@/assets/img/cat-2.svg">
                    </div>
                  <div class="col-md-7 d-table-cell align-middle">
                    <h4>Ở ghép</h4>
                    <p>4,000 tin mua bán</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="p-4">
                <div class="row d-table">
                  <div class="col-md-5 d-table-cell align-middle">
                    <img class="w-100" src="@/assets/img/cat-3.svg">
                  </div>
                  <div class="col-md-7 d-table-cell align-middle">
                    <h4>Phòng trọ</h4>
                    <p>4,000 tin mua bán</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="zone-1 mt-3">
          <div class="container my-4">
            <hr class="my-4" />
            <a href="#"><h4 class="mb-3 text-main-orange">Nguyên căn</h4></a>
            <!--First slide-->
            <carousel :items="items" />
            <!--/.First slide-->
          </div>
          <div class="container my-4 mt-3">
            <hr class="my-4" />
            <a href="#"><h4 class="mb-3 text-main-orange">Ở ghép</h4></a>
            <!--Second slide-->
            <carousel :items="items" />
            <!--/.Second slide-->
          </div>
          <div class="container my-4 mt-3">
            <hr class="my-4" />
            <a href="#"><h4 class="mb-3 text-main-orange">Phòng trọ</h4></a>
            <!--Third slide-->
            <carousel :items="items" />
            <!--/.Third slide-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../../components/carousel.vue";
import Navbar from '../../components/navbar.vue';

export default {
  name: "Home",
  components: {
    Carousel,
    Navbar,
  },
  data() {
    return {
      items: [
        {
          title: "Sed non ante non cras amet",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.",
          image: "https://picsum.photos/id/1015/600/600",
        },
        {
          title: "Curabitur sit amet nunc",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.",
          image: "https://picsum.photos/id/1019/600/600",
        },
        {
          title: "Proin pharetra, ante metus",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.",
          image: "https://picsum.photos/id/1039/600/600",
        },
        {
          title: "Cras pharetra non enim a",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada varius nibh, a malesuada nisi feugiat eget. Aenean convallis semper.",
          image: "https://picsum.photos/id/1042/600/600",
        },
        {
          title: "Proin vulputate, augue eu accumsan",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla tempor libero sit amet mollis. Praesent quis leo erat. Integer.",
          image: "https://picsum.photos/id/1044/600/600",
        },
        {
          title: "Maecenas feugiat magna sapien in",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet fringilla ante. Quisque at ipsum non lacus consequat dictum.",
          image: "https://picsum.photos/id/1057/600/600",
        },
        {
          title: "Donec commodo sed enim at",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu condimentum risus. Praesent dignissim, neque nec pharetra vestibulum, libero odio.",
          image: "https://picsum.photos/id/1063/600/600",
        },
        {
          title: "In bibendum urna et turpis",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante volutpat leo vulputate volutpat et sed ex. Vivamus eu.",
          image: "https://picsum.photos/id/1076/600/600",
        },
        {
          title: "Phasellus iaculis dignissim erat at",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque, eleifend purus gravida, scelerisque orci. Ut et turpis.",
          image: "https://picsum.photos/id/1083/600/600",
        },
      ],
    
      url_base: "https://api...",
      query: "",
    };
  },
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.items)
    // fetch(`${this.url_base}search?q=${this.query}`)
    //       .then((res) => {
    //         return res.json();
    //       })
    //       .then(this.setResults);
  },
  methods: {
    search(e) {
      if (e.key == "Enter") {
        console.log(this.query);
        fetch(`${this.url_base}search?q=${this.query}`)
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
    },
  },
};
</script>

<style scoped>
.bg-main {
  background-color: #ffba00;
}
.bg-grey {
  background-color: rgb(244, 244, 244);
}
.w-40 {
  width: 40%;
}

.fs-20 {
  font-size: 1.25rem;
}

.banner {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

.search-box {
  margin-top: -15%;
  z-index: 999;
  position: relative;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 0%;

  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px 0px 16px 0px;
}

.text-light {
  color: white;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {

  color: #495057 !important;
}
.banner-wrapper::after {
  content: "";
  position: absolute;
  top: 80px;
  left: 0;
  height: 300px;
  width: 100%;
  background-color: #000;
  opacity: 0.5;
}
.btn-post {
  background-color: #fc9807;
  border-color: #fc9807;
}
.text-main-orange {
  color: #fc9807;
}
a.text-main-orange:hover {
  color: #fc9807;
}
.left-chevron-control {
  font-size: 50px;
  z-index: 100;
  top: 185px;
  left: -25px;
}
.right-chevron-control {
  font-size: 50px;
  z-index: 100;
  top: 185px;
  right: -25px;
}
.single-item {
  border-radius: 25px;
}
.card-img-top {
  border-top-left-radius: 25px !important;
  border-top-right-radius: 25px !important;
}

.min-max-slider {
  position: relative;
  width: 200px;
  text-align: center;
  margin-bottom: 20px;
}
.min-max-slider > label {
  display: none;
}
span.value {
  height: 1.7em;
  font-weight: bold;
  display: inline-block;
}
span.value.lower::before {
  content: "€";
  display: inline-block;
}
span.value.upper::before {
  content: "- €";
  display: inline-block;
  margin-left: 0.4em;
}
.min-max-slider > .legend {
  display: flex;
  justify-content: space-between;
}
.min-max-slider > .legend > * {
  font-size: small;
  opacity: 0.25;
}
.min-max-slider > input {
  cursor: pointer;
  position: absolute;
}

/* webkit specific styling */
.min-max-slider > input {
  -webkit-appearance: none;
  outline: none !important;
  background: transparent;
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 30%,
    silver 30%,
    silver 60%,
    transparent 60%,
    transparent 100%
  );
}
.min-max-slider > input::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 14px; /* Set a specific slider handle width */
  height: 14px; /* Slider handle height */
  background: #eee; /* Green background */
  cursor: pointer; /* Cursor on hover */
  border: 1px solid gray;
  border-radius: 100%;
}

.min-max-slider > input::-webkit-slider-runnable-track {
  cursor: pointer;
}


.box-shadow {
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.1);
}
fieldset.scheduler-border {
  border: 1px groove #ddd !important;
  padding: 0 1.4em 1.4em 1.4em !important;
  margin: 0 0 1.5em 0 !important;
  -webkit-box-shadow: 0px 0px 0px 0px #000;
  box-shadow: 0px 0px 0px 0px #000;
}

/*legend.scheduler-border {*/
/*    font-size: 1.2em !important;*/
/*    font-weight: bold !important;*/
/*    text-align: left !important;*/
/*}*/
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