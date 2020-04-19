通过不同的函数实现不同的用户需求
1. 鼠标移入改变盒子的大小和背景颜色
  ```javascript
    盒子元素.onmouseover = function change() {
      let oDiv = document.getElementById('div1');
      oDiv.style.width = '300px';
      oDiv.style.height = '300px';
      oDiv.style.backgroundColor = 'green';
    }
  ```
2. 通过点击按钮改变引用的CSS文件来改变网页皮肤背景颜色
  ```javascript
  按钮元素.onclick = function skin1() {
    let oLink = document.getElementById('link');
    oLink.href = 'css1.css';
  }
  按钮元素.onclick = function skin2() {
    let oLink = document.getElementById('link');
    oLink.href = 'css1.css';
  }
  ```
  3. 点击按钮显示隐藏文字
  ```javascript
    按钮元素.onclick = function showHide(){
      let oDiv2 = document.getElementById('div2');
      if(oDiv2.style.display === 'none'){
        oDiv2.style.display = 'block';
      } else {
        oDiv2.style.display = 'none';
      }
    }
  ```
  4. 点击按钮改变多个样式（改变引用的CSS的类名）
  ```javascript
    按钮元素.onclick = function changeClassName() {
      let oDiv2 = document.getElementById('div2');
      oDiv2.className = 'box';
    }
  ```
  