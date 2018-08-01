import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// home
const Home = () => import('../views/home/home.vue').then(m => m.default)
const FlatList = () => import('../views/flatlist/flatlist.vue').then(m => m.default)
const KeepalivePage1 = () => import('../views/keepalive/page1.vue').then(m => m.default)
const KeepalivePage2 = () => import('../views/keepalive/page2.vue').then(m => m.default)
const KeepalivePage3 = () => import('../views/keepalive/page3.vue').then(m => m.default)


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
            path: '/keepalivepage1',
            name: 'keepalivepage1',
            component: KeepalivePage1
        },
        {
            path: '/keepalivepage2',
            name: 'keepalivepage2',
            component: KeepalivePage2
        },
        {
            path: '/keepalivepage3',
            name: 'keepalivepage3',
            component: KeepalivePage3
        },
        {
            path: '/homeSkeleton',
            name: 'homeSkeleton',
            component: HomeSkeleton
        }
    ]
})
