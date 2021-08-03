/*
 * @Author: liming
 * @Date: 2021-08-01 17:24:51
 * @LastEditTime: 2021-08-01 18:08:28
 * @FilePath: \03-尚硅谷李智超TS\02-代码手敲\part4\07-属性的封装.ts
 */
(function () {
  //定义一个表示人的类
  class Person {
    // TS可以在属性前添加属性的修饰符
    /*
     *   public 修饰的属性可以在任意位置访问（修改） 默认值
     *   private 私有属性，私有属性只能在类内部进行访问（修改）
     *       - 通过【在类中添加方法】使得私有属性可以被外部访问
     *   protected 受包含的属性，只能在当前类和当前类的子类中访问（修改）
     *
     * */
    // name: string;
    // age: number;

    //解决方法1：不让你知道我类里面的属性名叫什么——不过这个属于自欺欺人
    // _name: string;
    // _age: number;

    //解决方法2：TS可以再属性前面添加属性的修饰符
    private name: string;
    private age: number;
    //private为私有属性，关闭了外部访问这个属性的通道
    //name,age这2个属性只能在类里面访问，外面访问不到了

    constructor(name: string, age: number) {
      //   this._name = name;
      //   this._age = age;
      this.name = name;
      this.age = age;
    }

    getName() {
      return this.name;
    }

    setName(value: string) {
      //改名字，改名字这个值要从外面穿进来
      this.name = value;
    }

    getAge() {
      return this.age;
    }

    setAge(value: number) {
      if (value >= 0) {
        this.age = value;
      } else {
        console.log("请输入大于0的年龄");
      }
    }
  }

  const person = new Person("孙悟空", 500);
  /*
   * 现在属性是在对象中设置的，属性可以任意的被修改,
   *   属性可以任意被修改将会导致对象中的数据变得【非常不安全】
   * */
  console.log(person);
  //这个属性值可以任意修改，这样不可避免有些手欠的人，把age改成负数
  //这个属性之所以太容易被修改了，是因为这个属性直接被暴露于外面，别人都能看见
  //   person.name = "猪八戒";
  //   person.age = -250;
  console.log(person);
  //console.log(person.name);  //不行，不能直接读
  // person.name = "猪八戒"    //不行，不能直接写
  console.log(person.getName());
  //通过getter方法来间接访问类里面的数据，更加的安全
  person.setName("猪八戒");
  person.setAge(-250);
  console.log(person);
  //虽然通过getter和setter方法仍然能修改类中的属性，但是比直接改的好处在于：
  //getter和setter方法的控制权在我的手上，我以后要是不想让外部访问了，直接把这2个方法给删除就行了
  //而且还能给setter方法进行限制，比如年龄<0就不让你赋值了

  class A {
    protected num: number;
    //private只能在当前类里面访问，子类就算继承了父类，也访问不到父类的数据(父亲的秘密财产，儿子无法访问)
    //protected可以在当前类和子类中使用。(父亲的公共财产，儿子可以访问)

    constructor(num: number) {
      this.num = num;
    }
  }

  class B extends A {
    test() {
      console.log(this.num);
    }
  }

  class C {
    // 可以直接将属性定义在构造函数中
    //这样this.name = name这些就不用写了
    //属性声明也不用写了
    constructor(public name: string, public age: number) {}
  }

  const c = new C("xxx", 111);

  console.log(c);
})();
