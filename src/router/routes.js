import Login from "@/router/views/Login";
import Home from "@/router/views/Home";
import Post from "@/router/views/Post";
import RentoList from "@/router/views/RentoList";
import RentoDetail from "@/router/views/RentoDetail";
import Signup from "@/router/views/Signup";
import ChooseRole from "@/router/views/ChooseRole";
import WaitingApprove from "@/router/views/WaitingApprove";
import RentoFavorite from "@/router/views/RentoFavorite";
import AdminPostIndex from '@/router/views/admin/Index';
import HostPostIndex from '@/router/views/host/Index';
import AdminUserIndex from '@/router/views/admin/Users';
import Profile from "@/router/views/Profile";


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
        component: Home
    },
    {
        path: '/post/:id?',
        name: "Post",
        component: Post
    },
    {
        path: '/rentoList',
        name: "RentoList",
        component: RentoList
    },
    {
        path: '/rentoDetail/:id',
        name: "RentoDetail",
        component: RentoDetail
    },
    {
        path: "/signup",
        name: "signup",
        component: Signup
    },
    {
        path: "/chooserole",
        name: "chooserole",
        component: ChooseRole
    },
    {
        path: "/waitingApprove",
        name: "WaitingApprove",
        component: WaitingApprove
    },
    {
        path: "/rentoFavorite",
        name: "RentoFavorite",
        alias: "/",
        component: RentoFavorite
    },
    
    {
        path: "/admin/postIndex",
        name: "AdminPostIndex",    
        component: AdminPostIndex
    },
    {
        path: "/host/postIndex",
        name: "HostPostIndex",    
        component: HostPostIndex
    },
    {
        path: "/admin/userIndex",
        name: "AdminUserIndex",    
        component: AdminUserIndex
    },
    {
        path: "/Profile",
        name: "Profile",
        alias: "/",
        component: Profile
    },
]