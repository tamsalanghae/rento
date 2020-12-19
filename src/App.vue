<template>
  <div id="app">
    <router-view>
    <Login/>
    <Home />
    <Post />
    <RentoList />
    <RentoDetail />
    </router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Login from "@/router/views/Login"
import Post from './components/Post.vue'
import RentoList from './components/RentoList.vue'
import RentoDetail from './components/RentoDetail.vue';

export default {
  name: 'App',
  components: {
    Login,
    Post,
    RentoList,
    RentoDetail,
    // eslint-disable-next-line vue/no-unused-components
    Home,
    
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
