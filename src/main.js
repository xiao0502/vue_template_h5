import Vue from 'vue'
import App from './App'
import router from './router' // 路由
import 'assets/css/index.less' // 样式
import filter from 'assets/js/filter' // 过滤器
import msg from 'assets/js/msg' // 全局消息提示
import routerIntercept from 'assets/js/routerIntercept' // 全局路由拦截处理
import store from 'store' // 全局状态管理
import ajax from 'assets/js/ajax' // 封装ajax
import dbClick from 'assets/js/dbClick' // 防止多次连续点击指令
import { TransferDom } from 'vux'
import FastClick from 'assets/js/fastclick'




Vue.directive('transfer-dom', TransferDom)
Vue.use(msg)
Vue.use(routerIntercept)
Vue.use(ajax)
Vue.use(dbClick)
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    filter,
    store,
    render: h => h(App)
})
