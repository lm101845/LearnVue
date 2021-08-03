/*
 * @Author: liming
 * @Date: 2021-05-21 19:02:51
 * @LastEditTime: 2021-08-01 16:37:36
 * @FilePath: \03-尚硅谷李智超TS\02-代码手敲\part4\05-抽象类.ts
 */

(function () {
  /**
   * 以abstract开头的类是抽象类
   * 抽象类和其他类区别不大，只是不能用来创建对象
   * 说白了，抽象类就是专门用来被继承的类
   * 抽象类说白了，就是给人当爸爸的，就是给人当父类的。其他的事情它不干。
   *
   * 抽象类中也可以添加抽象方法
   *
   */
  abstract class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    // 定义一个抽象方法
    //   抽象方法使用abstract开头，并且没有方法体
    // 抽象方法只能定义在抽象类中，并且子类必须对抽象方法进行重写
    abstract sayHello(): void;
    // 抽象类中也可以添加抽象方法
    // 这个方法实际上是没有用的，因为不同的动物叫的是不一样的
    // 所以写sayHello这个方法一点意义都没有
    // 更可气的是，有时候你在子类里忘了重写这个方法了，这个时候就使用了这个默认的方法了，那就有问题了
    // 解决方法是，把这个方法弄成抽象方法，返回值弄成空
    //   console.log("动物在叫~~~");
  }

  class Dog extends Animal {
    // Dog是用来创建对象的
    // 而Animal我们不希望有人直接拿它来创建对象！！！
    // 比如这样写：let snake = new Animal()
    // 这样写语法方面没有问题，但是我们不希望这么写
    // 因为Animal的范围太大了，如果你直接用Animal来创建对象，那创建的这个动物到底是什么，我们是不好判断的。

    //   我们的Animal实际上是一个父类，是一个基类，是一个超类，它的作用就是专门给别的类所继承的
    //   我们并不希望Animal用来创建对象，也不希望出现Animal类型的对象
    sayHello() {
      console.log("汪汪汪");
    }
  }

  class Cat extends Animal {
    // 报错：Non-abstract class 'Cat' does not implement inherited abstract member 'sayHello' from class 'Animal'
    // Animal中使用了抽象方法，Cat继承了这个类，但是没有重写这个方法，所以就直接报错
    //   它报错的目的就是强制你重写这个sayHello方法
    sayHello() {
      console.log("喵喵喵");
    }
    }
    
  const dog = new Dog("小黑");
  dog.sayHello();

  //   const an = new Animal();
  // 报错：Cannot create an instance of an abstract class
})();
