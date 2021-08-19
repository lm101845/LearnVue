<!--
 * @Author: liming
 * @Date: 2021-08-17 06:52:29
 * @LastEditTime: 2021-08-17 06:52:30
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\Test.vue
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <h1 v-show="isShow" class="come">你好啊！</h1>
    <h1 v-show="isShow" class="go">我很好！</h1> -->

    <!-- 使用Vue提供的动画效果 -->
    <!-- <transition> -->
    <!-- transition就是一个备胎，最后解析的时候被脱离了 -->
    <transition name="hello" :appear="true">
      <!-- 如果你给这个transition起名字了，下面的v-enter/leave-active就要改成hello-enter/leave-active了->
      <!-- 这个时候Vue就会在合适的时候给你添加动画效果了 -->
      <!-- :appear="true"则刚开始就有动画属性,注意，要写冒号，不然虽然有效果，但是控制台会报错 -->
      <h1 v-show="isShow" class="come">你好啊！</h1>
    </transition>

    <transition name="h2" :appear="true">
      <!-- name的作用就是为了区分不同的transition标签 -->
      <h1 v-show="isShow">尚硅谷</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
  methods: {},
};
</script>

<style scoped>
h1 {
  background-color: skyblue;
}

/* .come { */
/* .v-enter-active { */
.hello-enter-active {
  /* 名字Vue设计好了，不能自己起 */
  animation: atguigu 1s linear;
}
/* .go { */
/* .v-leave-active { */
.hello-leave-active {
  /* 名字Vue设计好了，不能自己起 */
  animation: atguigu 1s reverse;
}

/* 使用动画来写 */
@keyframes atguigu {
  from {
    /* transform: translateX(-100px); */
    /* 从左边而来是负的 */
    transform: translateX(-100%);
    /* 你要把元素全部都推出去，就用百分比 */
  }

  to {
    transform: translateX(0px);
  }
}
</style>
