- Ajax基础
  - 异步获取服务器的数据
 1. 创建Ajax对象
  - 兼容性处理
    ```javascript
      if(window.XMLHttpRequset){
        // 非 IE6
        var oAjax = new XMLHttpRequest();
      } else {
        // FF chrom IE7、8、9
        var oAjax = new ActiveXOject('Microsoft.XMLHTTP');
      }
    ```
 2. 连接服务器
  ```javascript
    //oAjax.open(请求方法， 文件名， 是否异步传输);
    // 生活中 同步 多件事一起做 异步 一件件事接着做 计算机与之相反
    oAjax.open('GET', 'a.txt', true);
  ```
 3. 发送请求
 ` oAjax.send();`
 4. 接收返回
 ```javascript
  oAjax.onreadystatechange = function(){
    // oAjax.readystate 浏览器和服务器进行到哪一步了
    // 0 （未初始化） 还没有调用 open() 方法
    // 1 (载入) 已调用 send()  方法，正在发送请求
    // 2 (载入完成) send() 方法完成，已收到全部响应内容
    // 3 (解析) 正在解析响应内容
    // 4 (完成) 响应内容解析完成，可以在客户端调用

    // oAjax.status 200 接受数据成功。
    if(oAjax.readystate == 4){
      if(oAjax.status == 200){
        alert('成功'+ oAjax.responseText);
      } else {
        alert(oAjax.status);
      }
    }
  }
 ```