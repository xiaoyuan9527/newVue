<template>
    <div>
        <span>hello</span>
        <span>
            <button @click="$router.push('/home')">去home</button>
            <button @click="loginEvt">模拟登入</button>
        </span>
    </div>
</template>
<script>
    export default {
        methods: {
            loginEvt() {
                // 将登入信息储存到vuex中的store 实现全局访问，
                // 后续将把该数据改写为借口获取

                // 模拟获取token
                this.$store.commit('common/mutationToken', 'xxx')
                this.$router.push('/home')
            }   
        }
    }
</script>