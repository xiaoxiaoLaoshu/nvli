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