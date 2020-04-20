- 创建元素
  - `var oNode = document.createElement('标签名');`创建元素
  - `oParentNode.appendChild(oNode);` 追加元素
- 插入元素
  - oParentNode.inserBefore(oNode, 在谁之前)
  ```html
    <ul id="ul">
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <script>
      var oUl = document.getElementById('ul');
      var aLi = oUl.getElementsByTagName('li');
      var newNode = document.createElement('li');
      oUl.insetBefore(newNode, aLi[0]);
    </script>
  ```
- 删除元素
  - oParentNode.removeChild(oNode)
  ```html
<ul id="ul">
  <li><a href="javascript:;">删除</a></li>
  <li><a href="javascript:;">删除</a></li>
  <li><a href="javascript:;">删除</a></li>
</ul>
<script>
  var oUl = document.getElementById('ul');
  var aLi = oUl.getElementsByTagName('li');
  var aA = document.getElementsByTagName('a');
  for(var i = 0;i < aA.length;i++){
    aA[i].onclick = function(){
      oUl.removeChild(this.parentNode);
    }
  }
</script>
  ```
- 文档碎片
  创建出来的元素没有追加到DOM树中，就成为文档碎片。