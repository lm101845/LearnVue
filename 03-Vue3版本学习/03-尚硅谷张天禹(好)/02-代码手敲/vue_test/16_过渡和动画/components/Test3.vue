<!--
 * @Author: liming
 * @Date: 2021-08-17 06:52:29
 * @LastEditTime: 2021-08-17 06:52:30
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\Test.vue
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__headShake"
      leave-active-class="animate__bounceOutUp"
    >
      <!-- 这里的name名字是固定的 -->
      <h1 v-show="isShow" class="come" key="1">双元素-你好啊！</h1>
      <h1 v-show="isShow" class="come" key="2">双元素-尚硅谷</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
// 因为我引入的是样式库，所以直接写名字就可以了,不用写from ..了
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
  methods: {},
};
</script>

<style scoped>
h1 {
  background-color: skyblue;
}
</style>
