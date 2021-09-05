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
import { ref, reactive, watch } from "vue";
// vue3里面的watch也是变成了一个组合式的API，用法也极其简单——vue3里面的 watch是一个函数
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = ref({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    console.log(sum);
    console.log(msg);
    console.log(person);

    //特殊情况
    // watch(sum.value, (newValue, oldValue) => {
    // 这里你不能点value，你只要【.value】了，那你就把0真正的值给取出来了，同学，你怎么能直接监测一个0呢？？？？？
    //   你监测的东西得是一个真正能保存数据的一个结构
    watch(sum, (newValue, oldValue) => {
      // 总结：ref定义的基本数据类型使用watch是不需要加【.value】的！！！！
      console.log("sum的值变化了", newValue, oldValue);
    });

    // watch(person.value, (newValue, oldValue) => {
    //   // person.value是Proxy实例对象，即这个value是借助reactive这个函数生成的
    //   // 那么我在这里监视的时候，监视的是reactive所定义的数据
    //   // watch(person, (newValue, oldValue) => {
    //   // 这里的person是ref定义的
    //   console.log("person的值发生变化了", newValue, oldValue);
    // });

    //或者不监视person.value,而是添加一个{deep: true}属性也是可以的
    watch(
      person,
      (newValue, oldValue) => {
        console.log("person的值发生变化了", newValue, oldValue);
      },
      { deep: true }
    );

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>
