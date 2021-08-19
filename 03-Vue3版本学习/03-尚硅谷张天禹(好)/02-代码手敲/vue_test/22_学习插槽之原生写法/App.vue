<!--
 * @Author: liming
 * @Date: 2021-08-03 16:41:23
 * @LastEditTime: 2021-08-17 00:06:41
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\App.vue
-->
<template>
  <div class="container">
    <!-- <Category :foods="foods" />
    <Category :games="games" />
    <Category :films="films" /> -->
    <!-- 你最好不要这样传，你这样传别人那边还要声明确定他接收你传的数据(微信转账要确认收款) -->
    <!-- 如果别人要是复用了你的组件三四十次，那你还要接收三四十次？？不合适-->

    <Category :listData="foods" title="美食" />
    <Category :listData="games" title="游戏" />
    <Category :listData="films" title="电影" />
    <!-- 统一传listData，后面的东西你再动态的传 -->
    <!-- 这样别人接收数据就轻松了，直接写listData就可以了 -->
    <!-- 除了传listData，还要传分类的标题 -->
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

<style>
.container {
  display: flex;
  /* 调一下主轴的对齐方式——平分剩余空间*/
  justify-content: space-around;
}
</style>
