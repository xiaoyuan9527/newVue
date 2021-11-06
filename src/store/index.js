import Vue from 'vue'
import Vuex from 'vuex'

import persistedstate from 'vuex-persistedstate'

import common from './common'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 引入vuex的组件
    plugins: [
        persistedstate({})
    ],
    // 引入模块化的common(命名空间化)
    modules: {
        common
    }

})

export default store