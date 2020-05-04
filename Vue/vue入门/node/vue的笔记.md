- 引入 vue 的两种方式
  1. 引用在线资源 `<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`
  2. 引用本地资源 `<script src="../js/vue.js"></script>`
- 使用 vue 操作网页元素
  1. 引入 vue 的相关文件
    1. 引用在线资源 `<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`
    2. 引用本地资源 `<script src="../js/vue.js"></script>`
  2. 设置要操作的元素
    ```html
    <div id="app">
    <!-- 插值操作 -->
      {{message}}
    </div>
    ```
  3. 创建 vue 对象
    ```html
    <script src="../js/vue.js"></script>
    <script>
    const app = new Vue({
      // 绑定 操作元素 根元素
      el:"#app",
      // 执行相关操作
      // date 存储的数据
      data:{
        name: '小敏',
        message: 'Hello,world!',
      }
  });
    </script>
    ```
  4. 绑定 操作元素
  5. 进行相关操作
- 向元素中插入 vue 中的数据
  1. 使用 {{}} 包括 Vue 对象中 date 对象中的属性名。如`{{name}}` 浏览器会自动将包含在**根元素**中里面的变量解析成对应的数据。
- 在元素中使用方法
  1. 声明 vue 中方法
  ```js
    const app = new Vue({
      // 绑定 操作元素 根元素
      el:"#app",
      // 执行相关操作
      // date 对象 存储的数据
      data:{
        name: '小敏',
        message: 'Hello,world!',
        webSite:'http://baidu.com',
        webTag1:"<p>这是段落~~~</p>",
        webTag2:"<p>这是段落~~~</p>",
      },
      // 使用 methods 对象 存储各种方法
      methods:{
        // 有参数 和 使用到自身的存储的数据,有数据返回
        greet: function(time){
          return 'Good' + time + this.name;
        },
        hello: function(){
        // 没有参数 和 没有数据返回
          console.log(this.message);
        },
      },
  });
  ```
  2. 调用vue中的方法
  ```html
  <p>{{greet('evening')}}</p>
  <p>{{hello()}}</p> // 在上面输出 undefined ，此元素为空，没有内容
  ```
- 元素绑定vue中的数据,修改元素中的 CSS 属性值 element.style.attrute = value
  将 vue 对象中的数据动态绑定到元素中
  ```html
  <a v-bind:href="webSite">链接</a>
  ```
- 插入标签，插入到父标签里面， appendChild()
  ```html
  <div v-html="webTag1"></div>
  ```
- vue来执行DOM和BOM事件
  ```html
    <div id="app">
      <!-- 鼠标单击事件 -->
      <button v-on:click="add(1)">加一岁</button>
      <button v-on:click="sub(1)">减一岁</button>
      <!-- 鼠标双击事件 -->
      <button @dblclick="add(10)">加十岁</button>
      <button @dblclick="sub(10)">减十岁</button>
      <p>小敏的年龄是{{age}}</p>
      <div id="canves" @mousemove="showXY">
        <!-- 鼠标移动事件 -->
          {{x}},{{y}}
      </div>
  </div>
  <!-- 使用 JS 的方式 引入 vue 的文件 -->
  <script src="../js/vue.js"></script>
      <script>
      const app = new Vue({
        el:"#app",
        data:{
          age: 18,
          x: 0,
          y: 0
        },
        methods:{
          add: function(num){
            this.age += num;
          },
          sub: function(num){
            if(this.age < num){
              this.age = 0;
            }
            else {
              this.age -= num;
            }
          },
          // 获取 该事件的 某些 属性，使用 参数 event 指定该事件
          showXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
          }
        }
      });
    </script>
  ```
- vue中的事件修饰符来规定事件行为
  - 只产生一次事件
    `@click.once = "add"`
  - 阻止事件
    `@click.stop = "add"`
  - 阻止事件的默认行为
    `<a href="http://www.baidu.com" @click.prevent="">跳转到百度</a>`
  - 键盘修饰符
    1. 键盘输入名字打印名字
    `<input type="text" @keyup="logName">`
    2. 只用按了 ENTRY 键才打印名字
    `<input type="text" @keyup.entry="logName">`
    3. 按了 Alt + Entry 键才打印名字,链式按键值
    `<input type="text" @keyup.alt.entry="logName">`
- 双向数据绑定 具有输入的标签 / input / select / textarea 
  ```html
    <div id="app">
      <input type="text" v-model.lazy="message">
      <p>The message is {{message}}</p>
    </div>
  <!-- 使用 JS 的方式 引入 vue 的文件 -->
    <script src="../js/vue.js"></script>
    <script>
    const app = new Vue({
      el:"#app",
      data:{
        message: '',
      }
  })
    </script>
  ```
- vue 的 ref 的使用
  - 使用 ref 实现数据双向绑定, this.$refs 获取有ref属性的元素 this.$refs.name.value 获取ref属性为name的元素的值
    ```html
      <div id="app">
    <label>姓名：</label>
    <input type="text" ref="name" @keyup="getName">
    <span ref="out1">{{name}}</span>
    <label>年龄：</label>
    <input type="text" ref="age" @keyup="getAge">
    <span>{{age}}</span>
  </div>
  <!-- 使用 JS 的方式 引入 vue 的文件 -->
  <script src="../js/vue.js"></script>
  <script>
    const app = new Vue({
      el: "#app",
      data: {
        name: '',
        age: 18
      },
      methods: {
        getName: function(){
          // this.$refs.name 获取相应的元素 相当于 原生 JS 的 document.querySelector("input")[0]
          // 在 vue 中 不推荐直接操作 DOM 元素，而是采用这样的方式来获取 DOM 元素
          this.name = this.$refs.name.value;
          this.$refs.out1.style.fontSize = 20 + 'px';
        },
        getAge: function(){
          this.age = this.$refs.age.value;
        }
      }
    })
  </script>
    ```
- vue的 watch 属性
  用于监听数据的变化，可用于数据的调试,不推荐使用 watch 处理 业务逻辑，watch是随时监听数据的变化，消耗资源大。
  ```js
    // 监听 name age 数据的变化
    const app = new Vue({
      el: "#app",
      data: {
        name: '',
        age: 18
      },
      methods: {
        getName: function(){
          // this.$refs.name 获取相应的元素 相当于 原生 JS 的 document.querySelector("input")[0]
          // 在 vue 中 不推荐直接操作 DOM 元素，而是采用这样的方式来获取 DOM 元素
          this.name = this.$refs.name.value;
          this.$refs.out1.style.fontSize = 20 + 'px';
        },
        getAge: function(){
          this.age = this.$refs.age.value;
        }
      },
      watch:{
        name(val, oldVal) {
          console.log(val, oldVal);
        },
        age(val, oldVal) {
          console.log(val, oldVal);
        }
      }
    })
  ```
- vue的计算属性
  区别：computed 和 methods，
  1. methods 触发事件，会执行所有的函数，即渲染函数涉及的所有 DOM 元素，浪费资源，里面的函数不一定能要有返回值。
  2. computed 触发事件，只会触发相对应的函数事件，即只渲函数涉及的 DOM ，节省资源，可以用于**需要频繁切换** DOM 的元素,里面的函数一定要有返回值。
- vue 动态改变 CSS 样式
  推荐使用 computed 属性 来改变需要频繁切换的元素的 CSS 样式
  ```html
  <div id="app">
      <!-- 使用 计算属性 改变 CSS 样式 -->
      <!-- <button @click="isActive = !isActive">点击改变字体颜色</button>
      <p :class="changeColor" >这是测试代码！！！！</p> -->
      <!-- 使用 方法 改变 CSS 样式 -->
      <button @click="changeColor()">点击改变字体颜色</button>
      <p :class="{yellow: isActive,black: !isActive}" >这是测试代码！！！！</p>
    </div>
  <!-- 使用 JS 的方式 引入 vue 的文件 -->
    <script src="../js/vue.js"></script>
    <script>
    const app = new Vue({
      el:"#app",
      data:{
        isActive: true,
      },
      methods:{
        changeColor: function(){
          this.isActive = !this.isActive;
        }
      },
      computed:{
        // changeColor: function(){
        //   return {
        //     yellow:this.isActive,
        //     black:!this.isActive
        //   };
        // }
      }
  });
    </script>
  ```
- vue 的v-if v-else-if v-else 和 v-show 指令
  从元素节点上看，v-if v-else-if v-else 是替换 元素节点，每种情况只出现一个元素节点。v-show 只是将元素的 display 属性从 block 改为 none，该属性一直存在。
  ```html
    <div id="app">
      <button @click="error = !error">Error</button>
      <button @click="success = !success">Success</button>
      <div v-if="error">网络连接错误：404</div>
      <div v-else-if="success">网络连接成功：200</div>
      <div v-else>默认连接</div>
      <div v-show="error"> v-show 默认连接</div>
    </div>
  <!-- 使用 JS 的方式 引入 vue 的文件 -->
    <script src="../js/vue.js"></script>
    <script>
    const app = new Vue({
      el:"#app",
      data:{
        error: false,
        success: false
      },
  })
  </script>
  ```
- vue中多个vue实例及相互操作
  ```html
  <div id="app1">
      <h1>{{title}}</h1>
      <p>{{greet}}</p>
      <p v-if="show">{{message}}</p>
      <button @click="show = !show">showHello</button>
    </div>
    <div id="app2">
      <h2>{{title}}</h2>
      <p>{{greet}}</p>
      <button @click="changeOne">changeOne</button>
    </div>
  <!-- 使用 JS 的方式 引入 vue 的文件 -->
    <script src="../js/vue.js"></script>
    <script>
    const app1 = new Vue({
      el:"#app1",
      data() {
        return {
          title: "This is app one",
          message: "hello,world",
          show: false
        };
      },
      methods: {
      },
      computed: {
        greet() {
          return "This is app one computed";
        }
      }
  });
  const app2 = new Vue({
      el:"#app2",
      data() {
        return {
          title: "This is app two"
        }
      },
      methods: {
        // 操作 另一个 vue 实例 的数据
        changeOne() {
          app1.title = "This is app tow change app one!"
        }
      },
      computed: {
        greet() {
          return "This is app one computed";
        }
      }
  });
    </script>
  ```
- 初识全局组件
    ```js
    // 声明全局组件 Vue.component("component.name", {})
    Vue.component("greeting", {
      template:`
        <p>
          {{name}}这是在学习Vue的组件开发，全局组件。
          <button @dblclick="changeName">改名</button>
          </p>
      `,
      // 这里的 data 必须是一个函数，且返回值一定是 对象。
      data() {
        return {
          name: '小敏，'
        }
      },
      methods: {
        changeName() {
          this.name = "小王，"
        }
      }
    });
    const app1 = new Vue({
      el:"#app1",
  });
  const app2 = new Vue({
      el:"#app2",
  });
    ```
- 获取/提交请求数据,fetch 方法获取/提交
  - ES6中提供的一种提交、获取数据的方法
    - 使用 fetch 方法通过 get 方式获取数据
    ```js
      // fetch api 请求接口
        // 使用 get 获取数据
        const todos = fetch("http://jsonplaceholder.typicode.com/todos").then(res => {
          return res.json();
        })
        .then(todos => {
          this.todos = todos;
        });
    ```
    - 使用 fetch 方法通过 post 方式提交数据
    ```js
      onSubmit() {
          fetch("http://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            body: JSON.stringify(this.todo),
            headers: {
              "Content-type":"application/json"
            }
          })
          .then(res => {
            return res.json();
          })
          .then(todo => {
            // console.log(todo);
            this.todos.unshift(todo);
          })
        }
      }
    ```
- 获取/提交请求数据，使用 axios 获取/提交数据
  - 使用 js 文件设置一个 axios 的全局对象 `<!-- 使用 CDN 方式引入 Axios 对象 -->
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>`
  - 使用 get 方式获取数据
  ```js
    // 使用 Axios 方式 获取数据
        axios.get("http://jsonplaceholder.typicode.com/todos").then(res => {
          this.todos = res.data;
          // console.log(res.data);
          
        })
  ```
  - 使用 post 方式提交数据
  ```js
    onSubmit() {
          axios.post("http://jsonplaceholder.typicode.com/todos", this.todo).then(res => {
            // console.log(res.data);
            this.todos.unshift(res.data);
          })
        }
      }
  ```
- vue的V-cli脚手架的安装
  1. 安装 nodejs 环境
  2. 安装 V-Cli 脚手架 `npm install -g @vue/cli` 查看是否安装成功,查看V-Cli 脚手架版本  `vue --version`
  3. 提高 npm 的下载速度，改用 cnpm `npm install -g cnpm --registry=https://registry.npm.taobao.org`  从国内的淘宝服务器中获取软件的更新或下载
- 使用脚手架创建项目
  1. 创建一个新项目 `vue create hello-world`
  2. 配置相关配置文件
- vue的结构目录
  1. node_modules 很重要，缺少了无法启动项目，缺少的安装命令`cnpm install`
  2. public 网页图标，系统入口文件
  3. src  整个开发中使用的目录 ./assets 存放静态资源（图片等） ./component 存放组件 App.Vue 根组件 main.js 逻辑文件 将根组件和入口文件联系起来
  4. gitignore  忽略项目文件，不上传较大的数据到Git
  5. babel.config.js ES6转换为ES5编辑器
  6. package.json 配置文件，指定项目的启动方式，项目依赖插件
  7. README.md 包含一些基本的命令，启动项目，打包项目
- 组件的结构
    ```html
    // html 结构部分
        <template>
          // 只能有一个根标签
        <div class="hello">
          <h1>{{ msg }}</h1>
        </div>
      </template>
    <script>
      // js 的逻辑/行为部分
    export default {
      name: 'HelloWorld',
      props: {
        msg: String
      }
    }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    // css 的样式部分
    <style scoped>
    h3 {
      margin: 40px 0 0;
    }
    </style>
    ```
- 组件嵌套
  + 全局组件使用，在 **main.js** 中操作
    1. 引入组件 `import User from './components/User.vue'`
    2. 注册全局组件 `Vue.component("Users", User)`
    3. 模板中使用 全局组件 `<user></user>`
  + 局部组件使用，在 **父组件** 中操作
    1. 在 父组件 中引入 子组件 `import User from './components/User.vue'`
    2. 注册子组件 
      ```js
        export default {
          name: 'App',
          components: {
            HelloWorld,
            User
          }
        }
      ```
    3. 模板中调用 子组件 `<user></user>`
  + 在 子组件中使用 遍历 必须绑定 key 值(唯一值，可以使用 ID 或数组的 index)，不然会报错。`<ul><li v-for="(user,index) in users" :key="index">{{user}}</li></ul>`
- 组件中的 CSS 控制
  + 全局生效 去除 `<style></style>` 的 scoped 属性
  + 组件内生效，添加 `<style></style>` 的 scoped 属性
  + 组件内生效的原理：添加了 scoped 属性，会将组件内 css 给定一个标记，然后让根组件内的使用标记的CSS样式，即所有子组件只使用自己标记的 CSS 样式 
-  父组件传值给子组件
  1. 在父组件中声明数据，将数据绑定给子组件 `<user :users="users"></user>` **等号左边时，给子组件的数据名，右边的父组件中需要绑定的数据**
  2. 子组件中接受父组件的数据
    ```js
      export default {
        // 使用 props 属性(数组方式)接受 父组件的数据，里面填写 父组件传来的 数据名
        //props:["users1", "users2"],
        //  使用 props 属性（对象方式）接受 父组件的数组, 更加规范，具有数据检测功能
        props: {
          users1: {
            type: Array,
            // 要求 父组件 必须传送数据
            required: true
          },
          users2: {
            // 要求 父组件 必须传送数据
            type: String,
            required: true
          }
        }
        data(){
          return {};
        },
        methods: {
          
        }
      };
    ```
- 属性传值
  1. 传引用（引用类型，对象 数组）
    父传子的引用，子改变父的值，会引起其他子组件引用会同步改变
  2. 传值 （基本数据类型 string number boolean）
- 数据，子传父，注册事件
  1. 子组件中注册事件
    ```js
        methods: {
      changeTitle(){
        // 注册事件 参数1：事件名称 参数2...: 值
        this.$emit("titleChange" , "Header 改变了title", "参数2")
      }
    }
    ```
  2. 父组件中接受事件，并接受传递过来的值
    ```html
    <!-- @子事件名称 = 父事件名称 -->
    <app-header :title="title" @titleChange="updataTitle"></app-header>
    methods: {
      // 使用参数来 接受子组件传过来的数据
      updataTitle(updataTitle1 , updataTitle2) {
        this.title1 = updataTitle1;
        this.title2 = updataTitle2;
      }
    }
    ```
- 生命周期（钩子函数）
  1. beforeCreate 数据还没有渲染
  2. created 实例已经创建，可以监听数据，但是网页还未渲染出组件 
  3. beforeMouted 页面准备要挂载，页面还没有渲染组件
  4. mounted  元素已经挂载
  5. beforeUpdate 组件数据修改前，执行
  6. updated  数据更新后
  7. beforeDestroy 组件销毁前
  8. destroyed  组件已经销毁了，
  ```js
    beforeCreate() {
    alert("这时实例还没有被创建，所以你无法知道data，也不能用watch监听。");
  },
  created() {
    alert("这时实例已经被创建，可以得到data，也可以用watch，但是页面还是空白的");
  },
  beforeMount() {
    alert("页面挂载前，此时页面依然是空白的，这时render函数首次被调用。");
  },
  mounted() {
    alert('页面挂载了，这时你可以看到页面的内容，也可以访问到dom');
  },
  beforeUpdate() {
    alert("数据更新前，也就是虚拟DOM打补丁之前。");
  },
  updated() {
    alert("数据已经更新完毕");
  },
  beforeDestroy() {
    alert("页面离开之前被调用，清除定时器，或者三方的一些DOM结构");
  },
  destroyed() {
    alert("实例已经完全被销毁");
  }
  ```
- 插槽 通过插槽分发内容
  + 父组件想要在子组件中使用 html 标签，标签通过 插槽(slot) 分发
  ```html
    <!-- 父组件 -->
    <form-helper>
      <h2>这个是 title</h2>
      <p>这个是段落</p>
    </form-helper>
    <!-- 子组件 -->
    <div class="hello">
      <h1>这是插槽的使用</h1>
      <slot></slot>
    </div>
    <!-- 详细分发 -->
    <!-- 父组件命名 -->
    <form-helper>
      <h2 slot="title">这个是 title</h2>
      <p slot="text">这个是段落</p>
    </form-helper>
    <!-- 子组件 -->
    <div class="hello">
      <slot name="text"></slot>
      <h1>这是插槽的使用</h1>
      <slot name="title"></slot>
    </div>
  ```
  - 传递标签的样式规定，双方都可以。但是为了符合 结构表现行为 的w3c规定，推荐在父组件中规定 css 样式 
  - 属性调用，只能在父组件中调用
- 动态组件和缓存
  - 使用 `<component :is="component"></component>` 来动态改变组件
  + 进行频繁切换组件时，保存组件中的原来输入的信息，使用 keep-alive 缓存下输入的信息 
