<template>
  <div id="app">
    <router-view>
    <Login/>
    <Home />
    </router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Login from "@/router/views/Login";

export default {
  name: 'App',
  components: {
    Login,
    // eslint-disable-next-line vue/no-unused-components
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
