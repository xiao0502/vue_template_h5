import Vue from 'vue'
import App from './App'
import router from './router' // 路由
import 'assets/css/index.less' // 样式
import filter from 'assets/js/filter' // 过滤器
import msg from 'assets/js/msg' // 全局消息提示
import routerIntercept from 'assets/js/routerIntercept' // 全局路由拦截处理
import store from 'store'


Vue.use(msg)
Vue.use(routerIntercept)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    filter,
    store,
    render: h => h(App)
})
