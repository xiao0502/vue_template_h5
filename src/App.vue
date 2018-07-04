<template>
    <div id="app">
        <router-view/>
        <loading
            :isLoading="$store.state.isLoading"
        ></loading>
    </div>
</template>

<script>
    import Loading from 'components/Loading'
    export default {
        name: 'App',
        components: {
            Loading
        }
    }
</script>

<style scoped lang="less">
    @import '~vux/src/styles/1px.less';
</style>
