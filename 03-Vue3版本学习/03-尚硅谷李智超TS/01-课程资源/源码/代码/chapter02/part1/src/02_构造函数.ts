/*
 * @Author: liming
 * @Date: 2020-12-11 11:34:43
 * @LastEditTime: 2021-08-01 16:35:56
 * @FilePath: \03-尚硅谷李智超TS\01-课程资源\源码\代码\chapter02\part1\src\02_构造函数.ts
 */
class Dog{
    name: string;
    age: number;

    // constructor 被称为构造函数
    //  构造函数会在对象创建时调用
    constructor(name: string, age: number) {
        // 在实例方法中，this就表示当前当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        this.name = name;
        this.age = age;
    }

    bark(){
        // alert('汪汪汪！');
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this.name);
    }
}

const dog = new Dog('小黑', 4);
const dog2 = new Dog('小白', 2);

// console.log(dog);
// console.log(dog2);
dog2.bark();
