import axios from 'axios'

import store from '../store'

// 可以使用axios的拦截功能，总共有两个拦截：请求前，请求后
// axios的拦截器使用，可以使用请求前拦截，需要给请求体添加一个中间件，业务如果通过中间件处理，会继续执行请求业务
// use方法的回调函数，会入参一个AxiosRequestConfig对象
// 回调函数要求必须返回一个AxiosRequestConfig对象或则事一个Promise.reject方法
axios.interceptors.request.use(function(config) {
    let token = store.getters["common/token"],
        otherPath = ['/user/validate/code']
    
    if (otherPath.includes(config.url)) {
        return config
    } else {
        config.headers.token = token
        return config
    }
    // 如果在拦截器中返回一个reject方法，会在axios.request方法的catch中捕获到
    // return Promise.reject({code: 400, message: '前端请求必须有token数据'})
})


// 二次封装axios，便于自己使用
export default (req = {}) => {
    if (!req.url) {
        throw new Error('需要傳導接口')
    }

    return new Promise(resolve => {
        axios.request({
            // 设置请求地址
            url: req.url,
            // 设置请求类型默认为GET
            method: req.method || 'GET',
            // 地址传参，params
            params: req.params || {},
            // 请求体传参，data
            data: req.data || {},
            // 超时设置:默认5s
            timeout: req.timeout || 5000,
            // 给请求地址添加通用字符(左到右)
            // 因为这边要用代理，所以直接使用'apis'
            baseURL: '/apis'
        }).then(({data}) => {
            resolve(data)
        }).catch(e => {
            // 一般不直接返回这个e，避免暴露后端接口啥的，一般进行二次改写
            console.log(e);
            resolve({code: 500, message: '后端接口问题'})
        })
    })
}