import Login from "@/router/views/Login"
import Home from "@/components/Home";
import Post from "@/components/Post";
import RentoList from "@/components/RentoList";
import RentoDetail from "@/components/RentoDetail";


export default [
    {
        path: "/login",
        name: "login",
        alias: "/",
        component: Login
    },
    {
        path: '/home',
        name: "Home",
        alias: "/",
        component: Home
    },
    {
        path: '/post',
        name: "Post",
        alias: "/",
        component: Post
    },
    {
        path: '/rentoList',
        name: "RentoList",
        alias: "/",
        component: RentoList
    },
    {
        path: '/rentoDetail',
        name: "RentoDetail",
        alias: "/",
        component: RentoDetail
    },
]