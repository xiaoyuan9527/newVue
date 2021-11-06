import Vue from 'vue'
import App from './view'

import router from './router'

new Vue({
    router,
    render(h) {
        return h(App)
        },
}).$mount('#app')