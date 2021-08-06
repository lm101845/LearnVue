<!--
 * @Author: liming
 * @Date: 2021-08-03 16:41:23
 * @LastEditTime: 2021-08-04 17:52:07
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\App.vue
-->
<template>
  <div>
    <h1 class="title">你好啊</h1>
    <hr />
    <School />
    <hr />
    <Student />
    <!--  注意：不是看你【使用】的顺序，而是看你【引用】的顺序-->
  </div>
</template>

<script>
//引入Student组件
import Student from "./components/Student";
import School from "./components/School";
// 你先引入School组件，再引入Student组件，最终样式就以下面的为准了，被覆盖了(后来者居上)
// 注意：不是看你【使用】的顺序，而是看你【引用】的顺序
// 使用一个scoped属性即可解决这个问题，提供了一个局部的作用域
export default {
  name: "App",
  components: { Student, School },
};
</script>

<style scoped>
/* App组件里面特殊，scoped没有效果 */
/* App里面如果写样式了，可能是很多组件都在用 */
.title {
  color: red;
}
</style>
