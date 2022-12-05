<!--
 * @Author liming
 * @Date 2022/12/5 21:09
-->
<template>
  <div>
    <h2>子组件</h2>
    <h2>父组件传过来的值:{{title}}</h2>
    <h2>{{arr}}</h2>
    <hr>
    <button @click="send">给父组件传值</button>
  </div>
</template>

<script setup lang="ts">
//接收父组件传过来的值
//默认模式：
//   const props = defineProps({
//     title:{
//       type:String,
//       default:"默认姓名"
//     }
//   })

//泛型字面量模式
//withDefaults是TS里面特有的，定义默认值的方法
const props = withDefaults( defineProps<{
  title:string,
  arr:number[]
}>(),{
  arr:()=>[666]   //arr默认值为666的数组
})

// console.log(title,'title')
//子组件不能直接这样使用父组件传过来的值
//可以通过props.title来拿到title值
console.log(props.title,'--父组件传过来的值')


//defineEmits：子传父方法
//写法1：也可以同时定义多个自定义事件
// const emit = defineEmits(['on-click','on-click2','on-click3'])

//写法2：可以同时定义多个自定义事件
const emit = defineEmits<{
  (e:'on-click',arg1:string,arg2:string,arg3:string):void
  (e:'on-click2',arg1:string,arg2:string,arg3:string):void
  (e:'on-click3',arg1:string,arg2:string,arg3:string):void
}>()

const send = ()=>{
  emit('on-click','传参1','传参2','还能继续传参3')  //点击按钮，派发事件
}

//给父组件暴露一个name
defineExpose({
  name:'子组件暴露给父组件的变量',
  open:()=>console.log('子组件暴露给父组件的方法')
})
</script>

<style scoped>

</style>
