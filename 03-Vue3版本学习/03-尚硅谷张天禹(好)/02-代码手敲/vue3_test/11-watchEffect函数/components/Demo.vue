<!--
 * @Author: liming
 * @Date: 2021-09-03 19:01:30
 * @LastEditTime: 2021-09-03 19:01:31
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Demo.vue
-->
<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前的的信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr />

  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}k</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
  <!-- 在Vue3里面你一点击涨薪，watch都能监视到(默认就开启了深度监视)，而在Vue2里面必须要开启深度监视才能监视到 -->
  <!-- 并且Vue3里面的深度监视你无法通过'deep:false'关掉它 -->
</template>

<script>
import { ref, reactive, watch, watchEffect } from "vue";
//watchEffect也是做监视的，但是它不说它具体监视谁
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // console.log(sum);
    // console.log(msg);
    // console.log(person);

    //监视
    // watch(
    //   person,
    //   (newValue, oldValue) => {
    //     console.log("person的值发生变化了", newValue, oldValue);
    //   },
    //   { deep: true }
    // );

    //watchEffect一上来就写函数，并且没有newValue，oldValue()
    watchEffect(() => {
      const x1 = sum.value;
      const x2 = person.job.j1.salary;
      console.log("watchEffect所指定的回调执行了");
      //   watchEffect默认开启了immediate:true
      //   watchEffect很智能，它会看这个函数里面用到了谁，用到了谁就监视谁
      //   它智能到什么程度，它能够分离出多层对象
    });

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>
