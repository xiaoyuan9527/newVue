// 这儿定义全局样式
// 意义在于全局注册被当做都被使用，换句话说这个组件也是子组件
// 即需要porps 同时需要slot 
<template>
    <div>
        <header>
            <i v-show="showHome"></i>
            <i v-show="showBack"></i>
            <!-- 因为这是公共样式，所以数据应该是当前页面传入的，这是被传入的标题 -->
            <span>{{text}}</span>
            <i v-show="showNew"></i>
        </header>
        <article>
            <slot/>
        </article>
    </div>
</template>
<script>
    export default {
        props: {
            text: {
                type: String,
                required: true
            },
            showHome: {
                type: Boolean,
                default: true
            },
            showBack: {
                type: Boolean,
                default: false
            },
            showNew: {
                type: Boolean,
                default: false
            }
        }
    }
</script>