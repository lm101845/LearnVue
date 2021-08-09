<!--
 * @Author: liming
 * @Date: 2021-08-04 00:22:35
 * @LastEditTime: 2021-08-04 03:15:27
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\components\Student.vue
-->
<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <input type="text" v-fbind:value="name" />
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
};
</script>

<style></style>
