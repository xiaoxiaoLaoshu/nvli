- 盒子模型
  1. 标准盒子模型，`box-sizing: content-box;`
  2. IE（怪异）盒子模型, `box-sizing: border-box;`
- 网页布局：先整体再局部，先从上到下，在从左到右
  1. 双飞翼布局:由三列组成，两边固定，中间自适应
    ```html
      <style>
        .left,
        .right,
        .center {
          min-height: 200px;
        }

        .left {
          width: 200px;
          background-color: lightblue;
        }

        .center {
          background-color: violet;
        }

        .right {
          width: 300px;
          background-color: lightgreen;
        }

        /* 双飞翼布局重点 */
        .left,
        .center,
        .right {
          float: left;
        }

        .center {
          width: 100%;
        }

        .center-inner {
          margin-left: 200px;
          margin-right: 300px;
        }

        .left {
          margin-left: -100%;
        }

        .right {
          margin-left: -300px;
        }
      </style>

      <div class="center">
        <div class="center-inner">
          中心区
        </div>
      </div>
      <div class="left"></div>
      <div class="right"></div>
    ```
    + 优点：兼容性好，兼容所有主流浏览器，包括IE6；因为在DOM中 center 在三列结构的最前面，因此可以实现主要内容的优先加载。
  2. 圣杯布局： 有三列组成，两端固定，中间自适应，效果和双飞翼相同
  ```html
      <style>
        .left {
          width: 300px;
          background-color: lightblue;
        }
        
        .center {
          background-color: violet;
        }

        .right {
          width: 200px;
          background-color: lightgreen;
        }

        /* 圣杯布局的关键代码 */
        .left,
        .center,
        .right {
          float: left;
          position: relative;
          min-height: 200px;
        }

        .center {
          width: 100%;
        }
        
        .container {
          padding-left: 300px;
          padding-right: 200px;
        }
        
        .left {
          margin-left: -100%;
          left: -300px;
        }

        .right {
          margin-left: -200px;
          right: -200px;
        }
      </style>
      <div class="container">
        <div class="center">
        </div>
        <div class="left"></div>
        <div class="right"></div>
      </div>
    ```
    + 圣杯布局和双飞翼布局的区别：
      1. 圣杯布局使用**定位 + 浮动**,双飞翼布局使用**浮动**
      2. 圣杯布局左右容器占据的是**父容器**的外边距，双飞翼布局的占据的是**中心区域**的外边距
  3. 侧边栏布局
    1. 两栏布局
      - 左侧固定，右侧自适应
        ```html
        <style>
        * {
          margin: 0;
          padding: 0;
        }
        /* 方法1 采用浮动 */
        .container {
          width: 100%;
          min-height: 300px;
          overflow: auto;
          margin-bottom: 20px;
        }
        .left{
          float: left;
          height: 200px;
        }

        .left {
          width: 200px;
          background-color: lightblue;
        }

        .right {
          background-color: lightgreen;
        }
        /* 方法2：定位的方式来实现布局  */
        .container.absolute {
          width: 100%;
          min-height: 300px;
          position: relative;
          margin-bottom: 20px;
        }

        .container.absolute .left,
        .container.absolute .right {
          position: absolute;
          left: 0;
        }

        .container.absolute .left {
          width: 300px;
          background-color: lightblue;
        }
        
        .container.absolute .right {
          background-color: lightgreen;
          margin-left: 300px;
          right: 0;
        }

        /* 方法3 使用 flex 布局的实现 */
        .container.flex {
          width: 100%;
          min-height: 300px;
          display: flex;
        }

        .container.flex:after {
          content: "";
          display: block;
          clear: both;
        }

        .container.flex .left {
          width: 300px;
          background-color: lightblue;
        }

        .container.flex.right {
          flex: 1;
          background-color: lightgreen;
        }
        </style>
        ```
      - 左侧自适应，右侧固定
    2. 三栏布局