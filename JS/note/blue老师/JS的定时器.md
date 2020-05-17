##### 定时器
- 定时器的开启
1. setInterval() 间隔型 
```javascript 
setInterval(function(){
  console.log('hello,world');
},1000);
``` 
输出为 每隔1秒输出 hello，world
2. setTimeout() 延时性
```javascript 
setTimeout(function(){
  console.log('hello,world');
},1000);
``` 
输出为 1秒后输出 hello，world
定时器的作用是在一定的时间后，执行代码
- 定时器的关闭
1. clearInterval()
```javascript
  var oBtn1 = document.getElementById('btn1');
  var oBtn2 = document.getElementById('btn2');
  var timer = null;
  oBtn1.onclick = function() { //开启定时器
      timer = setInterval(function(){
      console.log('hello,world');
    }, 1000);
  }
  oBtn2.onclick = function() {
    clearInterval(timer);  // 关闭定时器
  }
```
2. clearTimeout()
##### Date对象
任务：创建数字时钟
```javascript
// 构造函数来补充不足两位数的零
      function toDou(num) {
        if (num < 10) {
          return '0' + num;
        } else {
          return '' + num;
        }
      }
      var aImg = document.getElementsByTagName('img');
      // 网页刚出现显示为00:00：00现象
      function tick(){
        var oDate = new Date();
        var str = '';
        str = toDou(parseInt(oDate.getHours())) + toDou(parseInt(oDate.getMinutes())) + toDou(parseInt(oDate
          .getSeconds()));
        for (let i = 0; i < aImg.length; i++) {
          // 使用 string 的 charAt 方法，兼容所有浏览器
          aImg[i].src = "images/" + str.charAt(i) + ".png";
        }
      }
      // 使用间隔定时器，不断刷新图片的地址，达到时钟的计时效果
      setInterval(tick, 1000);
      // 解决网页刚出现显示为00:00：00现象
      tick();
```
##### 延时提示框
 - 原来的方法
  - 移入显示，移出隐藏
 - 移出延时隐藏
  - 移入下面的 Div 后，还是隐藏
 - 简化代码
  - 合并两个相同的 mouseover 和 mouseout
  ```javascript
    var oDiv1 = document.getElementById('div1');
    var oDiv2 = document.getElementById('div2');
    var timer = null;
  
    oDiv1.onmouseover = oDiv2.onmouseover = function(){
      clearTimeout(timer);
      oDiv2.style.display = 'block';
    };
    oDiv1.onmouseout = oDiv2.onmouseout = function(){
      timer = setTimeout(function(){
          oDiv2.style.display = 'none';
      }, 500);
    }
  ```
##### 无缝滚动
- 物体移动基础
  - 让 Div 一动起来
  - offerLeft 的作用
  - 用定时器让物体连续移动
- 移动原理
 - 让 ul 移动
- 复制 li
 - innerHTML 和 +=
 - 修改 ul 的 width
- 滚动过界后，重设位置
  - 判断过界
- 改变滚动方向
  - 修改 speed
  - 修改判断条件
- 鼠标移入暂停
  - 移入关闭定时器
  - 移出重新开启定时器
```javascript
// 无缝滚动
    var oUl = document.getElementsByTagName('ul');
    var oLi = oUl[0].getElementsByTagName('li');
    var oC = document.getElementsByClassName('container1')
    oUl[0].innerHTML += oUl[0].innerHTML;
    oUl[0].style.width = oLi[0].offsetWidth * oLi.length + 'px';

    function move() {
      // 向左走 - speed 
      if (oUl[0].offsetLeft < -oUl[0].offsetWidth / 2) {
        oUl[0].style.left = '0';
      }
      // 向右走 + speed
      if (oUl[0].offsetLeft > 0) {
        oUl[0].style.left = -oUl[0].offsetWidth / 2 + 'px';
      }
      oUl[0].style.left = oUl[0].offsetLeft + 2 + 'px';
    }
    var timer1 = null;
    // 移入 停止滚动
    oC[0].onmouseover = function () {
      clearInterval(timer1);
    }
    // 移出开始滚动
    oC[0].onmouseout = function () {
      timer1 = setInterval(function () {
        move();
      }, 30);
    }
```