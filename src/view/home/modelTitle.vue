<template>
    <div>
        <span>名字:{{name}}，年龄{{age}}</span>
        <input type="text" v-model="info">
        <button @click="clickEvt">信息传递</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                info: ''
            }
        },
        props: {
            name: {
                // 设置类型
                type: String,
                // 是否必传
                required: true,
            },
            age: {
                type: Number,
                required: false,
                // 默认值
                default: 1
            }
        },
        methods: {
            clickEvt() {
                // console.log(this.info);
                // 通过$emit传递，父组件自定义的事件，后面为值
                this.$emit('childFn', this.info)
            }
        }
    }
</script>