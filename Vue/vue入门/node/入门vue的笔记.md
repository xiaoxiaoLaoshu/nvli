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
  2. 安装 V-CLI 脚手架 `npm install -g @vue/cli` 查看是否安装成功,查看V-Cli 脚手架版本  `vue --version`
  3. 提高 npm 的下载速度，改用 cnpm `npm install -g cnpm --registry=https://registry.npm.taobao.org`  从国内的淘宝服务器中获取软件的更新或下载
- 使用脚手架创建项目
  1. 创建一个新项目 `vue create hello-world`
  2. 配置