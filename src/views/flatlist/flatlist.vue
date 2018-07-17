<template>
    <div class="flatlist-wrapper">
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
        .list-wrapper {
            height: 100%;
            overflow: hidden;
        }
        .list-item {
            text-align: center;
            padding-left: 0 !important;
        }
    }
</style>
