import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// home
const Home = () => import('../views/home/home.vue');


const HomeSkeleton = () => import('../skeleton/homeSkeleton.vue')

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/homeSkeleton',
            name: 'home',
            component: HomeSkeleton
        }
    ]
})
