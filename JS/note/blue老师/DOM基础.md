- 子节点
获取父节点下的第一层所有子节点 `element.childNodes`
子节点的类型：元素节点，属性节点，文本节点
判断子节点的类型，node.nodeType 元素节点为 1，属性节点为 2，文本节点为 3.
只获取元素节点
```javascript
  // 方法一
  function getElenentNodes(element){
    var nodes = element.childNodes;
    var elementNodes = [];
    for(let i = 0;i < nodes.length;i++){
      if(nodes[i].nodeType == 1){
        elementNodes.push(nodes[i]);
      }
    }
    return elementNodes;
  }
  // 方法二
  var elementNodes = element.children;
```
- 父节点
获取父节点 element.parentNode
应用:点击隐藏
```html
<ul id = "ul">
  <li>adffaf <a href="javascript:;">隐藏</a></li>
  <li>a23453 <a href="javascript:;">隐藏</a></li>
  <li>adf34af <a href="javascript:;">隐藏</a></li>
  <li>a53456f <a href="javascript:;">隐藏</a></li>
</ul>
<script>
  var aA = document.getElementsByTagName('a');
  for(let i = 0;i < aA.length;i++){
    aA[i].onclick = function(){
      aA[i].parentNode.style.display = 'none';
    }
  }
</script>
```
- 获取最近定位的父节点
```html
<style>
  #div1 {
    width: 200px;
    height: 200px;
    background-color: #ccc;
    position: relative;
  }
  #div2 {
    width: 100px;
    height: 100px;
    background-color: #ccc;
    position: absolute;
    left: 50px;
    top: 50px;
  }
</style>
  <div class="container">
    <div id="div1">
      <div id="div2">
      </div>
    </div>
  </div>
<script>
  var oDiv2 = document.getElementById('div2');
  console.log(oDiv2.offsetParentNode); // 有定位，输出为 div1 节点, 去除 div1 的定位，输出为 body 节点  
</script>
```
- 首节点和尾结点，首元素节点和尾元素节点
firstChild、firstElementChild
lastChild、lastElementChild
**处理兼容性问题**
```javascript
  function firstElement(element){
    if(!element.firstElementChild){
      return element.firstChild;
    } else {
      return element.firstElementChild;
    }
  }
```
- 兄弟节点
nextSibling、nextElementSibling
previousSibling、previousElementSibling
**处理兼容性问题方式相同**
- 操作元素属性
  - 元素操作方式
    1. oDiv.style.display = 'block';
    2. oDiv.style["display"] = 'block';
  - DOM 操作方式
    1. 获取：getAttribute(名称)
    2. 设置：setAttribute(名称，值)
    3. 删除：removeAttribute(名称)
- DOM元素灵活查找
 - 用 className 获取元素 element.getElementsByClassName()
  ```javascript
    function getClass(oParent, sName){
      var aResult = [];
      var oElements = oParent.getElementsByTagName('*');
      for(let i = 0;i < oElements.length;i++){
        if(oElements[i].className == sName){
          aResult.push(oElements[i]);
        }
      }
      return aResult;
    }
  ```