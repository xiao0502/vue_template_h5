<template>
    <div>
        <div class="title"></div>
        <div class="content"></div>
        <div class="title"></div>
        <div class="content"></div>
        <div class="title"></div>
        <div class="content"></div>
        <div class="title"></div>
        <div class="content"></div>
    </div>
</template>

<script>
    export default {
        name: "homeSkeleton"
    }
</script>

<style scoped>
    .title {
        width: 50%;
        height: 26px;
        background-color: #e6e6e6;
    }
    .content {
        width: 100%;
        height: 50px;
        background-color: #e6e6e6;
        margin: 20px 0;
    }
</style>
