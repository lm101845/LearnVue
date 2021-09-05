<!--
 * @Author: liming
 * @Date: 2021-09-05 13:24:33
 * @LastEditTime: 2021-09-05 16:17:17
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Demo.vue
-->
<template>
  <!-- <h2>姓名：{{ person.name }}</h2>
  <h2>年龄{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}k</h2>
  <hr />
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button> -->

  <!-- 现在我的要求：让模版里的代码简单点，不要有这么多的【person.】 -->
  <!-- 为什么你在模版里面可以使用person，因为你下面return交出去了 -->

  <h2>姓名：{{ name }}</h2>
  <h2>年龄{{ age }}</h2>
  <h2>薪资：{{ salary }}k</h2>
  <hr />
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">涨薪</button>
  <!-- 这样写初次展示没有问题，但是功能废了，点击数据不变化了，丢了响应式了 -->
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    return {
      name: person.name,
      // person.name就是个字符串"张三"
      //   name: person.name<========> name:'张三
      age: person.age,
      //   age: person.age <========> age:18
      salary: person.job.j1.salary,
      //salary: person.job.j1.salary <========> salary:20
      //person,
    };
  },
};
</script>
