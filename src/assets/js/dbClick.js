import Vue from 'vue';

export default {
    install(Vue, option) {
        Vue.directive('dbClick', {
            inserted(el) {
                el.addEventListener('click', e => {
                    let timer
                    // 按钮能点击
                    if (!el.disabled) {
                        el.disabled = true;
                        timer = setTimeout(() => {
                            el.disabled = false;

                        }, 1500)
                    }else {
                        if (timer) {
                            clearTimeout(timer)
                        }
                    }
                })
            }
        })
    }
}
