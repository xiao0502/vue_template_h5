import Vue from 'vue';
import {ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin} from 'vux';

Vue.use(ToastPlugin);
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);
Vue.use(LoadingPlugin);

function checkType(val) {
    return Object.prototype.toString.call(val)
}

export default {
    install(Vue, option) {
        const msg = {
            $toast: config => {
                let defaultConfigaultConfigaultConfig = {
                    type: 'text',
                    text: '',
                    time: 1000
                }
                if (checkType(config) === "[object String]" || checkType(config) === "[object Number]") {
                    Vue.$vux.toast.show(Object.assign(defaultConfigaultConfigaultConfig, {text: config}))
                } else {
                    Vue.$vux.toast.show(Object.assign(defaultConfigaultConfigaultConfig, config))
                }
            },
            $alert: config => {
                let defaultConfigaultConfig = {
                    title: '提示',
                    content: '网络异常,请稍后再试！',
                    buttonText: '确定',
                    maskTransition: 'vux-fade'
                }
                if (checkType(config) === "[object String]" || checkType(config) === "[object Number]") {
                    Vue.$vux.alert.show(Object.assign(defaultConfigaultConfig, {content: config}));
                } else {
                    Vue.$vux.alert.show(Object.assign(defaultConfigaultConfig, config));
                }
            },
            $confirm: config => {
                let isConfirm = false;
                let defaultConfig = {
                    title: '提示',
                    content: '网络异常,请稍后再试！',
                    confirmText: '确定',
                    cancelText: '取消',
                    onConfirm: () => {
                        isConfirm = true;
                    }
                }
                if (checkType(config) === "[object String]" || checkType(config) === "[object Number]") {
                    Vue.$vux.confirm.show(Object.assign(defaultConfig, {content: config}));
                } else {
                    Vue.$vux.confirm.show(Object.assign(defaultConfig, config));
                }
            },
            $showLoading: config => {
                let defaultConfig = {
                    text: '加载中...'
                }
                if (checkType(config) === "[object String]" || checkType(config) === "[object Number]") {
                    Vue.$vux.loading.show(Object.assign(defaultConfig, {text: config}));
                } else {
                    Vue.$vux.loading.show(Object.assign(defaultConfig, config));
                }
            },
            $hideLoading: () => {
                Vue.$vux.loading.hide()
            }
        }
        Object.entries(msg).forEach(([method, callback]) => {
            Vue.prototype[method] = callback;
        })
    }
}
