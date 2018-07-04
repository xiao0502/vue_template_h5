import axios from 'axios'
import qs from 'qs'
import API from './api'
import store from 'store'

axios.defaults.baseURL = API.baseUrl

// 拦截请求
axios.interceptors.request.use(
    config => {
        // 处理各种请求
        // let loadingFlag = false;
        // if (!loadingFlag) {
        //     store.commit('SET_LOADING', true)
        // }else {
        //
        // }
        store.commit('SET_LOADING', true)
        return config;
    },
    err => {
        return Promise.reject(err);
    }
)

// 拦截响应
axios.interceptors.response.use(
    res => {
        // 处理何种响应
        // 延迟展示自定义loading
        setTimeout(() => {
            store.commit('SET_LOADING', false)
        },1000)
        return res;
    },
    err => {
        if (err.response) {
            console.log(err.response)
        }
        return Promise.reject(err)
    }
)

/**
 * 统一处理请求失败
 * @param res
 * @returns {*}
 */
function errorState(res) {
    if (res && res.status === 200) {

    }
}

/**
 * 统一处理请求成功
 * @param res
 */
function successState(res) {
    let code = res.data.code;
    switch (code) {

    }
}

export default {
    install(Vue, option) {
        /**
         * 封装post请求
         * @param url 请求url
         * @param params 请求参数
         * @param isForm 请求参数是否以表单格式提交
         * @returns {Promise<any>}
         */
        Vue.prototype.$post = function (url, params, isForm) {
            const commonParams = Object.assign({t: new Date().getTime()}, params);
            return new Promise((resolve, reject) => {
                axios.post(url, isForm ? qs.stringify(commonParams) : commonParams)
                    .then(res => {
                        successState(res);
                        resolve(res.data)
                    })
                    .catch(error => {
                        errorState(error);
                        reject(error)
                    })
                    .finally(() => {
                        console.log('finally');
                    })
            })
        }
        /**
         * 封装get请求
         * @param url 请求url
         * @param params 请求参数
         * @returns {Promise<any>}
         */
        Vue.prototype.$get = function (url, params) {
            const commonParams = Object.assign({t: new Date().getTime()}, params);
            return new Promise((resolve, reject) => {
                axios.get(url, {params: commonParams})
                    .then(res => {
                        successState(res);
                        resolve(res.data)
                    })
                    .catch(error => {
                        errorState(error);
                        reject(error)
                    })
                    .finally(() => {
                        console.log('finally');
                    })
            })
        }
        Vue.prototype.$CODE = 0;
    }
}
