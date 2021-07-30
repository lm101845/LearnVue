// 小红开发bbb.js
import { sum } from "./aaa.js";

let name = "小红";
let flag = false;
// 这个时候还是会有命名冲突的问题
// 那怎么让它们没有命名冲突的问题呢？——script标签上加上type="module"即可
// 这样就意味着我们是按照模块化的思想来使用这2个文件的
// 则这2个文件就是2个单独的模块，单独的模块有自己单独的作用域，就不会有命名冲突的问题了

console.log(sum(100, 200));
