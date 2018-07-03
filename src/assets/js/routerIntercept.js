import router from 'router'


export default {
    install() {
        router.beforeEach((to, from, next) => {
            // 判断是否登陆
            if (to.matched.some(record => record.meta.requiresAuth)) {
                console.log('全局路由拦截：已登录');
                next()
            } else {
                next()
            }
            next();
        });
    }
}


