- BFC（块级结构上下文）及其应用
  -  如何触发
    1. HTML 根元素
    2. float 的值不为 none
    3. display 的值为 inline-block、table-cell、flex
    4. position 的为 absolute、fixed
    5. overflow 的值不为 visible
  - 特性
    - 可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素
  - 应用
    1. 解决元素垂直外边距重叠问题
    2. 清楚浮动，给父元素造成的高度塌陷问题
    3. 阻止元素被浮动元素覆盖问题，可以实现两栏自适应布局
- 怎么让一个  div 水平垂直居中
  - 子元素给定 固定的宽和高
    1. 使用 定位 + margin
      ```css
        .container1 {
          position: relative;
          height: 200px;
          /* overflow: hidden; */
          background-color: lightblue;
          margin-bottom: 10px;
        }
        /* 子元素拥有 宽度和高度 */
        /* 方法 1 */
        .child1 {
          width: 100px;
          height: 100px;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -50px;
          margin-top: -50px;
          background-color: crimson;
        }
        /* 方法 3 */
        .container3 {
          position: relative;
          height: 200px;
          background-color: lightblue;
          margin-bottom: 10px;
        }

        .child3 {
          width: 100px;
          height: 100px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          background-color: crimson;
        }
      ```
    2. 使用 定位　+ transform
    ```css
      .container2 {
      position: relative;
      height: 200px;
      background-color: lightblue;
      margin-bottom: 10px;
      }

      .child2 {
        width: 100px;
        height: 100px;
        position: absolute;
        background-color: crimson;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    ```
  - 子元素没有给定 固定的宽和高
    1. 使用 定位 + transform
      ```css
        .container7 {
          height: 200px;
          background-color: lightblue;
          margin-bottom: 10px;
          position: relative;
        }

        .child7 {
          width: 20%;
          height: 80%;
          background-color: crimson;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      ```
    2. 使用 flex 盒子模型
      ```css
        .container4 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
          background-color: lightblue;
          margin-bottom: 10px;
        }

        .child4 {
          width: 20%;
          height: 80%;
          background-color: crimson;
        }
      ```
    3. 使用 grid 盒子模型
      ```css
        .container5 {
          height: 200px;
          background-color: lightblue;
          display: grid;
          margin-bottom: 10px;
        }

        .child5 {
          justify-self: center;
          align-self: center;
          width: 20%;
          height: 80%;
          background-color: crimson;
        }
      ```
    4. 使用 flex 盒子模型 + margin
    ```css
      .container6 {
        height: 200px;
        background-color: lightblue;
        margin-bottom: 10px;
        display: flex;
      }

      .child6 {
        width: 20%;
        height: 80%;
        background-color: crimson;
        margin: auto;
      }
    ```
- 分析比较 opacity：0、visibility：hidden、display：none优劣和适用场景
  - 区别
    1. display：none 会让元素完全从渲染树中消失，渲染的时候不占据任何空间，不能点击。
    2. visibility：hidden 不会让元素从渲染树中消失，渲染的元素继续占据空间，只是内容不可见，不能点击。
    3. opacity：0 不会让元素从渲染树中消失，渲染元素继续占据空间，只是内容不可见，可以点击。
    - 继承 display：none 和 opacity：0是非继承属性，子孙节点消失由于元素从渲染树中消失造成，通过修改子孙节点属性无法显示。 visibility：hidden 是继承属性，子孙节点消失由于继承了 hidden，通过设置 visibility：visible，可以让子孙节点显示。
    - 性能 display：none 修改元素会造成文档回流，读屏器不会读取 display：none 元素内容，性能消耗较大； visibility： hidden 修改元素是会造成本元素的重绘，性能消耗较少，读屏器会读取 visibility：hidden 元素内容；opacity：0 修改元素会造成重绘，性能消耗较少。
    - 联系：他们都能让元素不可见。
- 已知如下代码，如何修改才能让图片宽度为 300px ？
  1. 方法1：
  ```css
    img {
      /* 方法 1 */
      /* max-width: 300px; */
      /* 方法 2 */
      /* transform: scale(0.625, 1); */
      /* 方法 3 */
      padding: 0 90px;
      box-sizing: border-box;
      /* 方法 4 */
      /* zoom: 0.625; */
    }
  ```