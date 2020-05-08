- vue3.0的 学习
  1. 安装 在 命令行中 输入 `npm install -g @vue/cli`
  2. 创建项目 在命令行中输入 `vue create 项目名`
  3. 生成项目配置文件 
- 自定义脚手架
  1. 创建项目 
  2. 选择配置文件，（default 默认配置文件）、（myVueCli3 自定义脚手架）(Manually select features 新建脚手架配置)
  3. 在 windows 的个人配置中修改 相关的配置文件 搜索 .vuerc 在里面可以修改自己的自定义配置文件
- 添加新出的插件方法
  + 以前使用 `npm install axios` 命令安装 axios 插件，现在可以使用 `vue add axios`，区别 如果安装的插件对当前组件有代码的影响使用`vue add 插件名`,没有影响使用`npm install axios`。
- 全局环境变量的使用
  - 非开发环境中的全局变量配置
    1. 在根目录中添加 **.env** 文件，在里面填写 全局环境变量 的值,如全局变量的 url 地址 **VUE_APP_** *是固定写法*后面接 相应的变量 URL 拼接起来就`VUE_APP_URL` 
    2. 在相应的组件中引用 全局环境变量 。
      ```js
        data() {
          return {
            url: process.env.VUE_APP_URL;
          }
        }
      ```
  - 开发环境中的全局变量配置
     1. 在根目录中添加 **.env.development** 文件，在里面填写 全局环境变量 的值,如全局变量的 url 地址 **VUE_APP_** *是固定写法*后面接 相应的变量 URL 拼接起来就`VUE_APP_URL`
     2. 在相应的组件中引用 全局环境变量 。
      ```js
        data() {
          return {
            url: process.env.VUE_APP_URL;
          }
        }
      ```
      配置了开发环境的文件，系统启动默认使用开发环境的配置,如果开发环境中的文件配置错误，系统会接着使用 非开发环境的文件配置。
  - 生产环境中的全局变量配置
    1. 在根目录中添加 **.env.production** 文件，在里面填写 全局环境变量 的值,如全局变量的 url 地址 **VUE_APP_** **是固定写法**后面接 相应的变量 URL 拼接起来就`VUE_APP_URL`
     2. 在相应的组件中引用 全局环境变量 。
      ```js
        data() {
          return {
            url: process.env.VUE_APP_URL;
          }
        }
      ```
      配置了生产环境的文件，系统打包上线的全局环境变量就使用 .env.production 文件中的配置。
- 独立运行VUE文件
  - 安装插件 `npm install -g @vue/cli-service-global`
  - 启动 VUE 文件 `npm run serve 文件名`
- 图形页面构建项目
  - 在 命令行 中输入 `vue ui`,会打开一个网页进行图形化的项目相关操作
- 配置基础的路径
  - 在 根目录 创建 vue.config.js 文件，来配置vue的基础配置信息
- 配置跨域请求
  ```js
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
  ```