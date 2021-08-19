<!--
 * @Author: liming
 * @Date: 2021-08-18 22:30:29
 * @LastEditTime: 2021-08-18 22:30:29
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\Category.vue
-->
<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <ul v-show="title == '游戏'">
      <!-- <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li> -->
      <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul>
    <img
      v-show="title == '美食'"
      src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
      alt=""
    />
    <video
      v-show="title == '电影'"
      controls
      src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    ></video>
  </div>
</template>

<script>
export default {
  //   name: Category,
  name: "Category",
  //   没加引号报错，记得加引号！！！！
  props: ["listData", "title"],
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
