/*
 * @Author: liming
 * @Date: 2021-05-21 12:14:07
 * @LastEditTime: 2021-05-21 14:03:18
 * @FilePath: \LearnTypeScript\01-尚硅谷李智超\part4\02-构造函数.ts
 */

/**
 * 一般情况下我们一个类里面会创建多个对象(比如这里通过Dog类创建了4条狗)
 * 但是这4条狗都是一样的属性和方法(是相同的狗，都叫大黄，都会汪汪汪，这个就属于是克隆了)
 * 这样的话意义就不大了，这就相当于Dog类就只是单单创建3岁会汪汪叫的大黄的狗的类，而不是创建各种各样的狗的类了
 * 
 * 我们不想要克隆狗，我们想要不同的狗，这样世界才会更加的色彩斑斓
 * 我们希望每一次new Dog，都能创建各种各样不同的dog(属性不一样，需要改变，方法基本一样，不用动，狗都会叫，但毛色，名字，年龄都不一样。 )
 * 
 * 所以最佳实践就是，我们在类里面不直接给属性直接指定值，只把它的类型给指定好，值不指定，见Cat类
 * 这个值不能在类里面进行指定(如果在类里面指定好了，则意味着所有的对象都是这个值，就变成克隆了)
 * 但是我们也不能不给值，如果不给值的话，就等于我这个类里面是没有这些属性了(类是属性和方法的集合，是一个蓝图，框架)
 * 那么问题来了，我什么时候给它们值比较好呢？
 *      ——首先：在定义类的时候，这个值是不能确定的
 *      ——其次：我们又不能不给，那什么时候给合适呢？我们创建对象的时候，再给属性值就很好了。
 *          ——我想创建大黄，就给name赋值旺财，想创建小黑，就给name赋值小黑即可。
 *          ——这里就要用到constructor构造函数了(函数名是固定的，就叫constructor)
 */
class Dog {
    name: string = '大黄'
    age: number = 3
    
    bark() {
        alert('汪汪汪')
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this);
        console.log(this.name);
    }
}

const dog1 = new Dog()
const dog2 = new Dog()
const dog3 = new Dog()
const dog4 = new Dog()


console.log(dog1);
console.log(dog2);
console.log(dog3);
console.log(dog4);

class Cat{
    // 这2个属性要先在类中进行一下定义
    // 属性在类中是直接定义的，写几个就有几个
    name: string;
    age: number;

    //在类里面添加一个固定名字的函数，函数名叫constructor
    // constructor被称为构造函数
    // 构造函数会在创建对象(new对象的时候)的时候自动进行调用
    // 你每调用一次new Cat()，就相当于调用了一次构造函数
    constructor(name1: string, age1: number) {
        // 我们在赋值的时候，是在构造函数中给它赋值的
        console.log('构造函数执行了');
        // 在实例方法中，this就表示当前的实例
        // 换句话说，你当前实例对象是谁，this就是谁
        // 在构造函数中，当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        console.log(this);
        // this.name = '旺财'
        // this.age = 18

        this.name = name1;
        this.age = age1;
    }
}


const cat = new Cat('旺财',1)
// 当我在new cat的时候，实际上就相当于调用了constructor函数！！！！！！
// 当我在new cat的时候，constructor函数就开始执行了
// console.log(cat);
const cat2 = new Cat('咪咪',2)
const cat3 = new Cat('毛毛', 3)



 