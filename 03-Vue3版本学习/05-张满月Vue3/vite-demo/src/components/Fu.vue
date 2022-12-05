<!--
 * @Author liming
 * @Date 2022/12/5 21:09
-->
<template>
  <div>
    <h2>父组件</h2>
    <hr>
    <Zi :title="name" :arr=[1,2,3] @on-click="getName" ref="zi"/>
    <!--:title="name"是父传子-->
    <!--@on-click="getName"是子传父-->
  </div>
</template>

<script setup lang="ts">
import Zi from './Zi.vue'
import {onMounted, ref} from "vue";
let name = "孙悟空"

const getName = (arg1:string,arg2:string,arg3:string)=>{
  console.log(arg1,arg2,arg3,'===============>我是父组件')
}


const zi = ref<InstanceType<typeof Zi>>();
//注意：变量zi要和ref里面的zi名字一样

// console.log(zi,'直接在父组件里面拿到子组件里面【自动暴露出来】的信息')   //直接打印是undefined
// console.log(zi.value?.name,'直接在父组件里面拿到子组件里面【自动暴露出来】的信息')  //undefined
//注：想要获取到值，必须要onMounted才行

onMounted(()=>{
  console.log(zi,'直接在父组件里面拿到子组件里面【自动暴露出来】的信息')   //直接打印是undefined
  console.log(zi.value?.name,'直接在父组件里面拿到子组件里面【自动暴露出来】的信息')  //undefined
})
</script>

<style scoped>

</style>
