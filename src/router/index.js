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
            redirect:'/home',

        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true,
                title: '首页'
            }
        },
        {
            path: '/flatlist',
            name: 'flatlist',
            component: FlatList,
            meta: {
                title: '列表'
            }
        },
        {
            path: '/homeSkeleton',
            name: 'homeSkeleton',
            component: HomeSkeleton
        }
    ],
    mode: 'history',
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
})
