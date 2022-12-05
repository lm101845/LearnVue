<!--
 * @Author liming
 * @Date 2022/12/5 18:18
-->
<template>
<h3>我是组件，好家伙</h3>
  <h2 ref="fullName">{{name}}</h2>
  <button @click="change">修改名字</button>

</template>

<script setup lang="ts">/**
 * 组件生命周期：
 *  1.setup语法糖模式没有[beforeCreate,created]这2个生命周期，可以使用setup进行代替
 *  2.onBeforeMount之前读取不到DOM,onMounted可以读取到
 *  3.onBeforeUpdate获取的是更新之前的DOM,onUpdated获取的是更新之后的DOM
 */
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  ref
} from "vue";

const name = ref<string>('小满')
const fullName = ref<HTMLDivElement>()
const change = ()=>{
  name.value = "孙悟空"
}

console.log("=====================")
console.log('setup')
//创建
onBeforeMount(()=>{
  console.log('创建之前==========>',fullName.value)
})

onMounted(()=>{
  console.log('创建完成==========>',fullName.value)
})

//更新
onBeforeUpdate(()=>{
  console.log('更新之前==========>',fullName.value?.innerText)
  //这个获取的是更新之前的值
})

onUpdated(() => {
  console.log('更新完成==========>',fullName.value?.innerText)

})

onBeforeUnmount(()=>{
  console.log('销毁之前==========>')
})

onUnmounted(() => {
  console.log('销毁完成==========>')

})

//收集依赖的钩子，做调试用的
onRenderTracked((e) => {
  console.log("onRenderTracked",e)
})

//触发依赖更新的时候，会触发这个钩子也是调试用的
onRenderTriggered((e)=>{
  console.log("onRenderTriggered",e)
})
</script>

<style scoped>

</style>
