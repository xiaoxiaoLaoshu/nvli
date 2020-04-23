// 获取非行间样式
function getStyle(obj, name) {
  if (obj.currentStyle) {
    return obj.currentStyle[name];
  } else {
    return getComputedStyle(obj, false)[name];
  }
}
// 链式运动框架
function startMove(obj, attr, iTarget, fnEnd) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    // 速度的取值为 目标 减去 现在值 将较为相似的部分封装称为参数 attr
    var cur = 0;
    if(attr == 'opacity'){
      cur = Math.round(parseFloat(getStyle(obj, attr))*100);
      var speed = (iTarget * 100 - cur)/6;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      if(cur == (iTarget * 100)){
        clearInterval(obj.timer);
        // 链式运动的关键在于是否有函数的传入
        if(fnEnd) fnEnd();
      } else {
        obj.style.opacity = (cur + speed) / 100;
      } 
    } else {
      cur = parseInt(getStyle(obj, attr));
      var speed = (iTarget - cur)/6;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      if(cur == iTarget){
        clearInterval(obj.timer);
        // 链式运动的关键在于是否有函数的传入
        if(fnEnd) fnEnd();
      } else {
        obj.style[attr] = cur + speed + 'px';
      }
    }
  }, 30);
}