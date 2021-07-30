// 小明创建的另一个js文件
// 小明知道自己之前定义过flag变量，并且知道这个变量为true

// if (flag) {
//   console.log("小明是天才，哈哈哈");
//   // 因为aaa.js使用了匿名函数，所以无法在这里直接使用flag变量了，代码无法复用
// }

// 如果aaa使用了匿名函数，那么虽然解决了aaa.js和bbb.js变量重名的问题，但也带来了新的问题：
// 我想用aaa.js里面的变量flag是用不了的

// 比如这里想用aaa.js里面的sum函数，用不了，只能自己在这里再定义一个

// 在xiaoming.js里面也弄一个闭包吧
(function () {
  // 要求1：想使用aaa.js里的flag变量
  // 写法1：不行
  // if (flag) {
  // 这样写不行
  //     console.log("小明是天才，哈哈哈");
  //   }

  // 写法2：行
  if (moduleA.flag) {
    console.log("小明是天才，哈哈哈");
    //   这样写可以！！！
  }

  // 要求2：想使用aaa.js里的sum函数
})();
