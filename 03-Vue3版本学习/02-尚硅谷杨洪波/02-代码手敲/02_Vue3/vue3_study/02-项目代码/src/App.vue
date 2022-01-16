<!--
 * @Author: liming
 * @Date: 2021-08-02 16:04:30
 * @LastEditTime: 2021-08-02 16:59:44
 * @FilePath: \vue3_study\02-项目代码\src\App.vue
-->
<template>
    <h2>Provide和inject</h2>
    <p>当前的颜色:{{color}}</p>
    <button @click="color='red'">红色</button>
    <button @click="color='yellow'">黄色</button>
    <button @click="color='green'">绿色</button>
    <hr>
    <Son/>
</template>

<script lang="ts">
import { defineComponent,ref,provide } from 'vue';
import Son from './components/Son.vue';


export default defineComponent({
  name: 'App',
  components: {
    Son
  },
  setup(){
      const color = ref('red');
      //提供数据
      provide('color',color);
      return {
          color
      }
  }

});
</script>

<style>

</style>