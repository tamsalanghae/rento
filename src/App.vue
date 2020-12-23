<template>
  <div id="app">
    <router-view>
    <Login/>
    <Home />
    <Post />
    <RentoList />
    <RentoDetail />
    <Signup />
    <ChooseRole />
    <WaitingApprove />
    <RentoFavorite />

    </router-view>
  </div>
</template>

<script>
import Login from './router/views/Login.vue'
import Home from './router/views/Home.vue'
import Post from './router/views/Post.vue'
import RentoList from './router/views/RentoList.vue'
import RentoDetail from './router/views/RentoDetail.vue'
import Signup from './router/views/Signup.vue'
import ChooseRole from './router/views/ChooseRole.vue'
import WaitingApprove from './router/views/WaitingApprove.vue'
import RentoFavorite from './router/views/RentoFavorite.vue'
export default {
  name: 'App',
  components: {
    Login,
    Post,
    RentoList,
    RentoDetail,
    // eslint-disable-next-line vue/no-unused-components
    Home,
    Signup,
    ChooseRole,
    WaitingApprove,
    RentoFavorite,
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
