##### JS的函数
函数模板 ` function 函数名() { 函数体 } `
函数的形参：提高代码的重用性。 
```javascript
  function show(num){
    alert('num');
  }
  show(12);
  function sum(a, b){
   console.log(a + b);
  }
  sum(1, 2);
```
函数先声明再使用，函数提升。
在函数中的两种操作HTML元素属性的方法
```javascript
  let oTxt = document.getElementById('div1');
  // 第一种操作属性的方法
  oTxt.style.title = '提示文字';
  // 第二种操作属性的方法
  oTxt.style["title"] = '提示文字';
```