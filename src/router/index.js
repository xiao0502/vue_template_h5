import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// home
const Home = () => import('../views/home/home.vue').then(m => m.default)
const FlatList = () => import('../views/flatlist/flatlist.vue').then(m => m.default)


const HomeSkeleton = () => import('../skeleton/homeSkeleton.vue').then(m => m.default)

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
            path: '/flatlist',
            name: 'flatlist',
            component: FlatList
        },
        {
            path: '/homeSkeleton',
            name: 'homeSkeleton',
            component: HomeSkeleton
        }
    ]
})
