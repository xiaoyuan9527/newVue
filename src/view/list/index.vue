<template>
    <div>
        <span>this list</span>
        <span>
            <button @click="goBack">离开</button>
        </span>
        <slot-page :state="state" >
            <!-- :header代表具名插槽   ="参数"，从具名参数传来的值 -->
            <!-- data是一个对象数组，需要data.传递的值 -->
            <template v-slot:header="data">
            <!-- 这是简写 -->
            <!-- <template #header > -->
                <button  >这是slot插入的{{data.state}}</button>
            </template>
            <button>这是不具名</button>
        </slot-page>
    </div>
</template>
<script>
    import SlotPage from './slotPage.vue'
    export default {
        data() {
            return {
                state: "xiaoyuan"
            }
        },
        components: {
            SlotPage
        },
        methods:{
            goBack() {
                this.$router.push('/home')
            }
        },
        beforeRouteLeave (to, from, next) {
            // 使用自带的confirm方法，确定为真，拒绝假
            let info = confirm('确认离开')
            if (info) {
                next()
            }
        }
    }
</script>