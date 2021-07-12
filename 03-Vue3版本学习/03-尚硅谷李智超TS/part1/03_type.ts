// 也可以直接使用字面量进行类型声明
let a: 10;
a = 10;
// a = 11;
// a已经赋值10了，你就不能再修改它了
// 赋值一次就不能再修改了，感觉就像常量一样


let b: "male" | "female";
// 竖线|表示或者
// b只能是male或female这2个选项
b = 'male'
b = 'female'

// 可以使用|来连接多个类型(联合类型)
let c: boolean | string
c = true;
c= "hello"

// any表示的是任意类型
// 你写了any以后就跟JS也没什么区别了
// 一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型(你用了any还不如直接去用JS)
// 听说有些公司不给写any，写一个扣10块钱

// let d: any;
// 这种写法是显式的any
let d;
// 这种写法是隐式的any
// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any(隐式的any)

// 显式的any我们要避免，隐式的any我们更要避免
// any不到万不得已的时候尽量别用
d = 10;
d = 'hello';
d = true;


// 如果有一些变量你实在是不知道它的类型的话，你可以使用any
// 不过你也可以使用unknown
// unknown表示未知类型的值，那么它和any有什么区别呢？
let e: unknown;
e = 10;
e = '你好';
e = true;
// 这里可以看到设置any和设置unknown效果是一样的

let s: string;
s = d;
// s是string，d是any
// 把变量d的值赋值给了变量s
// d的类型是any，它可以赋值给任意变量，不会报错
// 说明any类型的变量不仅霍霍自己，还霍霍别人
// s本来是字符串挺好的，你这一整，被any弄成了true布尔值了
// any不仅把自己的类型检查给关了，也把别人的类型检查也给关了

// 而unknown就不一样了
let f: string;
e = 'hello';
// f = e;
// 报错：Type 'unknown' is not assignable to type 'string'
// 你把未知类型的变量(e)赋值给了f(类型为string)会报错
// 这个就是any和unknown的区别
// any的话你给别人赋值他也不查了，但是unknown只管自己，自己爱赋啥值赋啥值
// 但是如果你想把自己(unknown类型)的变量值赋值给别的变量的时候，就会报错
// 用TS的时候只要看到红色波浪线，一定要记得处理
// 不然你用TS就没有意义了



// unknown实际上就是一个类型安全的any
// unknown类型的变量不能直接赋值给其他变量
// 如果你真的一定要赋值的话(f = e)
// 你可以对它先进行类型检查

// 方法1：
// if (typeof e === "string") { 
//   f = e
//   // 这样就不报错了
//   // 这个还要多个类型检查，看上去有点麻烦
//   // 但是它可以避免后面出问题
// }

// 方法2：使用类型断言
// 有些时候一些变量的类型TS编译器它不知道，但是我们自己知道
// 类型断言，可以用来告诉解析器变量的实际类型(不过你要确保你写的是对的)

/*
* 语法
*   1.变量 as 类型
*   2.<类型>变量
*/
// 2.1写法
// f = e as string;

// 2.2写法
f = <string>e;

// 2.1和2.2写法的效果是一样的，都是告诉变量e是字符串

// 以后你遇到类型不确定的变量时，能用unknown尽量用unknown
// 能不用any尽量不要用any
// 不要嫌unknown麻烦
// 如果嫌麻烦的话就不要用TS了
// TS刚开始接触的时候感觉没那么好，但是随着时间久了，越用越好用



function fn(): number { 
  // 设置返回值的类型为number
  return 123;
}

function fn1() { 
  // 有些情况下函数没有返回值
  // 如果你在小括号后不写类型的话，默认的类型就是void
}

function fn2() { 
  return true
  // 你写了返回值，而且返回的是true
  // 虽然你没有写返回值，它还是能自动判断出来类型为true的
}

function fn3(num) { 
  if (num > 0) {
    return true;
  } else { 
    return 123;
  }
  // 这个时候返回类型就是true或者123了
}

// void用来表示空，以函数为例子，就表示没有返回值的函数
function fn4(): void { 
  // return true;
  // 这时只要你有返回值，它就会报错
  // Type 'boolean' is not assignable to type 'void'
  // return null;
  // return undefined;
  // 你return null或undefined，void都认为是空，都不会报错
}

function fn5() :never{ 
  // never表示永远不会返回结果
  // 和void的区别：
  // 从哲学的角度上来讲，你没有返回值(返回值为空)，一定意义上也是一种返回值
  // 而never是真的没有，连空都没有，什么都没有

  // 在JS里面有一些函数，它不返回结果，连undefined都不返回
  // 它是用来报错的
  // 当程序运行出错误了，需要报一个错，就可以用这种函数来完成报错
  throw new Error('报错了！')
  // 这个函数一旦调用，它就会报错
  // 不过这种一般用的比较少
}
