import Login from "@/router/views/Login"
import Home from "@/components/Home";


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
]