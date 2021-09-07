<!--
 * @Author: liming
 * @Date: 2021-09-07 08:50:17
 * @LastEditTime: 2021-09-07 08:50:17
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Child.vue
-->
<template>
  <div class="child">
    <h3>我是Child组件</h3>
    <h2>{{ sum }}</h2>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Child",
  //   setup() {
  //     let sum = ref(0);
  //     // return { sum };
  //     return new Promise((resolve, reject) => {
  //       //我的返回值是个实例对象，而且是等了一秒钟之后成功的
  //       setTimeout(() => {
  //         resolve({ sum });
  //       }, 1000);
  //     });
  //   },

  // 写法二
  async setup() {
    let sum = ref(0);
    // return { sum };
    let p = new Promise((resolve, reject) => {
      //我的返回值是个实例对象，而且是等了一秒钟之后成功的
      setTimeout(() => {
        resolve({ sum });
      }, 1000);
    });
    return await p;
  },
};
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>
