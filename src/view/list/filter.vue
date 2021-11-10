<template>
    <div>
        <h2>this is filter</h2>
        <span>
            <button @click="getTime">获取当前时间</button>
            <!-- 过滤器使用方法将date的值替换为filterTime的返回值 -->
            <span>{{date | filterTime}}</span>
        </span>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                date: '2021年11月1日'
            }
        },
        filters: {
            // 过滤器方法 第一个参数为传入值，从第二开始都是传出值
            filterTime(val, ) {
                console.log(arguments);
                if (!val) return ''
                // 截取前四位，到年
                return val.substr(0,4)
            }
        },
        methods: {
            getTime() {
                // this.date = new Date()
            }
        },
    }
</script>