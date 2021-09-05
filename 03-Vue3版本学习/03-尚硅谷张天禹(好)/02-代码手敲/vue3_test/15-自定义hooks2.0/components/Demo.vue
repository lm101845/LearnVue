<!--
 * @Author: liming
 * @Date: 2021-09-03 19:01:30
 * @LastEditTime: 2021-09-03 19:01:31
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Demo.vue
-->
<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前点击时鼠标的坐标为：x：{{ point.x }}，y：{{ point.y }}</h2>
  <!-- 我给谁绑定事件？ 是屏幕中可以看到的整个区域，也就是window-->
  <!-- 什么时候绑定合适呢？组件挂载完毕我绑定事件比较合适 -->
  <!-- 这里我就不写正常配置的API了，而是在setup里面写组合式的生命周期钩子,那我就得引入onMounted -->
</template>

<script>
import { ref } from "vue";
import usePoint from "../hooks/usePoint";
// usePoint是函数类型

//watchEffect也是做监视的，但是它不说它具体监视谁
export default {
  name: "Demo",
  setup() {
    //数据
    let sum = ref(0);
    let point = usePoint();
    // 你既然是函数，那我就敢调用，我就敢接
    return {
      sum,
      point,
    };
  },
};
</script>
