<!--
 * @Author: liming
 * @Date: 2021-08-04 00:22:35
 * @LastEditTime: 2021-08-04 03:18:28
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\components\School.vue
-->
<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷学校水电费",
      address: "北京",
    };
  },
  methods: {
    test() {
      this.hello();
    },
  },
};
</script>

<style scoped lang="css">
/* 你在这些组件里写的样式，最终都是汇总到一起的 */
/* 既然它们汇总到一起，就会出现一个问题：【类名冲突 】 */
/* 但是写了scoped样式就有了作用域了，就解决这个问题了 */
.demo {
  background-color: skyblue;
}
</style>
