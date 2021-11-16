module.exports = {
    // 设置是否开启lint检测
    lintOnSave: false,
    
    // 打包专用路径
    publicPath: './',

    // vue是单页面开发这里可以设置多页面开发
    // 设置多页面模式
    pages: {
        index: {
            template: 'public/index.html',
            entry: 'src/index.js'
        }
    },

    // ajax设置修改部分
    // 端口设置
    devServer: {
        // 这里我选择了本地端口8080
        port: 8080,
        // 这里是服务启动是否自动打开页面
        open: true,
        // 配置代理
        // 当进行跨域请求时需要设置代理
        proxy: {
            '/apis': {
                // 代理地址
                target: 'http://www.shuiyue.info:16800',
                // 将地址栏中的apis改没
                pathRewrite: {'/apis' : ''}
            }
        }
    }
}