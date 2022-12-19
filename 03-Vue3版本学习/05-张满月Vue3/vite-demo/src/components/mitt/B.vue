<!--
 * @Author liming
 * @Date 2022/12/19 11:22
-->
<template>
  <div>
    <h1>我是B</h1>
  </div>
</template>

<script setup lang="ts">
import {getCurrentInstance} from "vue";

const instance = getCurrentInstance();
// instance?.proxy?.$Bus.on('zidingyishijianming',(str)=>{
//   console.log('打印一下自定义事件里面的str',str)
// })

instance?.proxy?.$Bus.on('*',(type,str)=>{
  console.log('打印一下自定义事件里面的str',type,str)
})
</script>

<style scoped>

</style>
