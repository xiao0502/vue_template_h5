<template>
    <div v-show="isLoading" class="component-loading">
        <i class="icon-loading"></i>
        <span>{{text}}</span>
    </div>
</template>
<script type="es6">
    export default {
        props: {
            text: {
                type: String,
                default: '加载中...'
            },
            isLoading: false
        }
    }
</script>
<style lang="less" rel="stylesheet/less">
    @import "../assets/css/mixin";

    .component-loading {
        position: fixed;
        top: 200px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2001;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 40px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.12);
        font-size: 13px;
        color: #333;
        text-align: center;
        .icon-loading {
            display: inline-block;
            .bg-image(icon-loading, 17px, 17px);
            margin-right: 8px;
            animation: circle 1s linear infinite;
        }
        @keyframes circle {
            0% {
                transform: rotate(0deg);
            }
            50% {
                transform: rotate(180deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
</style>
