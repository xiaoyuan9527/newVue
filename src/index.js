import Vue from 'vue'
import App from './view'

import router from './router'
import store from './store'

// 引入vant框架
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

// 全局引入[自定义的放后面，因为样式会被覆盖，我们想要修改的直接覆盖掉就好]
import './style/index.less'

// 自定义组件全局引入 | 全局过滤器
import Plguin from './components'

Vue.use(Plguin)

new Vue({
    store,
    router,
    render(h) {
        return h(App)
        },
}).$mount('#app')