<!--
 * @Author: liming
 * @Date: 2021-08-23 22:55:15
 * @LastEditTime: 2021-08-26 01:24:00
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\pages\Detail.vue
-->
<template>
  <div>
    <ul>
      <!-- <li>消息编号：{{ $route.query.id }}</li> -->
      <!-- <li>消息标题：{{ $route.query.title }}</li> -->
      <!-- 如何把传递过来的路径参数【?id=666&title=你好啊"】参数放到问号里面？？ -->
      <!-- <li>消息编号：{{ $route.params.id }}</li>
      <li>消息标题：{{ $route.params.title }}</li> -->
      <!-- <li>消息标题：{{ $route.params.title }}</li>
      <li>消息标题：{{ $route.params.title }}</li>
      <li>消息标题：{{ $route.params.title }}</li>
      <li>消息标题：{{ $route.params.title }}</li> -->

      <li>消息编号：{{ id }}</li>
      <li>消息标题：{{ title }}</li>
      <!-- 如果有很多，那模版里这么写就很冗余了，我想要让模版里的写法尽可能简单，不要一遍一遍的写$route.params -->
      <!-- 方法一：使用计算属性——但是这样你并没有把问题解决，你反而把问题弄得更复杂了(如果我有6个，那你要写6个计算属性吗？？？)-->
      <!-- 方法二：借助路由里面一个全新的配置项：props -->
      <!-- <li>a:{{ a }}</li>
      <li>b:{{ b }}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  //   props: ["a", "b"],
  props: ["id", "title"],
  mounted() {
    console.log(this.$route);
    console.log(this.$route.query);
  },
  //   computed: {
  //     id() {
  //       return this.$route.params.id;
  //     },
  //     title() {
  //       return this.$route.params.title;
  //     },
  //   },
};
</script>

<style></style>
