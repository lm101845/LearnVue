<!--
 * @Author: liming
 * @Date: 2021-08-03 16:41:23
 * @LastEditTime: 2021-08-17 00:06:41
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\App.vue
-->
<template>
  <div>
    <Test />
    <hr />
    <Test2 />
    <hr />
    <Test3 />
  </div>
</template>

<script>
import Test from "./components/Test";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
export default {
  name: "App",
  components: { Test, Test2, Test3 },
};
</script>

<style></style>
