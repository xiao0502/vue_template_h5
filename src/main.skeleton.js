import Vue from 'vue'
import HomeSkeleton from './skeleton/homeSkeleton'

export default new Vue({
    components: {
        HomeSkeleton
    },
    template: `
        <div class="skeleton-wrapper">
            <HomeSkeleton id="home" style="display:none"/>
        </div>
            `
})
