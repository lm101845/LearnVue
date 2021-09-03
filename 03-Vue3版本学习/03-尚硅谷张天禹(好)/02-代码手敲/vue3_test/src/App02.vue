<!--
 * @Author: liming
 * @Date: 2021-08-28 18:26:54
 * @LastEditTime: 2021-08-30 10:17:35
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\App.vue
-->
<template>
  <Demo msg="你好啊啊" school="尚硅谷" @hello="showHelloMsg">
    <!-- <span>尚硅谷</span> -->
    <!-- <template slot="qwe"> -->
    <template v-slot:qwe>
      <!-- API兼容的问题，在Vue3里面尽量使用v-slot:这种写法，不要用slot=''这种写法 -->
      <span>尚硅谷</span>
    </template>

    <template v-slot:asd>
      <!-- API兼容的问题，在Vue3里面尽量使用v-slot:这种写法，不要用slot=''这种写法 -->
      <span>尚硅谷</span>
    </template>
  </Demo>
  <!-- 注意：给组件里绑定的是【自定义事件】，而不是像onclick那样的正常事件 -->
  <!-- 当有人触发hello事件时，就会运行showHelloMsg这个函数 -->
</template>

<script>
import Demo from "./components/Demo";
export default {
  name: "App",
  components: { Demo },
  setup() {
    function showHelloMsg(value) {
      alert(`你好啊，你触发了hello事件，我收到的参数是${value}!`);
    }

    // return showHelloMsg;
    //   return后面必须要加大括号，否则会报错！！！！
    return {
      showHelloMsg,
    };
  },
};
</script>

<style></style>
