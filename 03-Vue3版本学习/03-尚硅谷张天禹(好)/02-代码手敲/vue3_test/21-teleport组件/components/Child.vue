<!--
 * @Author: liming
 * @Date: 2021-09-07 08:50:17
 * @LastEditTime: 2021-09-07 08:50:17
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Child.vue
-->
<template>
  <div class="child">
    <h3>我是Child组件</h3>
    <Son />
  </div>
</template>

<script>
import Son from "./Son";
export default {
  name: "Child",
  components: { Son },
};
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>
