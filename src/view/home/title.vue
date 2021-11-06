<template>
    <div>
        <span>this child</span>
        <span>名字：{{name}}，年龄{{age}}</span>
    </div>
</template>
<script>
    export default {
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
        }
    }
</script>