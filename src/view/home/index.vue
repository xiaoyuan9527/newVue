<template>
    <div>
        <span>this home</span>
        <span>
            <button @click="$router.push('/login')">去login</button>
            <button @click="$router.push('/list')">去list</button>
            <br>
            <span>子组件信息{{info}}</span>
            <!-- 父子传值->父传子 -->
            <div>
                <button @click="changeEvt">传值</button>
                <!-- 传值用:name="name" 传递，子组件利用props接收 -->
                <!-- 父组件自定义一个事件，设置一个方法 -->
                <model-title @childFn="parentFn" v-if="state" :name="name" :age="age" />
            </div>
            </span>
    </div>
</template>
<script>
    import modelTitle from './modelTitle.vue'
    export default {
        components: {
            modelTitle 
        },
        data() {
            return {
                // info是子组件传回来的，必须先定义
                info: '',
                state: false,
                name: '小花',
                age: '18'
            }
        },
        methods: {
            changeEvt() {
                this.state = !this.state
                if (this.state){
                    this.age ++
                }
            },
            // 方法会默认接收值，把该值赋予到info
            parentFn(data) {
                this.info = data
            } 
        }
    }
</script>