// 小明开发aaa.js
let name = "小明";
let age = 18;
let flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(20, 30));
}

// 别的地方(xiaoming.js想要用我的flag和sum，就需要把这2个进行导出给别人用)

// 初始写法写法：但是这种写法写了会报错，不知道为什么不支持了
// export {
//     flag: flag,
//     sum:sum
// }

// 1.导出方式1：简写(对象的增强写法)
export { flag, sum };

// 2.导出方式2：直接导出 (先把变量定义好，然后直接导出)
export let num1 = 1000;
export let height = 1.88;

// 3.导出函数/类
export function mul(num1, num2) {
  return num1 * num2;
}

export class Person {
  run() {
    console.log("在奔跑");
  }
}

// 4.export default
// const address = "北京市";

// 我们现在很多种导出方式了
// 方法1
// export { address };

// 方法2
// export const address = "北京市";

// 但是方法1,2导出时必须要给它起个名字，但是我们有时候不想给它起名字

// 方法3
// 这样导出address也不需要写大括号了
// export default address;

export default function (argument) {
  console.log(argument);
}
