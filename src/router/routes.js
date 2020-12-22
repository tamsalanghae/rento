import Login from "@/router/views/Login";
import Home from "@/router/views/Home";
import Post from "@/router/views/Post";
import RentoList from "@/router/views/RentoList";
import RentoDetail from "@/router/views/RentoDetail";
import Signup from "@/router/views/Signup";
import ChooseRole from "@/router/views/ChooseRole";

import PostIndex from '@/router/views/admin/Index';

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
    {
        path: "/signup",
        name: "signup",
        alias: "/",
        component: Signup
    },
    {
        path: "/chooserole",
        name: "chooserole",
        alias: "/",
        component: ChooseRole
    },
    {
        path: "/admin/postIndex",
        name: "AdminPostIndex",    
        component: PostIndex
    }
]