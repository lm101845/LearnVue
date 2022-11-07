<!--
 * @Author: liming
 * @Date: 2021-08-03 16:41:23
 * @LastEditTime: 2021-08-19 08:28:12
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\App.vue
-->
<template>
  <div>
    <Count />
    <hr />
    <Person />
  </div>
</template>
<script>
import Count from "./components/Count";
import Person from "./components/Person";
export default {
  name: "App",
  components: { Count, Person },
  mounted() {},
};
</script>

<style lang="less"></style>
