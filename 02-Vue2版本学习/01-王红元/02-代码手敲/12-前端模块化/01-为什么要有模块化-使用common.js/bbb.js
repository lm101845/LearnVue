// 小红创建bbb.js

// 方法1：直接写
// var name = "小红";
// var flag = false;
// // 全局变量同名问题可以用匿名函数(闭包)的方式进行解决，但是这也会导致一些问题。
// console.log(name);

// 方法2：在匿名函数里写，解决全局变量名冲突的问题
var moduleB = (function () {
  // 如果小红也有东西想导出，也可以这样做：先定义一个空对象，再返回它
  var obj = {};
  var name = "小红";
  var flag = false;
  // 全局变量同名问题可以用匿名函数(闭包)的方式进行解决，但是这也会导致一些问题。
  console.log(name);
  obj.flg = flag;
  return obj;
})();
