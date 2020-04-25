##### 函数返回值
- 返回函数结果
- 可以没有 return
```javascript
  function sum(a, b){
    return a + b;
  }
  console.log(sum(1, 3));
  function sum(){
    return;
  }
  console.log(sum());
```
输出为 3 undefined，没有 return 或 没有输出，则输出为 undefined。
##### 不定参
```javascript
  function sum(...rest){
    var sum1 = 0;
    for(let i = 0;i < rest.length;i++){
      sum1 += rest[i];
    }
    return console.log(sum1);
  }
  sum(1);
  sum(2, 3);
  sum(1, 2, 3);
```
输出为 1 5 6.
##### 取非行间样式
```
div {
  width: 100px;
  height: 120px;
}
#div1 {
  width: 120px;
  height: 100px;
  background-color: skyblue;
}
<div id="div1">小明</div>
```
```javascript
  var oDiv = document.getElementById('div1');
  console.log(oDiv.style.width);  //行内样式为空，无法获取到行内样式
  console.log(oDiv.currentStyle['width']); // 在 FF 谷歌 下使用
  console.log(getCompletedStyle(oDiv, false)['width']) // 在 IE 下使用
```
封装成函数
```javascript
  function getStyle(obj, name){
  if(obj.currentStyle){
    // 在 IE 下使用
    return obj.currentStyle[name];
  } else {
    // 在 FF 谷歌浏览器下使用
    return getComputedStyle(obj, false)[name];
  }
}
```
**注意**上面的函数不能获取复合样式的值，如 background、border、position
##### 数组
- 创建方法
1. `var a = [1, 2, 3];`
2. `var a = new Array(1, 2, 3);`
- length 的使用
```javascript
  var a = [1, 2, 3, 4, 5];
  a.length = 3;
  console.log(a);
  a.length = 5;
  console.log(a);
  // 数组的循环输出
  for(var i = 0;i < a.length;i++){
    console.log(a[i]);
  }
```
输出为 (3)[1, 2, 3] (5)[1, 2,empty * 3]
- 数组基本方法
1. 尾部添加 push(param)`var arr = [1, 2, 3]; arr.push(4); console.log(arr);` 输出为 （4） [1, 2, 3, 4]
2. 尾部删除 pop() `var arr = [1, 2, 3]; arr.pop(); console.log(arr);` 输出为 （2） [1, 2]
3. 头部添加 unshift(param) `var arr = [1, 2, 3]; arr.unshift(4); console.log(arr);` 输出为 （4）[4, 1, 2, 3]
4. 头部删除 shift() `var arr = [1, 2, 3]; arr.shift(); console.log(arr);` 输出为 （2） [2, 3]
5. 插入、删除 splice
  1. 删除：splice(起点， 长度) `var arr = [1, 2, 3]; arr.splice(1, 1); console.log(arr)` 输出为 （2）[1, 3];
  2. 插入： splice(起点， 长度， 元素) `var arr = [1, 2, 3]; arr.splice(1, 1, 'a', 'b'); console.log(arr)` 输出为 （4）[1, 3, 'a', 'b'];
  3. 替换：splice(起点， 长度， 元素个数为长度) `var arr = [1, 2, 3]; arr.splice(1, 2, 'a', 'b'); console.log(arr)` 输出为 （3）[1, 'a', 'b'];
6. 数组连接 arr1.concat(arr2) `var arr1 = [1, 2, 3], arr2 = [4, 5, 6]; console.log(arr2.concat(arr1));` 输出为 (6)[4, 5, 6, 1, 2, 3]
7. 数组转换为字符串 arr1.john('连接符') `var arr1 = [1, 2, 3], arr2 = [4, 5, 6]; console.log(arr1.concat().john());` 输出为 123456
8. 数组排序 arr.sort()
  1. 字符串排序,默认以此方式排序 `var arr1 = [b, a, c]; console.log(arr1.sort());` 输出为 （3） [a, b, c]
  2. 数字排序，改变默认的数组排序 `var arr1 = [1, 2, 3], arr2 = [4, 5, 6];console.log(arr2.concat(arr1).sort(function(n1, n2){ return n1 -n2;}));` 输出为 (6)[1, 2, 3, 4, 5, 6]