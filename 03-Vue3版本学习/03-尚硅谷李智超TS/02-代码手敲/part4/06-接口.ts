/*
 * @Author: liming
 * @Date: 2021-05-21 21:00:14
 * @LastEditTime: 2021-08-01 17:15:22
 * @FilePath: \03-尚硅谷李智超TS\02-代码手敲\part4\06-接口.ts
 */
(function () {
  // 描述一个对象的类型
  type myType = {
    name: string;
    age: number;
  };

  const obj: myType = {
    name: "liming",
    age: 27,
  };

  /*
   *   接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
   *       同时接口也可以当成类型声明去使用
   *
   * 注意：接口是可以重复声明的！！
   * */
  interface myInterface {
    name: string;
    age: number;
  }

  interface myInterface {
    gender: string;
    //相当于一个接口里面有3个属性，只不过写成2部分了
  }

  const obj1: myInterface = {
    name: "sss",
    age: 120,
    gender: "男",
    //接口你完全可以当成一个类型去使用
    //我们可以用一个别名的形式来声明一个类型，也可以用接口的形式来声明一个类型
    //区别在于：接口可以在我们定义类的时候，限制类的结构
  };

  /*
   * 接口可以在定义类的时候去限制类的结构，
   *   接口中的所有的属性都不能有实际的值
   *   接口只定义对象的结构，而不考虑实际值
   *       在接口中所有的方法都是抽象方法
   *
   * */

  interface myInter {
    name: string;
    sayHello(): void;
    //接口里面的方法不能写方法体，写了就报错
  }

  /*
   * 定义类时，可以使类去实现一个接口,
   *   实现接口就是使类满足接口的要求
   *
   * 什么是接口：2个水管子，之间要拧到一起，中间就是接口。
   * 接口就是对类的一个限制
   * 接口和抽象类之间是很类似的
   * 唯一的不同点有2个：
   * 1.抽象类中有抽象方法，也可以有普通方法，但是到接口里面它都是抽象方法。
   * 接口里面的东西就是让你去实现的，我不会给你指定一个具体的值。
   * 2.抽象类中使用的关键字叫extends，继承，用于代码复用；而接口里面使用的关键字叫implements,实现，用于给类定义一个标准
   * */
  class MyClass implements myInter {
    name: string;
    //单单写了属性不行，还要有一个构造函数
    constructor(name: string) {
      this.name = name;
    }
    sayHello() {
      console.log("大家好");
    }
  }
})();
