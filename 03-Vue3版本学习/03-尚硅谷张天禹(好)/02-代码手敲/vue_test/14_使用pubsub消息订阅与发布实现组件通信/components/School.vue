<!--
 * @Author: liming
 * @Date: 2021-08-04 00:22:35
 * @LastEditTime: 2021-08-16 22:37:25
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\School.vue
-->
<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
// pubsub它是一个对象，它身上有很多有用的方法
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  mounted() {
    //School是需要数据，需要消息的一方，订阅消息，消息名随便写，这里是hello
    // pubsub.subscribe("hello", (a, b) => {
    this.pubId = pubsub.subscribe("hello", (msg, data) => {
      console.log(this);
      //如果你写普通函数的话，这个this是undefined，如果是箭头函数的话，才是Vue实例对象
      // 他这个库的设计有点像定时器，你每次订阅的时候都能够收到订阅的id,而且每次订阅id都不一样
      //当你想取消订阅的时候，作者让你通过id来取消
      console.log("有人发布了hello消息，hello消息的订阅成功", msg, data);
      //   a是hello，是消息名，b才是真正的数据
    });
  },
  beforeDestroy() {
    //this.$bus.$off('hello')
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped lang="css">
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>
