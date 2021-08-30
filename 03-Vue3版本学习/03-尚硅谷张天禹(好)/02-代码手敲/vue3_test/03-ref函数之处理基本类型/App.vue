<!--
 * @Author: liming
 * @Date: 2021-08-28 18:26:54
 * @LastEditTime: 2021-08-30 08:45:27
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\App.vue
-->
<template>
  <h1>一个人的信息——Vue3写法</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <!-- 模版里面按照常理来说应该是name.value,age.value，但是不需要你再加【.value】了，加了还出错，它自动帮你加的 -->
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from "vue";
// 这个ref是一个函数，不是Vue2里面的那个属性(用于打标签用的，类似id的用法),二者只是名字一样
export default {
  name: "App",
  setup() {
    // let name = "张三";
    // let age = 18;
    // Vue3没监测到的问题出在这里：你这么定义name和age,那只是普通的字符串和数据，无论它怎么改Vue不会监测到的，及name,age不是响应式数据
    let name = ref("张三");
    let age = ref(18);
    // ref函数的用法极其简单，就是将你的数据作为参数传递给ref函数
    // 将你的数据交给ref函数，它来加工一下，然后才存到name和age中
    // Vue3中通过ref来实现响应式也是通过Object.defineProperty(getter,setter)来实现的
    function changeInfo() {
      //   (name = "李四"), (age = 48);
      //   你不能这么改，这么改数据不是响应式的
      name.value = "李四";
      age.value = 27;
      console.log(name);
      console.log(age);
      //   注意：这里数据其实改了，但是Vue不认(没有监测到)，页面上还是原来的数据
      //   经过ref加工完的name和age,它的本质就是一个对象,它是RefImpl构造函数的实例对象——标准称呼：引用实现的实例对象,简称引用对象
      //   RefImpl单词拆解：Ref——reference(引用) Impl——implement(实现)
    }
    return {
      name,
      age,
      changeInfo,
    };
  },
};
</script>

<style></style>
