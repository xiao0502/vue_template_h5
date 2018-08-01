<template>
    <div id="app">
        <x-header
            class="x-header"
            :left-options="leftOptions"
            :title="title"
            @on-click-back="goBack"
        >
        </x-header>
        <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
            <keep-alive>
                <router-view class="router-view"></router-view>
            </keep-alive>
        </transition>
        <loading
            :isLoading="$store.state.isLoading"
        ></loading>
    </div>
</template>

<script>
    import Loading from 'components/Loading'
    import {mapState} from 'vuex'
    import {XHeader,} from 'vux'

    export default {
        name: 'App',
        components: {
            Loading, XHeader
        },
        data() {
            return {}
        },
        methods: {
            goBack() {
                if (this.$route.path === '/home') {
                    this.$toast('返回原生')
                } else {
                    this.$router.go(-1);
                }

            }
        },
        computed: {
            ...mapState({
                direction: state => state.direction,
            }),
            leftOptions() {
                return {
                    preventGoBack: true
                }
            },
            title() {
                return this.$route.meta.title
            }
        },
        watch: {

        }
    }
</script>

<style scoped lang="less">
    @import '~vux/src/styles/1px.less';

    #app {
        width: 100%;
        height: 100vh;
        .x-header {
            z-index: 2;
        }
        .router-view {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            padding-top: 46px;
        }
        .vux-pop-out-enter-active,
        .vux-pop-out-leave-active,
        .vux-pop-in-enter-active,
        .vux-pop-in-leave-active {
            will-change: transform;
            transition: all .3s;
            height: 100%;
            top: 0;
            position: absolute;
            width: 100%;
            backface-visibility: hidden;
            perspective: 1000;
        }

        .vux-pop-out-enter {
            opacity: .7;
            transform: translate3d(-100%, 0, 0);
        }

        .vux-pop-out-leave-active {
            opacity: .7;
            transform: translate3d(100%, 0, 0);
        }

        .vux-pop-in-enter {
            opacity: .7;
            transform: translate3d(100%, 0, 0);
        }

        .vux-pop-in-leave-active {
            opacity: .7;
            transform: translate3d(-100%, 0, 0);
        }
    }
</style>
