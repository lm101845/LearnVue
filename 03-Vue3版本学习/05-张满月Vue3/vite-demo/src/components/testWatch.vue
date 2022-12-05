<!--
 * @Author liming
 * @Date 2022/12/5 8:04
-->
<template>
  case1: <input type="text" v-model="message">
  <hr>
  case2: <input type="text" v-model="message2">
  <hr>
  case3: <input type="text" v-model="message3.foo.bar.name">
  <hr>
  case4-1: <input type="text" v-model="message4.foo.bar.name">
  case4-2: <input type="text" v-model="message4.foo.bar.age">
</template>

<script setup lang="ts">
import {reactive, ref, watch} from "vue";
//监听基本数据类型
let message = ref<string>("小满")
let message2 = ref<string>("大满")
//监听对象(使用ref)
let message3 = ref({
  foo: {
    bar: {
      name: '孙悟空'
    }
  }
})

let message4 = reactive({
  foo: {
    bar: {
      name: '猪八戒',
      age: 18
    }
  }
})
//监听单个数据源——基本数据类型
// watch(message, (newValue, oldValue) => {
//   console.log(newValue, '新值')
//   console.log(oldValue, '旧值')
// })

//监听多个数据源——基本数据类型
// watch([message, message2], (newValue, oldValue) => {
//   //此时newValue,oldValue也会变成一个数组
//   console.log(newValue, '新值')
//   console.log(oldValue, '旧值')
// })

//监听单个数据源——对象(使用ref)
// watch(message3, (newValue, oldValue) => {
//   console.log(newValue, '新值')
//   console.log(oldValue, '旧值')
//   //但是这个新值和旧值的proxy对象是一样的(但监听没有问题)
// },{
//   deep:true
// })

//监听单个数据源——对象(使用reactive)
// watch(message4, (newValue, oldValue) => {
//   console.log(newValue, '新值')
//   console.log(oldValue, '旧值')
//   //但是这个新值和旧值的proxy对象是一样的(但监听没有问题)
// },{
//   deep:true
//   //reactive使用deep和不使用deep效果一样！！！！！！
//   //它在源码里面已经帮你隐形的开启了deep了
// })

//监听一个对象的某个属性，其他属性不监听
watch(() => message4.foo.bar.name, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }, {
      immediate: true,   //立即执行一次
      flush: 'pre'       //pre  组件更新之前调用  sync 同步执行  post 组件更新之后执行
    }
)
</script>

<style scoped>

</style>
