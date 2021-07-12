import { hi } from './m1'
// m1是一个模块，而它的扩展名确是ts
// 而它是不知道ts是可以作为模块来使用的
// 即它不知道哪些文件可以被引入
// 所以我们需要做一些配置来告诉webpack

function sum(a: number, b: number): number {
    return a + b
}

let obj = { name: '孙悟空',age:888 }
console.log(obj);

obj.age = 18;
console.log(obj);



console.log(sum(123, 456));
console.log('哈哈');

console.log(hi);

console.log(Promise);

