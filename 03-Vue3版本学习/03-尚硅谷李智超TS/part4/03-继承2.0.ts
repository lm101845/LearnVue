/*
 * @Author: liming
 * @Date: 2021-05-21 17:14:40
 * @LastEditTime: 2021-05-21 18:17:55
 * @FilePath: \LearnTypeScript\01-尚硅谷李智超\part4\03-继承2.0.ts
 */

// 定义一个表示狗的类

// 把它放到立即执行函数里面，不然会报错说重复的属性

(function () {
  class Animal {
    //   这个要写到上面，不然报错
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log("动物在叫");
    }
  }

  /**
   * Dog extends Animal
   *    ——此时Animal被称为父类,Dog被称为子类
   *    ——使用继承后，子类将会拥有父类所有的方法和属性
   * 
   *    ——通过继承可以将多个类中共有的代码写在一个父类中
   *        这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
   * 
   *   ——但是这时候就会有一个疑问了，我们这个时候创建的Dog，Cat实际上和Animal是一模一样的。
   *   ——这个时候我想在Dog里面写一些Animal里面没有的，可以吗？  ——当然是可以的！！！
   * 
   *   ——如果希望在子类中添加一些父类中没有的属性或方法，你直接添加即可。
   * 
   *   ——如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法
   *   继承我们不仅可以直接继承，对某些继承过来的东西，不满足的，我们还可以自己手动修改。
   *   这种子类覆盖掉父类方法的形式，我们称为方法的重写
   * 
   *   有了继承以后会大量减少我们代码编写的数量
   *     
   */

  // 定义一个狗的类
  // 使Dog类继承Animal类
  class Dog extends Animal {
    run() {
      console.log(`${this.name}在跑~~~`);
    }

    sayHello() {
      // Animal里面有sayHello，Dog继承了Animal，Dog里面也有sayHello,最终还是听儿子的
      console.log("汪汪汪");
    }
  }

  // 再定义一个表示猫的类
  // 使Cat类继承Animal类
  class Cat extends Animal {
    sayHello() {
      console.log("喵喵喵");
    }
  }

  // 一个问题：Dog类和Cat类里面的结构和内容基本是一模一样的
  // 唯一不同的是：狗的sayHello是汪汪汪，猫的sayHello是喵喵喵
  // 所以我们可以在外面定义一个Animal类

  const dog = new Dog("旺财", 3);
  const cat = new Cat("咪咪", 2);

  console.log(dog);
  dog.sayHello();
  dog.run();

  console.log(cat);
  cat.sayHello();
})();
