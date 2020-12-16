import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import routes from "@/router/routes";

Vue.use(VueRouter)
Vue.use(VueMeta, {
    // The component option name that vue-meta looks for meta info on.
    keyName: 'page',
})

const router = new VueRouter({
    routes: routes,
    linkActiveClass: "active",
    mode: 'history',
    linkExactActiveClass: "active",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
})

export default router