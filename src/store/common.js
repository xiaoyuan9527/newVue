const state = {
    token: ''
}

// 获取state中token的方法
const getters = {
    // 下方的简写
    token: state => state.token

    // token(state) {
    //     return state.token
    // }
}

// 异步请求才是用
const actions = {
    tokenAct({commit}, token) {
        commit('mutationToken', token)
    }
}

// 修改/赋值 state中token的方法
const mutations = {
    mutationToken(state, token) {
        return state.token = token
    }
}

export default {
    // 开启命名空间
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}