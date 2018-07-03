<template>
    <div>
        <div class="title">过滤器</div>
        <div>{{name | addString}}</div>
        <div class="title">消息提示</div>
        <div class="btnList">
            <x-button
                mini
                @click.native="toast"
            >toast
            </x-button>

            <x-button
                mini
                @click.native="alert"
            >alert
            </x-button>

            <x-button
                mini
                @click.native="confirm"
            >confirm
            </x-button>

            <x-button
                mini
                @click.native="showLoading"
            >showLoading
            </x-button>
        </div>
        <div class="title">过滤器</div>
        <x-input
            title="姓名"
            placeholder="请输入"
            v-model="val"></x-input>
    </div>

</template>

<script>
    import {
        XButton,
        XInput
    } from 'vux'

    export default {
        name: "home",
        data() {
            return {
                name: 'home',
                val: ''
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
            }
        },
        components: {
            XButton,
            XInput
        }
    }
</script>

<style scoped lang="less">
    div {
        color: teal
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
</style>
