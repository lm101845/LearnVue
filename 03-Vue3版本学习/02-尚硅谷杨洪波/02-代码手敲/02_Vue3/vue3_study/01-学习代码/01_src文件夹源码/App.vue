<!--
 * @Author: liming
 * @Date: 2021-08-02 16:04:30
 * @LastEditTime: 2021-08-02 16:15:45
 * @FilePath: \02_Vue3\vue3_study\src\App.vue
-->
<template>
<!-- vue2中的html模版中必须要有一对根标签，而vue3组件的html模版中可以没有根标签 -->
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- 使用一个子级组件 -->
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
//这里可以使用ts代码
//defineComponent函数，目的是定义一个组件
import { defineComponent } from 'vue';
//引入一个子级组件
import HelloWorld from './components/HelloWorld.vue';

//暴露出去一个定义好的组件
export default defineComponent({
    //当前组件的名字是App
  name: 'App',
  //注册组件
  components: {
      //注册一个子级组件
    HelloWorld
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
