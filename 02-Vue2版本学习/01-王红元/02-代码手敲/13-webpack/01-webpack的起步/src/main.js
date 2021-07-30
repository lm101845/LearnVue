// 使用模块化思想
// 方法1：使用CommonJS导入mathUtils.js
const { add, mul } = require("./mathUtils.js");

console.log(add(20, 30));
console.log(mul(20, 30));

// 方法2：使用ES6导入info.js
import { name, age, height } from "./info.js";
// 这里可以不加js后缀，webpack文件会帮你找的
console.log(name);
console.log(age);
console.log(height);
