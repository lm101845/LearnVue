// 小明创建的另一个js文件

// 导入在Common.js里面用require关键字;
// 写法1：对象的解构写法
var { flag, sum } = require("./aaa.js");

// 写法2：分开写更加好懂
// 上面的写法等价于：
// var module = require("./aaa.js");
// var flag = module.flag;
// var sum = module.sum;

// 然后就可以直接使用了

// sum(20, 30);

// 注意：这里只是演示如何导入导出，无法运行的，因为这里没有module的底层实现
