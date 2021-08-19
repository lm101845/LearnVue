<!--
 * @Author: liming
 * @Date: 2021-08-17 06:52:29
 * @LastEditTime: 2021-08-17 06:52:30
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\Test.vue
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" :appear="true">
      <h1 v-show="isShow" class="come">单元素-你好啊！</h1>
    </transition>

    <transition-group name="hello" :appear="true">
      <!-- transition只能使用一个元素，多个元素需要使用transition-group -->
      <!-- 并且每个元素都要有一个唯一的key值 -->
      <h1 v-show="!isShow" class="come" key="1">双元素-你好啊！</h1>
      <h1 v-show="isShow" class="come" key="2">双元素-尚硅谷</h1>
    </transition-group>
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
  /* 谁在变就给谁配置：是否匀速，持续时间等 */
  /* transition: 0.5s linear; */
  /* 样式可以不写在这里 */
}

/* 这2个留也行，不留也行 */
/* .hello-enter-active {
  animation: atguigu 1s linear;
}
.hello-leave-active {
  animation: atguigu 1s reverse;
} */

/* 使用transition过滤来实现(写的代码就要稍微多一点了，要写6个class) */
/* 进入的起点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}
/* 进入的终点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}

/* 离开的起点 */
/* .hello-leave {
  transform: translateX(0);
} */

/* 离开的终点 */
/* .hello-leave-to {
  transform: translateX(-100%);
} */
</style>
