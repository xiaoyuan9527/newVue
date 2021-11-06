<template>
    <div>
        <span>this home</span>
        <span>
            <button @click="$router.push('/login')">去login</button>
            <button @click="$router.push('/list')">去list</button>
            <!-- 父子传值->父传子 -->
            <button @click="!state">传值</button>
            <title v-if="state" :name="name" :age="age" />
        </span>
    </div>
</template>
<script>
    import Title from './title.vue'
    export default {
        mixins: {
            Title
        },
        data() {
            return {
                state: false,
                name: '小花',
                age: '18'
            }
        },
    }
</script>