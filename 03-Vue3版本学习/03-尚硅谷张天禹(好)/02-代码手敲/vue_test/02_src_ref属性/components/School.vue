<!--
 * @Author: liming
 * @Date: 2021-08-04 00:22:35
 * @LastEditTime: 2021-08-04 00:24:41
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\components\School.vue
-->
<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return { name: "尚硅谷", address: "北京-昌平" };
  },
};
</script>

<style>
.school {
  background-color: gray;
}
</style>
