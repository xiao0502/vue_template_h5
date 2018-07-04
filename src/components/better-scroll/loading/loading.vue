<template>
    <div class="mf-loading-container">
        <spinner class="img" :type="ios"></spinner>
    </div>
</template>
<script type="text/ecmascript-6">
    import {Spinner} from 'vux'
    const COMPONENT_NAME = 'loading'
    export default {
        name: COMPONENT_NAME,
        data() {
            return {
                ios: 'ios'
            }
        },
        components: {
            Spinner
        }
    }
</script>
<style scoped lang="less">
    .mf-loading-container {
        .img {
            width: 20px;
            height: 20px;
            display: block
        }
    }
</style>
