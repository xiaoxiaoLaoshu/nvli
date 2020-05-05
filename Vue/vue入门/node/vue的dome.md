- vue的博客
  1. 使用 vue 中的数据交互方式 vue-resource 安装`npm install vue-resource --save`
  2. 在 main.js 中引用 resource 模块 `import VueResource from 'vue-resource'`
  3. 在 main.js 中使用 resource 模块 `Vue.use(VueResource)`
- 博客发布组件
  - 网页结构
  - 网页行为
  - 网页表现
- 博客展示组件
  - 使用假数据来作为数据源，模拟前后端数据的交互，这里使用钩子函数 created(),vue 实例已经创建，可以使用 data 和 watch 属性，但是页面还是空白的 
  ```js
  this.$http.get("https://jsonplaceholder.typicode.com/posts")
  .then(function(data){
    // 只使用前十条数据
    this.blogs = data.body.slice(0, 10);
  });
  ```
  - 使用本地数据作为数据源，本地数据必须放在 static 目录夹下
  ```js
    this.$http.get("./../static/post.json")
    .then(function(data){
      this.blogs = data.body.slice(0, 10);
    });
  ```
- 自定义指令
  1. 不给参数,在 main.js 中定义全局自定义指令，局部自定义指令在组件中定义 directives 属性，在组件中使用。`<div class="show-blogs" v-theme:column="'narrow'">  <h2 v-rainbow>{{blog.title}}</h2>`
  ```js
  // 全局自定义指令
      Vue.directive("rainbow", {
        // 钩子函数
    bind(el, binding, vnode){
      // 字体颜色的随机颜色
      el.style.color = '#' + Math.random().toString(16).slice(2,8);
    }
  })
  // 局部自定义指令
    directives: {
      'rainbow': {
        bind(el, binding, vnode){
          return el.style.color = '#' + Math.random().toString(16).slice(2,8);
        }
      }
    }
  ```
  2. 给定参数
  ```js
    Vue.directive('theme', {
      bind(el, binding, vnode){
        // 判断传入参数的 值
        if (binding.value == 'wide') {
          el.style.maxWidth = "1260px;
        } else if (binding.value == 'narrow') {
          el.style.maxWidth = "560px";
        }

        // 判断传入事件名参数
        if (binging.arg == 'column') {
          el.style.background = "#6677cc";
          el.style.padding = "0 20px";
        }
      }
    })
    // 局部自定义指令
    directives: {
      'theme': {
        bind(el, binding, vnode){
          // 判断传入参数的 值
          if (binding.value == 'wide') {
            el.style.maxWidth = "1260px;
          } else if (binding.value == 'narrow') {
            el.style.maxWidth = "560px";
          }

          // 判断传入事件名参数
          if (binging.arg == 'column') {
            el.style.background = "#6677cc";
            el.style.padding = "0 20px";
          }
        }
      }
    }
  ```
- 搜索功能 vue的过滤器
  - 在 main.js 中定义全局过滤器，局部过滤器在组件中定义 filters 属性，组件中使用 使用方式类似于 linux 的管道 `<h2 v-rainbow>{{blog.title | to-uppercase}}</h2>`
  ```js
    // 全局过滤器
    Vue.filter("to-uppercase", function(value){
    // 将字符的小写转换为大写
      return value.toUpperCase();
    })

    Vue.filter("snippet", function(value){
      // 截取字符 多处的以 …… 替代
      return value.slice(0, 100) + '……';
    })  
    // 局部过滤器 
    filters: {
      toUpperCase(value) {
        return  value.toUpperCase();
      }
    }
  ```
  - 使用计算属性来完成搜索功能,注意 this 的指向问题
    ```js
      filteredBlogs: function(){
      //  使用 ES6 提供的过滤器方法
      return this.blogs.filter((blog) => {
        // 使用箭头函数，将 this 的引用到本实例对象，匹配成功，则显示结果，不成功则显示全部数据
        return blog.title.match(this.keywords);
      });
    }
    ```
- v-router 使用路由来实现页面跳转
  1. 下载路由插件 `npm install vue-router --save`
  2. 在 main.js 中引入路由插件 `import VueRouter from 'vue-router'`
  3. 在 main.js 中使用路由 `Vue.use('VueRouter')`
  4. 在 main.js 中创建路由对象
  ```js
  const router = new VueRouter({
    routes: Routes
  })
  ```
  5. 匹配路由 Routes 信息，没有则创建路由信息，创建文件 routes.js 里面存放路由的匹配规则
  6. routes.js 内容
  ```js
  // 引入 组件 文件
    import ShowBlogs from './components/ShowBlogs.vue'
    import AddBlog from './components/AddBlog.vue'

    export default [
      {path:"/",component: ShowBlogs},
      {path:"/add",component: AddBlog},
    ]
  ```
  7. 在 main.js 中引入 routes.js 文件,并命名`import Routes from './routes'`,以上4步完成路由的创建
  8. 注册路由，在 main.js 中注册路由 
  ```js
    new Vue({
      render: h => h(App),
      router: router
    }).$mount('#app')
  ```
  9. 调用路由, 在根组件中调用 `<router-view></router-view>`
  - 去除 url 中的 # ，在 创建路由中规定 mode 属性
  ```js
    const router = new VueRouter({
    routes: Routes,
    mode: 'history'
  })
  ```
- 路由参数,使用路由参数来实现具体博客的展示
  
  1. 在 routes.js 中，绑定路径和可变的唯一参数 `{path:"/blog/:id",component: SingleBlog},` 这里绑定的 可变的唯一参数是 id,数据中必须有 id 参数，引入 SingleBlog 文件
  2. 创建 SingleBlog 组件
    1. 接受来自路由的数据 id，在 data 中接收 `id: this.$route.params.id`
    2. 根据 id 使用 get 方式去获取相应的数据
      ```js
        created() {
          this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
            .then(function(data){
              // console.log(data);
              this.blog = data.body;
            })
        }
      ```
    3. 将获取到的数据渲染到模板中
- 使用数据库来存储和读取数据，数据库选用 google 的 firebase 数据库
  1. 存数据 使用 post 方式提交数据
    ```js
      post() {
      this.$http.post('https://vueblog-adc33.firebaseio.com/posts.json',this.blog)
        .then(function(data) {
          console.log(data);
          this.submited = true;
        });
    }
    ```
  2. 取数据，使用 git 方式获取数据
    ```js
      
    ```