<template>
    <div class="home-wrapper">
        <scroll
            ref="scroll"
            :pullDownRefresh="pullDownRefreshObj"
            @pullingDown="onPullingDown"
        >
            <div>
                <div class="title">过滤器</div>
                <div>{{name | addString}}</div>
                <div class="title">@2x@3x，请在不同dpr手机查看</div>
                <div class="dpr-img"></div>
                <div class="title">消息提示</div>
                <div class="btnList">
                    <x-button
                        mini
                        @click.native="toast">
                        toast
                    </x-button>

                    <x-button
                        mini
                        @click.native="alert">
                        alert
                    </x-button>

                    <x-button
                        mini
                        @click.native="confirm">
                        confirm
                    </x-button>
                    <x-button
                        mini
                        @click.native="showLoading">
                        showLoading
                    </x-button>
                </div>
                <div class="title">上拉加载下拉刷新</div>
                <div>
                    <x-button
                        mini
                        @click.native="toFlatList">
                        跳转至flatlist
                    </x-button>
                </div>
                <div class="title">输入框fastClick</div>
                <x-input
                    title="姓名"
                    type="tel"
                    placeholder="请输入"
                    v-model="val"></x-input>
                <div class="title">请求数据（防止连续多次请求）</div>
                <x-button
                    mini
                    v-dbClick
                    @click.native="getData">
                    请求轮播图
                </x-button>
                <swiper
                    class="swiper-wrapper"
                    :list="bannerList"
                    :aspect-ratio="600/900"
                    auto
                    loop
                    :show-desc-mask="false">
                    <div class="tip" v-show="bannerList.length === 0">
                        点击按钮加载轮播
                    </div>
                </swiper>
                <div class="title">kepp-alive</div>
                <div>
                    <x-button
                    mini
                    v-dbClick
                    @click.native="toKeepAlive">
                    请求轮播图
                    </x-button>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script>
    import {
        XButton,
        XInput,
        Swiper
    } from 'vux'
    import API from 'assets/js/api'
    import Scroll from 'components/better-scroll/scroll'

    export default {
        name: "home",
        data() {
            return {
                name: 'home',
                val: '',
                bannerList: [],
                // pullDownRefreshObj: {
                //     threshold: 90,
                //     stop: 50,
                //     txt: '刷新成功'
                // },
                pullDownRefreshObj: false
            }
        },
        methods: {
            toast() {
                this.$toast('Hi~')
            },
            alert() {
                this.$alert('Hello~')
            },
            confirm() {
                this.$confirm('Hi~')
            },
            showLoading() {
                this.$showLoading('加载中...')
                setTimeout(() => {
                    this.$hideLoading()
                }, 2000)
            },
            async getData() {
                const res = await this.$get(API.bannerList);
                if (res.code === this.$CODE) {
                    this.bannerList = [...res.data.bannerList]
                }
            },
            toFlatList() {
                this.$router.push({
                    name: 'flatlist'
                })
            },
            onPullingDown() {
                setTimeout(() => {
                    this.$refs.scroll.forceUpdate()
                }, 1000)

            },
            toKeepAlive() {
                this.$router.push({
                    name: 'keepalivepage1'
                })
            }
        },
        components: {
            XButton,
            XInput,
            Swiper,
            Scroll
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/css/mixin.less";

    div {
        color: teal
    }

    .home-wrapper {
        position: absolute;
        top: 15px;
        bottom: 15px;
        left: 15px;
        right: 15px;
    }

    .title {
        font-weight: bold;
        margin-bottom: 10px;
        &:not(:first-child) {
            margin-top: 20px;
        }
    }

    .btnList {
        display: flex;
        align-items: flex-end;
    }

    .linkItem {
        width: 100%;
        list-style: none;
        padding: 10px;
        word-break: break-all;
    }

    .swiper-wrapper {
        margin-top: 10px;
        background: #e6e6e6;
        position: relative;
        .tip {
            font-size: 13px;
            width: 100%;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .swiper-demo-img {
        height: inherit;
    }

    .link {
        color: #000;
        font-size: 14px;
    }

    .vux-x-input:before {
        display: none;
    }

    .dpr-img {
        .bg-image(icon-noData, 50px, 50px)
    }
</style>
