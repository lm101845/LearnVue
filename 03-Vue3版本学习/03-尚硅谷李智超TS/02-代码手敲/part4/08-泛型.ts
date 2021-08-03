/*
 * @Author: liming
 * @Date: 2021-08-01 18:10:32
 * @LastEditTime: 2021-08-01 18:33:44
 * @FilePath: \03-尚硅谷李智超TS\02-代码手敲\part4\08-泛型.ts
 */

// function fn(a: number): number {
    //有些情况下我不知道a的类型
    //而且强烈建议不用any
    //凡是遇到类型不明确的时候，就建议使用泛型
//     return a
// }

/*
*   在定义函数或是类时，如果遇到类型不明确就可以使用泛型
*
* */

function fn<T>(a: T):T {
    //尖括号<>里面定义了一个类型T
    // a:T表示参数a的类型是T
    //这里的T这里就是一个泛型，T到底是什么类型？不知道，这个T类型只有在函数执行的时候才执行
    return a
}
//描述类型用大写，这里是T,名字随便起
// 具体是什么类型，现在不知道，只有调用的时候才知道

//使用方法：直接调用具有泛型的函数(它会自动判断T的类型)——这里用到了ts里面类型的自动推断 

let result1 = fn(10)  
//这里参数类型是number，返回值类型也是number
//不指定泛型，TS可以自动对类型进行推断——但不是所有情况下都能推断的出来

let result2 = fn<string>("hello");
// 指定泛型

// 泛型可以同时指定多个
function fn2<T, K>(a: T, b: K): T {
    console.log(a, b);
    return a   
}

let result3 = fn2<number, string>(123, 'hello')
console.log(result3);

interface Inter {
    length:number
}

// T extends Inter 表示泛型T必须时Inter实现类（子类）
function fn3<T extends Inter>(a:T):number {
    //我希望泛型T是Inter的子类，即实现了Inter接口的类
    //这里所有的都用extends，不分什么extends和implements了
    return a.length
}

fn3('123')
//'123'里面是有length的，所以可以用
// fn3(123)
//数字123没有length属性，所以不能用

//除了在函数中，在类中也是可以使用泛型的
class MyClass<T> {
    name: T
    constructor(name: T) {
        this.name = name
    }
}

const mc = new MyClass('孙悟空')
//这样它就可以自动判断泛型的类型为字符串

//你也可以直接加一个尖括号，写一个string
const mv = new MyClass<string>('猪八戒')

//总结：泛型的作用就是在我们类型不明确的时候，给我们整一个变量，用这个变量来表示泛型