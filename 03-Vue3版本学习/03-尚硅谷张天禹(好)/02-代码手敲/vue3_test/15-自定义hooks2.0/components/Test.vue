<!--
 * @Author: liming
 * @Date: 2021-09-05 16:02:44
 * @LastEditTime: 2021-09-05 16:02:45
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Test.vue
-->
<template>
  <div>
    <h2>我是Test组件</h2>
    <h2>我是Test, 当前点击时鼠标的坐标为：x：{{ point.x }}，y：{{ point.y }}</h2>
  </div>
</template>

<script>
import usePoint from "../hooks/usePoint";
export default {
  name: "Test",
  setup() {
    const point = usePoint();
    return { point };
  },
};
</script>

<style scoped></style>
