// 获取非行间样式
function getStyle(obj, name){
  if(!obj.currentStyle[name]){
    return getComputedStyle(obj, false)[name];
  } else {
    return obj.currentStyle[name];
  }
}
// 数组的数值排序
sort(function(n1, n2){
  if(n1 < n2) {
    return -1;
  } else if(n1 > n2) {
    return 1;
  } else {
    return 0;
  }
})
// 两位以下数值转为字符串的补零
function toDou(num){
  if(num < 10){
    return '0' + num;
  } else {
    return '' + num;
  }
}
// 完美运动框架
// 使用函数的例子 startMove(oDiv, {"width": 100, "height": 100});
function startMove(obj, json, fnEnd) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    // 速度的取值为 目标 减去 现在值 将较为相似的部分封装称为参数 attr
    var bStop = true; // 假设:所有的值都已经到了
    for (attr in json) {
      var cur = 0;
      if (attr == 'opacity') {
        cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        var speed = (json[attr] * 100 - cur) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if(cur != (json[attr] * 100)){
          bStop = false;
        };
          obj.style.opacity = (cur + speed) / 100;
      } else {
        cur = parseInt(getStyle(obj, attr));
        var speed = (json[attr] - cur) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
          obj.style[attr] = cur + speed + 'px';
      }
    }
    if(bStop) {
      clearInterval(obj.timer);
      if(fnEnd){
        fnEnd();
      }
    }
  }, 30);
}
// 获取鼠标坐标
function getPos(ev) {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  return {
    x: ev.clientX,
    y: ev.clientY + scrollTop
  };
};
// 事件绑定函数
function myAddEvent(obj, evName, fn){
  if(obj.attachEvent){
    obj.attachEvent('on' + evName, fn);
  } else {
    obj.addEventListener(evName, fn, false);
  }
}
// ajax 函数
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