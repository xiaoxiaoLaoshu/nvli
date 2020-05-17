- 表格应用
  - 获取表格
  - 表格的简便操作
  获取表格主体 tBodies 获取表格行 rows 获取表格列 cells 获取表头 tHead 获取表尾 tFoot
  ```javascript
  // 获取表格
    var oTable = document.getElementsByTagName('table')[0];
    // 获取表格中列的内容
    var oTd = oTable.tBodies[0].rows[0].cells[1];
    console.log(oTr.innerHTML);
  ```
  - 应用 隔行变色，鼠标选中高亮显示
  ```javascript
    // 隔行变色
    var oTr = oTable.tBodies[0].rows;
    // 鼠标移出后恢复原有的背景色
    var oldColor = '';
    for(var i = 0;i < oTr.length;i++){
      if(i%2==0){
        oTr[i].style.backgroundColor = '#ccc';
      } else {
        oTr[i].style.backgroundColor = '';
      }
      // 鼠标选中高亮显示
      oTr[i].onmouseover = function(){
        oldColor = this.style.backgroundColor ;
        this.style.backgroundColor = 'yellow';
      };
      // 鼠标移出恢复成原来背景色
      oTr[i].onmouseout = function(){
        this.style.backgroundColor = oldColor;
      };
    }
  ```
  - 表格添加、删除:注意找到 父节点 
  ```javascript
    // 添加表格数据
    // 获取ID总数
    var nId = oTr.length;
    var oName = document.getElementById('txt1');
    var oScore = document.getElementById('txt2');
    var oBtn = document.getElementById('btn');
    oBtn.onclick = function () {
      // 创建表格行节点
      var oTr = document.createElement('tr');
      // 创建表格 ID 列节点
      var oTd = document.createElement('td');
      // 添加 ID数据
      oTd.innerHTML = ++nId;
      // 追加入tbody中
      oTable.tBodies[0].appendChild(oTr);
      // 创建表格 姓名 列节点
      var oTd = document.createElement('td');
      // 添加 姓名 数据
      oTd.innerHTML = oName.value;
      // 追加入tbody中
      oTable.tBodies[0].appendChild(oTr);
      // 创建表格 成绩 列节点
      var oTd = document.createElement('td');
      // 添加 ID数据
      oTd.innerHTML = oScore.value;
      // 追加入行节点
      oTr.appendChild(oTd);
      // 追加入tbody中
      oTable.tBodies[0].appendChild(oTr);
       // 删除表格数据
      var oA = document.getElementsByTagName('a');
      for (var i = 0; i < oA.length; i++) {
        oA[i].onclick = function () {
          // 父元素是 tbody 节点
          oTable.tBodies[0].removeChild(this.parentNode.parentNode);
        }
      }
    }
  ```
  - 搜索 忽略大小写 模糊搜索 多关键字 split
  ```javascript
  // 搜索
  oBtn.onclick = function () {
      for(var i = 0;i < oTr.length;i++){
        if(oTr[i].cells[1].innerHTML == oName.value){
          oTr[i].style.backgroundColor = 'red';
        }
      }
    }
  // 忽略大小写
  oBtn.onclick = function () {
      for (var i = 0; i < oTr.length; i++) {
        // 表单数据 转换为 大写
        var tStr = oTr[i].cells[1].innerHTML.toUpperCase() ;
        // 搜索数据 转换为 大写
        var sStr = oName.value.toUpperCase();
        if (tStr== sStr) {
          oTr[i].style.backgroundColor = 'red';
        }
      }
    }
    // 模糊搜索
    oBtn.onclick = function () {
      for (var i = 0; i < oTr.length; i++) {
        // 表单数据
        var tStr = oTr[i].cells[1].innerHTML.toUpperCase() ;
        // 搜索数据
        var sStr = oName.value.toUpperCase();
        // 使用字符串的 search 方法判断
        if (tStr.search(sStr) != -1) {
          oTr[i].style.backgroundColor = 'red';
        }
      }
    }
    // 多关键词
    oBtn.onclick = function () {
      for (var i = 0; i < oTr.length; i++) {
        // 表单数据
        var tStr = oTr[i].cells[1].innerHTML.toUpperCase() ;
        // 搜索数据
        var sStr = oName.value.toUpperCase();
        // 使用 字符串 的 split 方法 分割成数组
        var aStr = sStr.split(' ');
        for(var j = 0;j < aStr.length;j++)
        if (tStr.search(aStr[j]) != -1) {
          oTr[i].style.backgroundColor = 'red';
        }
      }
    }
  ```
  - 排序
    - li 排序 元素-转换-排序-追加  appendChild
    ```javascript
      oBtn.onclick = function () {
      var arr = [];
      // 转换为数组
      for(var i = 0;i < oTr.length;i++){
        arr.push(oTr[i]);
      }
      // 改造 数组的排序方法
      arr.sort(function(tr1, tr2){
        var n1 = parseInt(tr1.cells[0].innerHTML);
        var n2 = parseInt(tr2.cells[0].innerHTML);
        return n1 - n2;
      });
      // 追加排序后的节点
      for(var i = 0;i < arr.length;i++){
        oTable.tBodies[0].appendChild(arr[i]);
      }
    }
    ```
- 表单应用
  - 表单基础
    - 获取表单数据
  - 表单事件
   - onsubmit() 表单提交事件
   - onrest() 表单重置事件