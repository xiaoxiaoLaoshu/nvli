function ajax(url, fnSucc, fnFaild) {
  // 1， 创建Ajax对象
  // 兼容性判断 非IE6 使用 XMLHttpRequest() IE6 使用 ActiveXobjet("Microsoft.XMLHTTP")
  if (window.XMLHttpRequest) {
    // 变量和属性
    // 直接引用 未定义 的变量会报错
    // 直接引用 未定义 的属性 默认为 undefined，所以上面使用的是 全局对象 window 的 XMLHttpRequest 属性
    var oAjax = new XMLHttpRequest();
  } else {
    var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
  }
  // 2. 连接服务器
  // open(请求方法, 文件名, 异步传输) true 异步 false 同步
  // 同步 多件事一起 异步 一件一件来 计算机 相反
  oAjax.open('GET', url, true);
  // 3. 发送请求
  oAjax.send();
  // 4. 接受返回
  oAjax.onreadystatechange = function(){
    // oAjax.readyState 浏览器和服务器，进行到哪一步了
    // 0 （未初始化） 还没有调用 open() 方法
    // 1 （载入） 已调用 send() 方法，正在发送请求
    // 2 （载入完成） send() 方法完成，已收到全部响应内容
    // 3 （解析） 正在解析响应内容
    // 4 （完成） 响应内容解析完成，可以在客户端调用了
    if (oAjax.readyState == 4) { //读取成功
      if (oAjax.status == 200) {
        fnSucc(oAjax.responseText);
      } else {
        fnFaild(oAjax.status);
      }
    }
  };
};