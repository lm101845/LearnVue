<!--
 * @Author: liming
 * @Date: 2021-09-05 13:24:33
 * @LastEditTime: 2021-09-07 00:08:38
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Demo.vue
-->

<template>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">点我++</button>
  <hr />
  <h2>姓名：{{ name }}</h2>
  <h2>年龄{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}k</h2>
  <!-- <h2>座驾信息：{{ car }}</h2> -->
  <h2 v-show="person.car">座驾信息：{{ person.car }}</h2>
  <hr />
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <hr />
  <button @click="showRawPerson">输出最原始的person</button>
  <hr />
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name += '!'">换车名</button>
  <button @click="person.car.price++">换价格</button>
  <button @click="changePrice">换价格2.0</button>
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from "vue";
export default {
  name: "Demo",
  setup() {
    //   setup在整个工作过程当中只调用了一次
    //   有时候我不希望别人修改sum,person,不希望它们有响应式
    let sum = ref(0);
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
      //   car: {},
      // 第一种解决方法：写一个空car
    });

    function showRawPerson() {
      console.log(person);
      //   Proxy {name: "张三", age: 18, job: {…}}
      //   注意：我直接输出的person肯定不是最原始的！！！！！！！！！！！

      const p = toRaw(person);
      console.log(p);
      p.age++;
      //这个p已经不是响应式的数据了，是个普普通通的对象了，所以这样写年龄肯定不会变的

      //   const sum = toRaw(sum);
      //   console.log(sum);
      //undefined
      //说明一个问题：toRaw只能处理reactive所缔造的响应式对象，ref不行，行不通
    }

    function addCar() {
      let car = { name: "奔驰", price: "40" };
      //   person.car = car;
      //   人家用了Proxy代理，能够捕获你对对象的任何一个操作，你【person.car = car】这个操作也是响应式的！！！
      person.car = markRaw(car);
      //   人家car这个对象层级很深，并且不希望你修改
      //   经过markRaw标记之后，这个car永远不会成为响应式数据了
    }

    function changePrice() {
      person.car.price++;
      console.log(person.car.price);
    }
    return {
      ...toRefs(person),
      //表示把personde的对象拆解开，然后把里面的属性一个一个的交给模版
      //   这个时候就不能拆开传了，而是整个传
      person,
      //第二种解决方法：把这person整个响应式对象都交出去，这个响应式对象发生任何变化(如新增car属性)都能被Vue所监测到

      sum,
      showRawPerson,
      addCar,
      changePrice,
    };
  },
};
</script>
