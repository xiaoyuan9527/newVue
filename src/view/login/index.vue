<template>
    <div>
        <input type="text" name="" id="" v-model="code" placeholder="这是验证码">
        <span>
            <button @click="$router.push('/home')">去home</button>
            <button @click="loginEvt">模拟登入</button>
            <button @click="getCode">模拟获取验证码</button>
        </span>
    </div>
</template>
<script>
    import { getCodeApi } from '../../apis/loginApi'
    export default {
        data() {
            return {
                code: null,
                state: false
            }
        },
        methods: {
            loginEvt() {
                // 将登入信息储存到vuex中的store 实现全局访问，
                // 后续将把该数据改写为借口获取

                // 模拟获取token
                this.$store.commit('common/mutationToken', 'xxx')
                this.$router.push('/home')
            },
            // 这是ajax请求，是异步操作，所以需要async await
            async getCode() {
                // 这是默认手机号
                // 可以作input 改写为登入操作
                let phone = 13611660022
                let result = await getCodeApi(phone)
                // console.log(result);
                this.code = result.data.vdtCode
            }
        }
    }
</script>