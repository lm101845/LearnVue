// 小明创建aaa.js

// 方法1：直接写
// var name = "小明";
// var age = 22;

// function sum(num1, num2) {
//   return num1 + num2;
// }

// var flag = true;

// if (flag) {
//   console.log(sum(10, 20));
// }

// 方法2：在匿名函数里写，解决全局变量名冲突的问题
var moduleA = (function () {
  // 在这里做了一个接收
  // 因为这个函数是立即执行，你一执行这个函数就返回obj
  // 那么这个obj就等于moduleA了
  // 则在全局里面就有moduleA这个东西，里面就保存着小明想要导出的一些东西了
  // moduleA是在全局的！！！！！！！！

  // 早期大家都是这样实现模块化的，但是随着前端越来越复杂，已经不这样实现了
  // 我们以后会采用别人已经实现好的模块化规范来写代码

  // 使用模块化思想：导出的对象
  var obj = {};
  // 先给它弄一个空的对象
  // 使用的是ES5的语法，ES5里面没有模块化，而ES6则自带模块化，不这么写了

  var name = "小明";
  var age = 22;

  function sum(num1, num2) {
    return num1 + num2;
  }

  var flag = true;

  if (flag) {
    console.log(sum(10, 20));
  }

  obj.flag = flag;
  // 上面弄一个空的对象，下面给这个空的对象加一个flag属性，把之前定义的flag变量赋值给它
  obj.sum = sum;
  // 把sum函数也给它
  // console.log(obj);
  return obj;
  // 我们把这个obj给return出去(但是没有人接收它)
})();
