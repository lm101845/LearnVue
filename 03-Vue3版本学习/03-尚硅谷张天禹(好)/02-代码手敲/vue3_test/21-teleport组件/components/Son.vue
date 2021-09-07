<!--
 * @Author: liming
 * @Date: 2021-09-07 08:50:25
 * @LastEditTime: 2021-09-07 08:50:25
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Son.vue
-->
<template>
  <div class="son">
    <h3>我是Son组件</h3>
    <Dialog />
  </div>
</template>

<script>
import Dialog from "./Dialog";
export default {
  name: "Son",
  components: { Dialog },
};
</script>

<style>
.son {
  background-color: orange;
  padding: 10px;
}
</style>
