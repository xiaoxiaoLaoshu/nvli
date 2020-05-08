module.exports = {
  //baseUrl: '/dome', // 根路径
  outputDir: 'dist2', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
  lintOnSave: false, // 是否开启eslint保存检测，有效值： true || false || 'error'
  devServer: {
    open: true, // 完成项目构建后，是否自动开启浏览器预览
    host: "localhost", //本地开发的主机名,真机测试使用 0.0.0.0 地址
    port: 8081, // 在浏览器开启的端口号
    https: false, // 是否使用 https 协议
    hotOnly: false,
    proxy: {
      // 配置跨域
      '/api':{
        'target': "http//localhost:5000/api/", // 跨域的地址
        ws: true, // 设置是否跨域
        changOrigin: true,
        pathRewrite: { // 简写跨域的地址
          '^/api': ''
        }
      }
    }
  }
}