JS是什么？给网页添加交互功能，通过用户操作（JS事件）修改网页样式
* 编写JS代码的流程
  1. HTML布局：先写出HTML结构和CSS样式
  2. 属性（用户操作）：由用户操作确定要修改HTML元素的属性
  3. 事件：由用户操作确定相应的JS事件
  4. 写出JS代码：在事件中，用JS代码来实现HTML元素的样式修改
**鼠标提示框**
``` javascript
  onmouseover = function() { display = 'block';}
  onmouseout = function() { display = 'none';}
```