<!--
 * @Author: liming
 * @Date: 2021-08-18 22:30:29
 * @LastEditTime: 2021-08-18 23:26:49
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\Category.vue
-->
<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <!-- slot标签放在哪里，Vue就会把解析的内容放到哪里，所以位置很重要，不要放错位置了 -->
    <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
    <!-- slot是一个特殊的标签，用于解决Vue不知道把你写在Vue组件里面的内容解析完后不知道往哪里放的问题 -->
    <!-- slot有插槽的意思，我们管这种插槽叫默认插槽——只写了一个-->
  </div>
</template>

<script>
export default {
  //   name: Category,
  name: "Category",
  //   没加引号报错，记得加引号！！！！
  //   props: ["listData", "title"],
  //   使用插槽后就不用再传listData了
  props: ["title"],
};
</script>

<style lang="less">
.category {
  background-color: skyblue;
  /* 这里宽高老师是静心设计过的 */
  width: 200px;
  height: 300px;
  h3 {
    text-align: center;
    background-color: orange;
  }
  img {
    width: 100%;
  }
  video {
    width: 100%;
  }
}
</style>
