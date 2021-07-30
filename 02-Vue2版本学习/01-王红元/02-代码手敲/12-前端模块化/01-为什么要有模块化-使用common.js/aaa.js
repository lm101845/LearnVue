// 小明创建aaa.js
// 在module里面可以这样写
var name = "小明";
var age = 22;

function sum(num1, num2) {
  return num1 + num2;
}

var flag = true;

if (flag) {
  console.log(sum(10, 20));
}

module.exports = {
  // 导出在Common.js里面用exports关键字
  // 这样写不行，因为这个代码里没有人帮你解析这个结构
  // 现在这个结构没有意义，肯定要有底层支撑
  // 不然module这个关键字系统都不认识
  // 我们后面会讲Webpack,Webpack要想正常的运行，是依赖于Node环境的，而Node环境底层里有module
  // 1.先导出
  // 导出的是一个对象！！
  flag: flag,
  // // 导出一个属性叫flag,它对应的值是flag
  sum: sum,

  //对象属性的增强写法如下：更简洁
  // flag,
  // sum,
};
