<template>
    <div>
        <span>this list</span>
        <span>
            <button @click="goBack">离开</button>
        </span>
    </div>
</template>
<script>
    export default {
        methods: {
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