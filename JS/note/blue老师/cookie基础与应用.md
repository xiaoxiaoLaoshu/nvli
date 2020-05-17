- cookie的用途
  - 页面用来保存信息
  - cookie的特性
    - 同一网站使用相同的 cookie
    - 数量、大小有限
    - 过期事件
- JS中使用 cookie `document.cookie`
```javascript
  //设置 cookie 的值 
  document.cookie='user=xiaomin';
  document.cookie='pass=123'; //再次赋值是添加值
  //  设置 cookie 的过期时间
  // 获取时间 
  var oDate = new Date();
  // 获取七天后的日期
  oDate.setDate(oDate.getDay()+7);
  // 设置 过期时间
  document.cookie="user=xiaomin;expires="+limitDate;
```
- 封装成函数
```javascript
  function setCookie(name, value, iDay){
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + '=' + value + ';expries' + oDate; 
  }
```
- 读取cookie
```javascript
  function getCookie(name){
    var arr1 = document.cookie.split(';');
    for(var i = 0;i < arr1.length;i++){
      var arr2 = arr1[i].split('=');
      if(arr2[0] == name){
        return arr2[1];
      }
    }
    return '';
  }
```
- 删除cookie
```javascript
  function removedCookie(name){
    setCookie(name, 1, -1);
  }
```