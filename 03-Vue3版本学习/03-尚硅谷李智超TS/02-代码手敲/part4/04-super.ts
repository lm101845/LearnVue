/*
 * @Author: liming
 * @Date: 2021-05-21 18:18:36
 * @LastEditTime: 2021-08-01 16:52:38
 * @FilePath: \03-尚硅谷李智超TS\02-代码手敲\part4\04-super.ts
 */
(function () {
  // super:超级的意思
  // 父类还有一个名字，叫做超类
  // super在这里实际上就代表的是一个父类
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    sayHello() {
      // 像这种直接写的就表示实例方法
      // 在前面加上static的就表示类方法
      console.log("动物在叫~~~");
    }
  }

  class Dog extends Animal {
    age: number;
    // 父类中没有age属性，子类狗类需要age属性，所以在这里再添加一个age属性
    // 但是这个age属性需要进行初始化——这个时候就必须要调用构造函数来进行初始化操作
    // 如果光写一个构造函数的话，还是会有错！！
    // 报错信息：Constructors for derived classes must contain a 'super' call

    // 如果在子类中写了构造函数(父类中也有constructor构造函数！)——名字相同的构造函数会发生重写！！！！！！！！！！！！
    // 则父类中的构造函数就会被你给覆盖掉了
    //   那么父类中的构造函数就不会去执行了
    //   而父类中的构造函数不去执行，则name属性的赋值，这个操作就不会生效
    //   总结：如果在子类里也写了构造函数，则子类构造函数中必须对父类的构造函数进行调用!!(否则父类的构造函数就被子类重写了)

    //   之前没有在Dog类里面写constructor构造函数，也是可以的，因为你没有发生重写，所以它自动调用够构造函数的。
    //   而如果你现在写了constructor构造函数的话，你就必须手动的去调用一下父类的构造函数

    //   注意：父类的构造函数有一个name参数，子类中也要把它给写上！！！！！！！！！

    //   这个你可以把它理解成ts或者js给我们遗留下来的一个问题，这个就稍微有点麻烦了，以后记得写就好了
    constructor(name: string, age: number) {
      //   这里就是在调用父类的构造函数
      super(name);
      this.age = age;
    }
    // sayHello() {
    //     super.sayHello()
    // super表示的就是我们的父类
    // 在类的方法中，super就表示当前类的父类(或当成当前类的父类的实例都行)

    // 我试了，不写sayHello()也是可以的，因为sayHello方法子类是自动继承父类的
    //     console.log('汪汪汪');
    // }
  }

  const dog = new Dog("小黑", 3);
  dog.sayHello();
})();
