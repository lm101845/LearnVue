
<template>
  <div>
<!--    {{message}}-->
<!--    <hr>-->
<!--    {{num ? "我是小憨批" :"我是假的"}}-->
<!--    <div v-for="(item,index) in Arr" key="index" >-->
<!--        {{item}}-->
<!--    </div>-->
<!--    <testRef></testRef>-->
<!--    <testReactive/>-->
    <testTo/>
  </div>

</template>

<script setup lang="ts">
import testRef from "../src/components/testRef.vue"
 // const message:string = "我是真男人"
 // const num:number = 0
 // const Arr:Array<string> =['A', 'B', 'C', 'D']
 // Arr.splice(2,0,'E')
 //splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
 //在元素2【前面】插入

// import testReactive from "../src/components/tesReactive.vue"
import testTo from "../src/components/testTo.vue"

</script>

<style scoped>

</style>
