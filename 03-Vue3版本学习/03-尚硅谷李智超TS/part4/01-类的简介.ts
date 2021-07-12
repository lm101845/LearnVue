/*
 * @Author: liming
 * @Date: 2021-05-21 11:18:44
 * @LastEditTime: 2021-05-21 12:07:15
 * @FilePath: \LearnTypeScript\01-尚硅谷李智超\part4\01-类的简介.ts
 */

// 使用class关键字来定义一个类

/**
 * 对象中主要包含了2个部分
 *       属性
 *       方法  
 */

class Person {
    // 定义属性(有什么写什么)——这些属性叫做实例属性(这些属性本身是存到Person类的实例中的)——你只有new了Person以后我们才能看到这些属性
    // 你只有通过实例(这里是per)，利用per.name，per.age这样才能访问到这些属性

    /**
     * 总结：
     * 直接定义的属性是实例属性，需要通过对象的实例去访问：
     * const per = new Person()
     * per.name
     */

    
    readonly name: string = '孙悟空';
    //readonly开头的属性表示一个只读的属性，无法修改 

    age: number = 18;

    // 在属性前使用static关键字可以定义类属性(或者叫静态属性)——不需要创建对象就可以用的属性。
    /**
     * 总结：
     * 使用static开头的属性是静态属性(类属性)，可以直接通过类去访问(通过实例去访问会报错)
     * Person.height
     */
    static height: number = 1.88
    static readonly hobby: string = '打妖怪'
    // 'static' modifier must precede 'readonly' modifier.
    // static必须要放到readonly的前面


    // 方法——不用写function也不用写关键字，直接写方法名就可以了
    sayHello() {
        // 像这种直接写的就表示实例方法
        alert('大家好，我叫孙悟空')
    }

    static sayHi() {
        // 在前面加上static的就表示类方法
        alert('我是类方法')
    }

    /**
     * 定义方法总结：
     *      如果方法以static开头，则方法就是类方法，可以直接通过类去调用
     *      没有static开头就是实例方法，通过创建实例来调用
     * 
     */
    
}

const per = new Person()
console.log(per);
console.log(per.name);
// per.name = 'Tom'
// 正常属性你拥有全部权限，可以读，也可以写
// Cannot assign to 'name' because it is a read-only property.
// console.log(per.name);


// 还有一种属性叫做类属性(静态属性)
console.log(Person.height);

// console.log(per.height);
// 静态属性无法通过实例来访问，只能通过类来访问


per.sayHello()
Person.sayHi()



