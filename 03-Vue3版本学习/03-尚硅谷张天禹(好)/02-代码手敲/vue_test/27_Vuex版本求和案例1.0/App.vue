<!--
 * @Author: liming
 * @Date: 2021-08-03 16:41:23
 * @LastEditTime: 2021-08-19 08:28:12
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\App.vue
-->
<template>
  <div>
    <Count />
  </div>
</template>
<script>
import Count from "./components/Count.vue";
export default {
  name: "App",
  components: { Count },
  mounted() {
    // console.log("App", this);
    // 这个是组件的实例对象
    // vm身上也有store
  },
};
</script>

<style lang="less"></style>
