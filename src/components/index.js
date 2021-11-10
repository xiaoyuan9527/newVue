import PageLayout from './PageLayout'

const plugin = {
    install: function(Vue) {
        // 全局注册，头部组件
        Vue.component('PageLayout', PageLayout)

        Vue.filter('filterNew', function(val) {
            if (!val) return ''
            return val.substr(0,2)
        })
    }
}

export default plugin