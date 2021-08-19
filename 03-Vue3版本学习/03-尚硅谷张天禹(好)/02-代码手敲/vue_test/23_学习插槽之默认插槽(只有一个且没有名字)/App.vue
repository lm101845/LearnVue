<!--
 * @Author: liming
 * @Date: 2021-08-03 16:41:23
 * @LastEditTime: 2021-08-18 23:19:59
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\App.vue
-->
<template>
  <div class="container">
    <Category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
      <!-- 我们之前从来没在组件里面写过东西 -->
      <!-- 这个叫做组件标签的标签体内容 -->
      <!-- Vue看到这个img标签后会给你解析的，但是解析完后他不知道往哪里去放 -->
      <!-- 【注意：这个img标签是在App组件里完成解析之后才塞到Category组件中的,ul,video同理】 -->
      <!-- 所以，你完全可以把img,ul,video这3个的样式写到App.vue里面！！！-->
      <!-- 你也可以把样式写到Category组件里面，也是可以的！！！ -->
    </Category>

    <Category title="游戏">
      <ul>
        <!-- <li v-for="(item, index) in listData" :key="index">{{ item }}</li> -->
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>

    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>
<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
};
</script>

<style lang="less">
.container {
  display: flex;
  /* 调一下主轴的对齐方式——平分剩余空间*/
  justify-content: space-around;
}
</style>
