// object表示一个JS对象
// 但是它并不实用
// 因为在JS里面对象实在是太多了
// "一切都是对象"
// 所以你只写了一个object等于没有给它添加任何限制
// 其实我们在限制对象的时候，其实是在限制对象中包含哪些属性，而非限制它是否是一个对象
let a: object;
a = {};
a = function () { };


let b: {name:string};
// 这样写也表示变量b存储的是一个对象,同时这个对象有一个name属性，类型为string
// 但是这个和上面是有很大区别的，这个可以指定属性
// {}可以用来指定对象中可以包含哪些属性
// b = {}
// 这样写就会报错，它里面需要一个name属性
b = { name: '孙悟空' };
// b = { name: '孙悟空', age: 18 };
// 这样写也不行，会报错，只能有定义好的name属性，不能有其他的属性
// 要求结构必须一模一样，不能多，也不能少

let c:{ name: string, age: number };
// c = {name:'猪八戒'}
// 这样也不行，必须要有age

let d: { name: string, age?: number };
// 如果在属性名后面加一个问号，则表示这个属性是可选的，你可以写，也可以不写
d = { name: '沙悟净' }
// 这样写才不会报错

// let e: { name: string }
// 要求必须要有name属性，其他属性不做要求，有没有都行
// let e: { name: string, a?: number, b?: number }
// 这样写也行，但是很麻烦，如果我还想加一个属性叫c呢？你能穷举出全部的属性吗？
// e = {name:'唐僧',a:1,b:2}
let e: { name: string, [propName: string]: any }
e = {name:'唐僧',a:1,b:2,age:18,sex:'男'}
// 这个表明首先必须有name属性，其他属性随便你，加不加都行
// 中括号里面的propName是你随便写的，写什么都行，它就是一个变量名
// :string表示我这个属性名的类型是字符串
// JS里面的属性名实际上就是一个字符串
// [propName: string]就表示只要是字符串的属性名，都可以
// : any 表示任意类型


/*
 * 设置函数结构的类型声明
 *    语法(形参：类型,形参：类型,...)=>{返回值}
 * 
 * */
let f: (a: number, b: number) => number;
// 希望限制这个函数有几个参数，返回值是什么类型的
// 表示希望f是一个函数，并且有2个参数，都是number类型的
// 而且返回值也是number类型的
// 注意，名字无所谓，叫a,b也行，叫c,d也行

// d = function (n1: number, n2: number):number { 
// 你这里小括号后写不写:number都行了
d = function (n1: number, n2: number) { 
  return n1 + n2
}


/*
 *数组的类型声明：
 *    方法1：类型[]
 *    方法2：Array<类型>
 */
let g: string[];
// 在原生JS里面数组中什么类型的值都可以存
// 但是数组里面存了乱七八糟的类型的话，处理起来就比较麻烦了
// 所以一般在开发中，数组都是存相同类型的值
// g表示字符串数组，数组里面存的都是字符串
g = ['a', 'b', 'c'];

// 写法1：表示数值类型的数组
let h: number[];
h = [1, 2, 5, 6, 8];

// 写法2：也表示数值类型的数组
let i: Array<number>;

/**
 * 元祖：元祖就是固定长度的数组
 * (一般的数组长度是可变的，动态的)
 * 元祖的存储效率会比较好一点，因为它的长度固定，变化的机会会比较少一点
 * 语法：[类型,类型,类型,...]
 * 元祖长度一般不会特别长，特别长的话就用数组了
 */

let j: [string, string]
//  这个表示我定义了一个元祖，这个元祖里面有2个值，都是string类型
j = ['hello','world']


/**
 * enum 枚举
 */
// let k: { name: string, gender: string };
// let k: { name: string, gender: number };
enum Gender { 
  // 枚举的类型叫Gender，里面有2个值，Male，Female
  // Male = 0,
  // Female = 1
  Male,
  Female
}
let k: { name: string, gender:Gender };
// let k: { name: string, gender: 0|1 };
// 你可以写成number,0是男，1是女，等等。
// 但是我这个程序可能要交给别人用，他不会知道0是男还是1是男
// 于是我们就用到枚举了
// 枚举就是把我们所有的可能的情况都详细列出来
k = {
  name: '孙悟空',
  // gender: 1
  gender: Gender.Male
  // 这样写也行，挺好的，我一看就知道它是男的
  //'male'
  //gender的值在一定范围之内：男，女，不详，保密 
}

// console.log(k.gender === 1);
console.log(k.gender === Gender.Male);

// &表示同时
let l: { name: string } & { age: number };
// l既要有name属性，也要有age属性
l = { name: '孙悟空', age: 18 }

// 类型的别名
type myType = string;
let o: myType
// 给string起了一个类型别名叫myType
// 现在myType和string就是等价的了
type youType = 1 | 2 | 3 | 4 | 5;
let m: youType;
let n: youType;