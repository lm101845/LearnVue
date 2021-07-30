// 1.导入的是对象中{}定义的变量
import { flag, sum } from "./aaa.js";
// 像这些别人导出叫什么名字，我导入必须也叫相同的名字，不够灵活
// 可以用export default让导入者自己起名字

// 先在aaa.js中实施导出
// 再在xiaoming.js里实施导入
// aaa.js的后缀.js可以省略不写(但是这里省略会报错，以后开发可以省略)

if (flag) {
  console.log("小明是天才，哈哈哈");
  console.log(sum(3, 5));
}

// 2.直接导入export定义的变量
import { num1, height } from "./aaa.js";
console.log(num1);
console.log(height);

// 3.导入export的function,类
import { mul, Person } from "./aaa.js";
console.log(mul(5, 7));

const p = new Person();
p.run();

// 4.导入export default中的内容
import addr from "./aaa.js";
console.log(addr);
addr("你好啊");
// 使用export default这种方式导出，导入的话我可以自己命名
// 但是在开发中 export default这种方式只能有一个
// 不能弄多个export default,默认的只能有一个，不然分不清是哪个

// 5.统一全部导入
// 只要script标签中有type="module"的话就全部进行导入
// import { flag, num, num1, height, Person, mul, sum } from "../aaa.js";
// 这样写太长了，而且找导入的变量也不好找
// 而且导入的变量和我命名的变量有可能会冲突
import * as quanbu from "./aaa.js";
//as quanbu 表示所有导入的变量打个包，统一叫quanbu
console.log(quanbu.flag);
console.log(quanbu.height);
// 通过点的方式来拿里面的变量
