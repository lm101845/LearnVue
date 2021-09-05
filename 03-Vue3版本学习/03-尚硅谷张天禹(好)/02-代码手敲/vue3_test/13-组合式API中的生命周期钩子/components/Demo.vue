<!--
 * @Author: liming
 * @Date: 2021-09-03 19:01:30
 * @LastEditTime: 2021-09-03 19:01:31
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Demo.vue
-->
<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
//watchEffect也是做监视的，但是它不说它具体监视谁
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    console.log("setup");
    //通过组合式API的形式去使用生命周期钩子
    // 注意：在setup()里面没有beforeCreate和created，统统对应为setup()
    onBeforeMount(() => {
      console.log("=====onBeforeMount=======");
    });

    onMounted(() => {
      console.log("======onMounted======");
    });

    onBeforeUpdate(() => {
      console.log("======onBeforeUpdate======");
    });

    onUpdated(() => {
      console.log("======onUpdated======");
    });

    onBeforeUnmount(() => {
      console.log("=====onBeforeUnmount=======");
    });

    onUnmounted(() => {
      console.log("======onUnmounted======");
    });
    console.log("setup2.0");
    return {
      sum,
    };
  },
  //通过配置项的形式使用生命周期钩子——注意：要在Demo组件里写，而不是在App组件里写
  //#region
  beforeCreate() {
    console.log("===============beforeCreate================");
  },
  created() {
    console.log("===============Created================");
  },
  beforeMount() {
    console.log("===============BeforeMount================");
  },
  mounted() {
    console.log("===============Mounted================");
  },
  beforeUpdate() {
    console.log("===============beforeUpdate================");
  },
  updated() {
    console.log("===============Updated================");
  },
  beforeUnmount() {
    console.log("===============BeforeUnmount================");
  },
  unmounted() {
    console.log("===============unmounted================");
  },
  //#endregion
};
</script>
