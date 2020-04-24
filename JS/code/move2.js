// 获取非行间样式
function getStyle(obj, name) {
  if (obj.currentStyle) {
    return obj.currentStyle[name];
  } else {
    return getComputedStyle(obj, false)[name];
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
        if(cur != json[attr]){
          bStop = false;
        };
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