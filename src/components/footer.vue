<template>
  <div id="container">
    <div id="contacts">
      <div id="contacts--contact">
        <p>Facebook: {{ facebook }}</p>
        <p>Tel: {{ phone }}</p>
      </div>
      <div id="contacts--social">
        <a
          ><font-awesome-icon
            class="fa-lg white-text mr-md-5 mr-3 fa-2x"
            :icon="['fab', 'facebook']"
        /></a>
        <a
          ><font-awesome-icon
            class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"
            :icon="['fab', 'twitter']"
        /></a>
        <a
          ><font-awesome-icon
            class="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"
            :icon="['fab', 'google']"
        /></a>
        <a
          ><font-awesome-icon
            class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"
            :icon="['fab', 'linkedin']"
        /></a>
        <a
          ><font-awesome-icon
            class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"
            :icon="['fab', 'instagram']"
        /></a>
        <a
          ><font-awesome-icon
            class="fab fa-pinterest fa-lg white-text fa-2x"
            :icon="['fab', 'pinterest']"
        /></a>
      </div>
    </div>
    <div id="mentions">
      <p>{{ mention }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerPage",
  data() {
    return {
      facebook: "https://www.facebook.com/dudidauthatngau",
      phone: "0123456789",
      mention: "2020 | Rento",
    };
  },
};
</script>

<style scoped>
body {
  display: flex;
  background-color: #f0f8ff;
  height: 95vh;
  justify-content: center;
  align-items: flex-end;
  font-family: Open Sans;
}

#container {
  padding-top: 20px;
  margin-top: 20px;
  width: 100vw;
  color: white;
  background-color: #ffba00;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#contacts {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
#contacts--contact {
  text-align: right;
}
#contacts--social {
  width: 20%;
  display: flex;
  justify-content: space-between;
}
#contacts--social div {
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 50%;
}
#mentions p {
  font-size: 1em;
}
</style>