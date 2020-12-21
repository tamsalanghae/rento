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
import Login from './router/views/Login.vue'
import Home from './router/views/Home.vue'
import Post from './router/views/Post.vue'
import RentoList from './router/views/RentoList.vue'
import RentoDetail from './router/views/RentoDetail.vue'

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
