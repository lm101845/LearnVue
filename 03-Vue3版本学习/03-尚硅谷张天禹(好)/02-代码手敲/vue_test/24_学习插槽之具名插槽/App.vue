<!--
 * @Author: liming
 * @Date: 2021-08-03 16:41:23
 * @LastEditTime: 2021-08-18 23:19:59
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\App.vue
-->
<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
      <!-- 我们之前从来没在组件里面写过东西 -->
      <!-- 这个叫做组件标签的标签体内容 -->
      <!-- Vue看到这个img标签后会给你解析的，但是解析完后他不知道往哪里去放 -->
      <!-- 【注意：这个img标签是在App组件里完成解析之后才塞到Category组件中的,ul,video同理】 -->
      <!-- 所以，你完全可以把img,ul,video这3个的样式写到App.vue里面！！！-->
      <!-- 你也可以把样式写到Category组件里面，也是可以的！！！ -->
      <a slot="footer" href="http://www.baidu.com">更多美食</a>
      <!-- slot属性告诉Vue将解析后的img和a放入哪个插槽 -->
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <!-- <li v-for="(item, index) in listData" :key="index">{{ item }}</li> -->
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <div class="foot" slot="footer">
        <!-- <a slot="footer" href="http://www.baidu.com">单机游戏</a>
        <a slot="footer" href="http://www.baidu.com">网络游戏</a> -->

        <a href="http://www.baidu.com">单机游戏</a>
        <a href="http://www.baidu.com">网络游戏</a>
        <!-- 这样就不用给每一个a都来一个slot了，我给最外层的div来一个slot即可 -->
      </div>
      <!-- 插槽是追加的，而不是覆盖的 -->
    </Category>

    <Category title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <!-- 写法1：不好，2个元素里面都写了slot，最好弄一个元素包裹起来，不要用div，用template，它只起到包裹作用，最后会脱落 -->
      <!-- <div class="foot" slot="footer">
        <a href="http://www.baidu.com">经典</a>
        <a href="http://www.baidu.com">热门</a>
        <a href="http://www.baidu.com">推荐</a>
      </div>
      <h4 slot="footer">欢迎前来观影</h4> -->

      <!-- <template slot="footer"> -->
      <!-- 当你使用template后，Vue2.6以后新给你添加了一种写法 -->
      <!-- 注意：v-slot:footer只能用在组件的template标签上面 -->
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.baidu.com">经典</a>
          <a href="http://www.baidu.com">热门</a>
          <a href="http://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
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
@flex: {
  display: flex;
  justify-content: space-around;
  /* 调一下主轴的对齐方式——平分剩余空间*/
};

.container,
.foot {
  @flex();
}

h4 {
  text-align: center;
}
</style>
