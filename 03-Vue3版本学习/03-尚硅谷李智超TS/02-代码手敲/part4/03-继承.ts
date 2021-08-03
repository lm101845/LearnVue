/*
 * @Author: liming
 * @Date: 2021-05-21 17:14:40
 * @LastEditTime: 2021-08-01 16:47:54
 * @FilePath: \03-尚硅谷李智超TS\02-代码手敲\part4\03-继承.ts
 */

// 定义一个表示狗的类

// 把它放到立即执行函数里面，不然会报错说重复的属性

(function () {
  class Dog {
    name: string;
    age: number;

    constructor(name1: string, age1: number) {
      this.name = name1;
      this.age = age1;
    }

    sayHello() {
      // 类的方法都是统一的，所以写到构造函数外面
      console.log("汪汪汪");
    }
  }

  // 再定义一个表示猫的类
  class Cat {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log("喵喵喵");
    }
  }

  // 一个问题：Dog类和Cat类里面的结构和内容基本是一模一样的
  // 唯一不同的是：狗的sayHello是汪汪汪，猫的sayHello是喵喵喵
  // 所以我们可以在外面定义一个Animal类,写上通用的代码，让Dog和Cat类来继承Animal类
  const dog = new Dog("旺财", 3);
  const cat = new Cat("咪咪", 2);

  console.log(dog);
  dog.sayHello();

  console.log(cat);
  cat.sayHello();
})();
