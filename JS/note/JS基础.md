##### JavaScript 的组成
- ECMAScript：解释器 语法
- DOM document object model
- BOM browser object model
  兼容性问题
- ECMA 几乎没有兼容性问题
- DOM 有些兼容性问题
- BOM 几乎不兼容
##### 基础数据类型
- number `let a = 1; alert(typeof a);`
- string `let b = 'hello'; alert(typeof b);` 
- boolean `let a = true; alert(typeof a);`
- undefined `let b; alert(typeof b)` `alert(typeof b)`
- null `let b = null; alert(typeof b);`
- symbol `let b = symbol; alert(typeof b)` 
 1. 定义了变量，没有赋值
 2. 没有声明，直接使用
- object `alert(document)`;
提示一个变量尽量只存放一种数据类型
##### 变量的类型转换
- 字符串转换为数字
1. 使用系统内置函数 parseInt(srting) 转换为整数 `let a = '12',b = '12px',c = '12px34',d = 'a'; console.log(parseInt(a), parseInt(b), parseInt(c), parseInt(d))';` 输出为12 12 12 NaN。
NaN not a Number 非数字 `console.log(NaN === NaN);` 输出为false。**NaN和NaN比较返回false** 
NaN的检测 isNaN(a);
2. 转换为浮点数 parseFloat(string) 转换为小数
##### 隐式类型转换
`var a = 4,b = '4';console.log(a == b, a === b, a - b);` 输出为 true false 0。 == 解释器会自动转换为相同类型再比较， === 解释器直接比较，不会自动转换类型 运算符 - * / 都会自动转换类型（隐式类型转换）只有 + 运算符 字符串和数值操作时，不会隐式类型转换，因为在 JS 中。+ 运算符既有连接字符串的作用，又有数值相加的作用。默认连接字符串优先。
##### 变量作用域
变量起作用的区域
```javascript
var a; //全局变量
function aaa(){
  a = 12;
  var b = 12; //局部变量
  console.log(a);
}
function bbb() {
  console.log(b);
}
aaa();
bbb();
```
输出为 12 undefined；局部变量只能在定义的函数内部使用，全局变量能在任何地方使用。
##### 闭包
```javascript
var a; //全局变量
function aaa(){  // 父函数
  a = 12;
  var b = 12; //局部变量
  console.log(a);
    function bbb() { // 子函数
    console.log(b);
  }
}
bbb();
```
输出为 12。闭包指**子函数能访问（修改）父函数中的变量**
##### 命名规范
匈牙利命名法：类型前缀，首字母大写
| 类型 | 前缀 | 类型 | 实例 |
| :---: |:---: |:---: |:---: |
| 数组 | a | Array | aItems |
| 布尔值 | b | Boolean | bIsComplete|
| 浮点数 | f | Float | fPrice |
| 函数 | fn | Function | fnHandler |
| 整数 | i | Integer | iItemCount |
| 对象 | o | Object | oDiv | 
| 正则表达式 | re | RegExp | reEmailCheck |
| 字符串 | s | String | sUserName | 
| 变体变量 | v | Variant | vAnything |
##### 运算符
- 算数 +加　- 减 * 乘 / 除 % 取模
- 关系 == === ！= !== < > <=  =>
- 赋值 = += -= *= /= %=
- 逻辑 && 与 || 或 ！ 非 
运算符优先级的改变：括号
`var a = 156; var b; b = parseInt(a / 60) + '分' + a % 60 + '秒' console.log(b);` 输出为 2分36秒
##### 流程控制语句
- if语句 和 switch 语句
```javascript
  function aaa(num){
    if(num < 10) {
      console.log('一位数');
    } else {
      console.log('两位数或两位数以上')
    }
  }
  switch(sex) {
    case '男':
      console.log('先生，您好');
      break;
    case '女':
      console.log('女士，您好');
      break;
    default:
      console.log('您好');
  }
  aaa(9);
```
输出为 一位数。
##### 三元运算符
```javascript
  function aaa(num) {
    num < 10 ? console.log('一位数') : console.log('两位数或两位数以上');
  }
  aaa(11);
```
输出为 两位数或两位数以上
##### 循环语句
for、while
1. break 跳出循环
2. continue 跳出本次循环
3. 真：**true、非零数字、非空字符串、非空对象**
4. 假：**false、数字零、空字符串、空对象、undefined**
##### Json
Json 数据格式
```javascript
var json = {a: 12, b: 5, c: 'abc'};
var arr = [12, 5 , 'abc'];
console.log(json.a, json['a'], arr[0]);
// 循环输出 json 值，使用 for in 循环
for(var i in json){
  console.log(i);
}
for(var i in arr){
  console.log(i);
}
```
输出为 12 12 12 12 5 abc 12 5 abc