<!--
 * @Author: liming
 * @Date: 2021-08-28 18:26:54
 * @LastEditTime: 2021-08-28 18:55:47
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\App.vue
-->
<template>
  <!-- 现在Vue3组件中的模版结构可以不写根标签了！！！ -->
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style></style>
