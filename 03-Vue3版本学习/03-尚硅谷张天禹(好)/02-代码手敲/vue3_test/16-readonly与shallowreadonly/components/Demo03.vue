<!--
 * @Author: liming
 * @Date: 2021-09-05 13:24:33
 * @LastEditTime: 2021-09-07 00:08:38
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Demo.vue
-->

<template>
  <h4>当前的y值是：{{ y }}</h4>
  <h4>当前的z值是：{{ z.m }}</h4>
  <button @click="y++">点我y加1</button>
  <!-- <button @click="z.m++">点我z加1</button> -->
  <button @click="z = { m: 888 }">点我替换z</button>
  <!-- 我这里的响应式是z的响应式，里面的m不参与响应式 -->
  <hr />
  <h4>这个人的所有信息：{{ person }}</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄{{ age }}</h2>
  <!-- <h2>薪资：{{ salary }}k</h2> -->
  <h2>薪资：{{ job.j1.salary }}k</h2>
  <hr />
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <!-- <button @click="salary++">涨薪</button> -->
  <button @click="job.j1.salary++">涨薪</button>
  <!-- 这样写初次展示没有问题，但是功能废了，点击数据不变化了，丢了响应式了 -->
</template>

<script>
import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef } from "vue";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      //let person = shallowReactive({
      // shallowReactive表示浅层次的响应式(job改是响应式，而job里面的j1,salary改不是响应式)
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // const name1 = person.name;
    // console.log("@@@@@", name1);

    // const name2 = toRef(person, "name");
    // toRef的作用：帮你把一个不是ref的东西，变成是ref的东西
    // 而且这个name2在模版中使用的时候，是不需要.value的(因为它是ref类型的值，不用.value)
    // console.log("####", name2);

    const x = toRefs(person);

    // let y = ref(0);
    let y = shallowRef(0);
    // 基本类型，ref和shallowRef没有区别

    let z = shallowRef({
      // ref比较圆滑，给它基本数据类型，它用getter,setter自己解决，给它对象，它求助大哥reactive
      // 而shallowRef属于不求人的，给它基本数据类型它能解决，给它对象，它就不管了
      // let z = ref({
      m: 0,
      //   如果你很明确你以后不会修改z里面的m属性，你就用shallowRef，这样性能更好
    });

    // toRef只能处理这个对象的一个属性，而toRefs能批量处理这个对象的所有属性——则你无需第二个参数，直接把第一个参数给它就行了
    console.log("****", x);
    return {
      person,
      ...toRefs(person),
      y,
      z,
    };
  },
};
</script>
