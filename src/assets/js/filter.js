import Vue from 'vue'

const filters = {
    addString(val) {
        return val + ',我是过滤器生成';
    }
};

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

export default filters
