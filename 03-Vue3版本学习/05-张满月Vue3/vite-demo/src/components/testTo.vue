<!--
 * @Author liming
 * @Date 2022/11/18 19:04
-->
<template>
  <div>
    2123
    {{man}}
    <button @click="change">修改</button>
    <hr>
    toRef: {{ like }}
    <hr>
    toRefs：{{name}}--{{age}}--{{like}}
  </div>
</template>

<script setup lang="ts">
import {reactive, toRaw, toRef} from "vue";

const man = {name: "小满", age: 23, like: "JK"}
const man1 = reactive({name: "小满", age: 23, like: "JK"})
const like = toRef(man1,"like")
//把对象man1中的like属性提取出来，单独变成响应式的

// useDemo(toRef(man1,"like"))

//手写toRefs源码
const toRefs = <T extends object>(object:T)=>{
  const map:any = {}
  for (let  key in object) {
    map[key] = toRef(object,key)
  }
  return map;
}

const {name,age,like:any} = toRefs(man1)
//使用toRefs解构响应式对象，不能直接解构，否则会丧失响应式

console.log()
const change = ()=>{
  // man.like = "洛丽塔";  //这样改了没用，页面不变
  //toRef只能修改响应式对象的值，非响应式视图毫无变化(但数据控制台变了)
  // console.log(man)
  like.value = "洛丽塔"
  console.log(like)

  console.log(man1,"==",toRaw(man1))
}
</script>

<style scoped>

</style>
