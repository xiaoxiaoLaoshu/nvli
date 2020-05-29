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
      created() {
        this.$http
          .get("https://vueblog-adc33.firebaseio.com/posts.json")
          .then(function(data) {
            // console.log(data.json());
            return data.json();
            // this.blogs = data.body.slice(0, 10);
          })
          .then(function(data){
            var blogsArray = [];
            for(let key in data){
              // console.log(data[key]);
              data[key].id = key;
              blogsArray.push(data[key]);
            }
            // console.log(blogArray);
            this.blogs = blogsArray;
            // console.log(this.blogs);
          })
          ;
      },
    ```
- 项目打包上线 `npm run bulid`,会生成 dist 文件夹，里面有打包好的 css 文件夹、 js 文件夹和 index.html 首页，接着可以将 dist 文件夹，上传到 服务器 中即可在浏览器中真实访问到项目。
- 总结：
  1. 组件的编写符合 W3C 的规范
  2. 可以使用**自定义指令**来完成特定的功能
  3. 使用**vue的过滤器**来实现特定的功能，搜索功能的实现使用的是 ES6 中的过滤器方法
  4. 页面的跳转使用**vue的路由**实现，局部替换使用`<router-view></router-view>`,使用`<router-link to="url"></router-link>`创建跳转的链接
  5. 实现与数据库交流，数据的获取和数据的提交
    1. 数据的获取 使用 get 方式获取，注意数据的调试过程
    2. 数据的提交，使用 post 方式提交，注意 **CORS** 问题
- 在线翻译的dome
  - 父子组件间的通信
    1. 子传父使用事件，`this.$emit('', value1, value2)`
    2. 父传子使用数据绑定和 props 接受数据
  - 翻译kpi的使用
    - 使用 v-resource 的 post 方法去将翻译的内容发送个 翻译kpi ，随后将返回的结果通过 父传子 渲染到子组件中
  - 样式使用 bootstrap4

- 后台管理系统
  - json-server 实现数据的动态更改
    1. 安装全局 json-server  `npm install -g json-server`
    2. 创建项目目录 初始化 package.json 文件，才可以安装各种插件 `npm init`
    3. 在项目中安装 json-server `npm install json-server --save`
    4. 更改启动的命令 在 package.json 中的 `"test": "echo \"Error: no test specified\" && exit 1"` 改为 自定义的启动命令 `"json-server": "json-server --watch db.json"`
    5. 创建存储数据的动态文件 db.json 
    6. 启动 json-server `npm rum json-server`
  - 数据的增删查改
    - 获取所有用户信息 http://localhost:3000/users
    - 获取 id 为 1 的用户信息 http://localhost:3000/users/1
    - 获取所有公司的信息 http://localhost:3000/companies
    - 获取 公司 id 为 3 的用户信息 http://localhost:3000/companies/3/users
    - 获取公司名为 Micorsoft 的信息 http://localhost:3000/companies?name=Micorsoft
    - 根据多个名字获取公司信息 http://localhost:3000/companies?name=Micorsoft&name=Apple
    - 分页操作 一页获取两条数据 http://localhost:3000/companies?_page=1&_limit=2
    - 数据排序 根据名字排序  asc 升序 desc 降序 http://localhost:3000/companies?_sort=name&_order=desc
    - 获取用户年龄18及18以上的信息 http://localhost:3000/users?age_gte=18
    - 获取用户年龄为18到20之间信息 http://localhost:3000/users?age_gte=18&age_lte=20
    - 搜索用户信息 http://localhost:3000/users?q=18
    - 使用 postman 实现数据的增删改
    - 使用 post 方式 添加数据 添加请求头，说明发送的数据格式 Content-type:application/json ,编写 添加的数据
    - 使用 delete 方式 删除数据 删除用户id为5的信息 http://localhost:3000/users/5
    - 使用 patch 方式 更新数据 用户id为3的 name 值 http://localhost:3000/users/3
    - 使用 jsonplaceholder 的数据，配置 package.json 信息 在 scripts 中 添加 `"json:server": "json-server http://jsonplaceholder.typicode.com/db"`,然后重新启动 `npm run json:server`
  - 数据完成添加后的页面跳转功能
    使用路由进行跳转`this.$router.push('/',query:{alert:'发表博客成功！'})`
- Vuex来管理数据的读取
  - 安装 Vuex `npm install vuex --save`
  - 将数据抽离出来成为单独的数据文件，比如 store.js
    1. 引入 Vue `import Vue from 'vue'`
    2. 引入 Vuex `import Vuex from 'vuex'`
    3. 使用 Vuex `Vue.use(Vuex)`
    4. 导入数据
      ```js
        const store = new Vuex.Store({
          state: {
            products: [{
              name: '马云',
              price: 200
            },
            {
              name: '马化腾',
              price: 140
            },
            {
              name: '马冬梅',
              price: 20
            },
            {
              name: '马蓉',
              price: 10
            },
          ]
          }
        })
      ```
    5. 公布数据 `export const store = new Vuex.Store()`
    6. 在main.js文件中引入 store 数据
      ```js
      // 引入 store 数据
      import {store} from './store/store'
        new Vue({
          store: store,
          router,
          render: h => h(App)
        }).$mount('#app')
      ```
    7. 在组件中使用计算属性来获取数据
      ```js
        computed: {
          product() {
            return this.$store.state.products;
          }
        }
      ```
  - 使用方法来改变数据
    ```js
      // 在组件中修改
      computed: {
        saleProducts() {
          let saleProducts = this.$store.state.product.map(product => {
            return {
              name: '**' + product.name + '**',
              price: product.price / 2
            };
          });
          return saleProducts;
        }
      }
      // 在源头修改 store.js 文件中修改
      getters:{
        saleProducts:(state) => {
          var saleProducts = state.products.map(product => {
            return {
              name: '**' + product.name + '**',
              price: product.price / 2
            };
          });
          return saleProducts;
        }
      }
      // 组件中使用
      computed: {
        saleProducts() {
          return this.$store.getters.saleProducts;
        }
      }
    ```
  - 在 store.js 中使用 mutations 来监视数据改变
    ```js
      mutation:{
        saleProducts: state => {
          return state.products.forEach(product => {
            product.price -= 1;
          });
        }
      }
    ```
  - 处理异步事件，在 store.js 中使用 actions 属性来使用相关的方法
  ```js
    mutations: {
      reducePrice:(state) => {
        state.products.forEach(product => {
          product.price -= 1;
        })
      }
    }
    actions: {
      reducePrice1:(context) => {
        setTimeout(function(){
          context.commit('reducePrice');
        },2000);
      }
    }
    // 使用参数
    mutations: {
      reducePrice:(state, payload) => {
        state.products.forEach(product => {
          product.price -= payload;
        })
      }
    }
    actions: {
      reducePrice1:(context, payload) => {
        setTimeout(function(){
          context.commit('reducePrice', payload);
        }, 2000);
      }
    }
  ```
  - 使用 mapGetters 和 mapActions 同时调用多个方法，减少代码量
  1. 导入相关文件 `import {mapGetters} from 'vuex'` `import {mapActions} from 'vuex'`
  2. 调用相关方法
    ```js
      computed:{
        ...mapGetters([
          'saleProducts'
        ])
      }
      methods:{
        ...mapAction([
          'reducePrice1'
        ])
      }
      
    ```