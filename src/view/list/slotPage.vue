<template>
    <div>
        <span>slot示例</span>
        <br>
        <div>
            <input type="text" v-model="data">
            <slot name="header" :state="state" />
        </div>
        <div>
            <span>这是分割线</span>
        </div>
        <slot/>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: ''
            }
        },
        props: {
            state: {
                type: String,
                required: true
            }
        }
    }
</script>