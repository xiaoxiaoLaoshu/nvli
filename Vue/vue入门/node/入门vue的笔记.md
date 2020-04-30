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
- vue的计算属性
  区别：computed 和 methods，
  1. methods 触发事件，会执行所有的函数，即渲染函数涉及的所有 DOM 元素，浪费资源
  2. computed 触发事件，只会触发相对应的函数事件，即只渲函数涉及的 DOM ，节省资源，可以用于需要频繁切换 DOM 的元素
- vue 动态改变 CSS 样式