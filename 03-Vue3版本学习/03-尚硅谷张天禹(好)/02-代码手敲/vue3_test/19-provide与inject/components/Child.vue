<!--
 * @Author: liming
 * @Date: 2021-09-07 08:50:17
 * @LastEditTime: 2021-09-07 08:50:17
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Child.vue
-->
<template>
  <div class="child">
    <h3>我是App组件(子)</h3>
    <Son />
  </div>
</template>

<script>
import { inject } from "vue";
import Son from "./Son";
export default {
  name: "Child",
  components: { Son },
  setup() {
    let x = inject("car");
    console.log(x, "child");
    // 注意：父传子请用这个世界上最简单的东西:props
  },
};
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>
