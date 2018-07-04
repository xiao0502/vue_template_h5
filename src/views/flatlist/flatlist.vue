<template>
    <div class="flatlist-wrapper">
        <div class="scroll-wrapper">
            <scroll ref="scroll"
                    :data="items"
                    :pullDownRefresh="pullDownRefreshObj"
                    :pullUpLoad="pullUpLoadObj"
                    @pullingDown="onPullingDown"
                    @pullingUp="onPullingUp"
                    @click="clickItem"
            >
            </scroll>
        </div>

    </div>
</template>

<script>
    import Scroll from 'components/better-scroll/scroll'

    export default {
        name: "flatlist",
        data() {
            return {
                items: [],
                itemIndex: 0,
                pullDownRefresh: true,
                pullUpLoad: true, //
                pullUpLoadThreshold: 0,
                pullUpLoadMoreTxt: '上拉加载更多',
                pullUpLoadNoMoreTxt: '没有更多了',
                pullDownRefreshObj: {
                    threshold: 90,
                    stop: 50,
                    txt: '刷新成功'
                },
                pullUpLoadObj: {
                    threshold: 0,
                    txt: {
                        more: '上拉加载更多',
                        noMore: '没有更多了'
                    }
                }
            }
        },
        created() {
            for (let i = 0; i < 12; i++) {
                this.items.push('previousTxt--' + ++this.itemIndex + '--followingTxt')
            }
        },
        methods: {
            clickItem() {

            },
            onPullingDown() {
                // 模拟更新数据
                console.log('pulling down and load data')
                setTimeout(() => {
                    if (this._isDestroyed) {
                        return
                    }
                    if (Math.random() > 0.2) {
                        // 如果有新数据
                        this.items.unshift('newDataTxt--' + +new Date())
                    } else {
                        // 如果没有新数据
                        this.$refs.scroll.forceUpdate()
                    }
                }, 2000)
            },
            onPullingUp() {
                // 更新数据
                console.log('pulling up and load data')
                setTimeout(() => {
                    if (this._isDestroyed) {
                        return
                    }
                    if (Math.random() > 0.2) {
                        // 如果有新数据
                        let newPage = []
                        for (let i = 0; i < 10; i++) {
                            newPage.push('newDataTxt--' + ++this.itemIndex + '--followingTxt')
                        }
                        this.items = this.items.concat(newPage)
                    } else {
                        // 如果没有新数据
                        this.$refs.scroll.forceUpdate()
                    }
                }, 1500)
            }
        },
        watch: {
            pullDownRefreshObj: {
                handler(val) {
                    const scroll = this.$refs.scroll.scroll
                    if (val) {
                        scroll.openPullDown()
                    } else {
                        scroll.closePullDown()
                    }
                },
                deep: true
            },
            pullUpLoadObj: {
                handler(val) {
                    const scroll = this.$refs.scroll.scroll
                    if (val) {
                        scroll.openPullUp()
                    } else {
                        scroll.closePullUp()
                    }
                },
                deep: true
            },
        },
        components: {
            Scroll
        }
    }
</script>

<style lang="less">
    .flatlist-wrapper {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #dcdcdc;

        .scroll-wrapper {
            position: absolute;
            top: 15px;
            bottom: 150px;
            left: 15px;
            right: 15px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 5px rgba(0,0,0,.2);
            .list-wrapper {
                border-radius: 10px;
                overflow: hidden;
            }
            .list-item {
                text-align: center;
                padding-left: 0!important;
            }
        }

    }
</style>
