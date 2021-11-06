import Vue from 'vue'
import Router from 'vue-router'

// vue中全局注册
Vue.use(Router)

// 引入需要重定向的组件
import Login from '../view/login'
import Home from '../view/home'
import List from '../view/list'
import NotFound from '../view/common/NotFound'

const routes = [
    // 重定向，/为login
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login, meta: { title: 'router' } },
    { path: '/home', component: Home },
    { path: '/list', component: List },
    { path: '/404', component: NotFound },
    // 未知路由的情况自动跳转到404
    { path: '*', redirect: '/404' },
]

const router = new Router({
    routes
})

router.beforeEach(function(to, from, next) {
    if (to.meta.title) {
        next()
    }
    // 模拟一条token
    // 注释掉清除localStore数据就没了
    // 可以判断是否有登陆凭证
    localStorage.setItem('token', 'xxx')
    // 取得该token
    let token = localStorage.getItem('token')

    
    if (token) {
        next()
    } else {
        // 判断是否来自于首页地址的访问
        // 这里可以拦截非正常登入
        if (from.path !== '/login') {
            next('/login')
        }
    }
})

// 导出
export default router