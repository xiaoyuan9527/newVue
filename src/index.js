import Vue from 'vue'
import App from './view'

import router from './router'
import store from './store'

new Vue({
    store,
    router,
    render(h) {
        return h(App)
        },
}).$mount('#app')