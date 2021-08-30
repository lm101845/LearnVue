<!--
 * @Author: liming
 * @Date: 2021-08-28 18:26:54
 * @LastEditTime: 2021-08-30 08:22:06
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\App.vue
-->
<template>
  <!-- 现在Vue3组件中的模版结构可以不写根标签了！！！ -->
  <!-- Vue3写法 -->
  <h1>一个人的信息——Vue3写法</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="sayHello">Vue3说话</button>
  <!-- setup函数必须要有返回值，否则这里是读不出来的 -->
  <hr />

  <!-- Vue2写法 -->
  <h1>一个人的信息——Vue2写法</h1>
  <h2>性别:{{ sex }}</h2>
  <button @click="sayWelcome">Vue2说话</button>
  <hr />
  <!-- 测试读取Vue2,Vue3写法 -->
  <button @click="test1">测试一下Vue2的配置中去读取Vue3的数据和方法</button>
  <br />
  <br />
  <button @click="test2">测试一下Vue3的setup配置中去读取Vue2的数据和方法</button>
  <br /><br />
  <h2>a的值是听Vue2的100还是听Vue3的200呢？——{{ a }}</h2>
  <!-- Vue2和Vue3冲突的时候以Vue3的为主 -->
</template>

<script>
import { h } from "vue";
export default {
  name: "App",
  //   注意：这里只是测试一个setup函数，暂时不考虑响应式的问题
  //   注意：Vue3是向下兼容的，Vue2里面的data等属性也是可以写的

  //Vue2里面的写法(也能在Vue3里面用)
  //   对象形式:key-value
  data() {
    return {
      sex: "男",
      a: 100,
    };
  },
  methods: {
    sayWelcome() {
      alert("欢迎来到尚硅谷学习");
    },
    test1() {
      console.log("读取vue2数据", this.sex);
      console.log("读取vue3数据", this.name);
      console.log("读取vue3数据", this.age);
      this.sayHello();
    },
  },

  //Vue3新语法
  //   async setup() {
  //   setup不能被async修饰！！！
  // 一个返回值被async修饰了，它的返回值就不再是一个单纯的对象了，而是一个Promise对象，你得用then才能拿到数据
  setup() {
    //setup是Vue3中的一个新的配置项，它的值是一个函数
    //setup是所有composition API(组合API)
    //组件中所用到的：数据、方法等等，均要配置在setup中

    //数据
    //这是是在函数体里面，就正常写代码就好了
    let name = "张三";
    let age = 18;
    let a = 200;
    // 不用写data,所谓的数据就是在setup函数中直接定义变量
    // 使用let是因为这些数据以后有可能发生改变

    //方法
    function sayHello() {
      //   alert(`我叫${this.name},我${this.age}岁了`);
      //   这里不需要写this，因为作用域的问题，setup是一个函数，name,age都在这个函数里面
      //   setup函数里面我又写了一个函数，这里面没有name,age，就会往外找，一找就能找到了
      alert(`我叫${name},我${age}岁了,你好啊!`);
    }

    function test2() {
      console.log(name);
      console.log(age);
      console.log(sayHello);
      console.log(sayHello);
      console.log("=============上面的Vue3的数据，肯定能读取到");
      console.log(this.sex); //undefined  ——读不出来Vue2的配置！！！
      console.log(this.sayWelcome); //undefined  ——读不出来Vue2的配置！！！
    }
    //setup有返回值，最常用的是返回一个对象（常用）
    //1.返回对象写法：
    return {
      //   xingming: name,
      name,
      age,
      sayHello,
      test2,
      a,
      // 这样写会触发对象的简写形式
    };

    //2.返回渲染函数写法——作为一个了解即可，用的不多
    // return () => {
    //   // 第一个return是把整个东西给叫出去
    //   return h("h1", "尚硅谷");
    //   //h调用的时候传入2个参数：(你想要把哪种元素放到页面中，元素的文字[内容])
    //   //需要把h函数调用的结果交出去，所以要写return
    //   //里面的return是返回h的调用结果
    //   //一共有2个return
    // };
    //vue2里面的渲染函数:render:h=>h(App)
    // vue3里面也有渲染函数，但是需要你手动的引用一下

    // 精简写法
    return () => h("h1", "尚硅谷");
  },
};
</script>

<style></style>
