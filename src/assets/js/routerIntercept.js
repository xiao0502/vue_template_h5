import router from 'router'
import store from "../../store";


export default {
    install() {
        const history = window.sessionStorage;
        let historyCount = history.getItem('count') * 1;
        router.beforeEach(function (to, from, next) {
            const toIndex = history.getItem(to.path);
            const fromIndex = history.getItem(from.path);
            if (toIndex) {
                if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
                    store.commit('UPDATE_DIRECTION', {direction: 'forward'})
                } else {
                    store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
                }
            } else {
                ++historyCount;
                history.setItem('count', historyCount);
                to.path !== '/' && history.setItem(to.path, historyCount);
                store.commit('UPDATE_DIRECTION', {direction: 'forward'})
            }
            if (/\/http/.test(to.path)) {
                let url = to.path.split('http')[1];
                window.location.href = `http${url}`
            } else {
                next()
            }

            // 判断是否登陆
            if (to.matched.some(record => record.meta.requiresAuth)) {
                // console.log('全局路由拦截：已登录');
                next()
            } else {
                next()
            }
            next();
        });
    }
}

