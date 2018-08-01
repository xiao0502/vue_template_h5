<template>
    <div>
        <group>
            <x-input title="title1" v-model="value1"></x-input>
            <x-input title="title2" v-model="value2"></x-input>
            <x-input title="title3" v-model="value3"></x-input>
            <x-input title="title4" v-model="value4"></x-input>
            <x-input title="title5" v-model="value5"></x-input>
        </group>
        <br>
        <br>
        <br>
        <x-button
            v-dbClick
            @click.native="next">
            下一步
        </x-button>
    </div>
</template>
<script>
    import {
        XInput,
        Group,
        XButton
    } from 'vux'
	export default {
        data() {
            return {
                value1: 1,
                value2: 2,
                value3: 3,
                value4: 4,
                value5: 5,
            }
        },
        methods: {
            next() {
                console.log(123);
                this.$router.push({
                    name: 'keepalivepage2'
                })
            }
        },
        components: {
            XInput,
            Group,
            XButton
        }
    }
</script>
<style lang="less" scoped>
</style>
<style lang="less">
</style>
