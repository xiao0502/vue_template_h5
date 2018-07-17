import * as types from './mutations-types'

const mutations = {
    [types.LOGIN_IN](state, payload) {
        state.token = payload;
        window.localStorage.setItem('token', payload);
    },
    [types.LOGIN_OUT](state) {
        state.token = null;
        window.localStorage.removeItem('token');
    },
    [types.SET_LOADING](state, loadingFlag) {
        state.isLoading = loadingFlag;
    },
    [types.UPDATE_DIRECTION](state,payload) {
        state.direction = payload.direction
    },
}

export default mutations;
