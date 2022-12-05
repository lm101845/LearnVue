<!--
 * @Author liming
 * @Date 2022/12/5 18:01
-->
<template>
  <input id="ipt" type="text" v-model="message">
  <input type="text" v-model="message2">
  <button @click="stopWatch">停止监听</button>
</template>

<script setup lang="ts">
    import {ref, watchEffect} from "vue";

    let message = ref<string>("飞机")
    let message2 = ref<string>("飞机杯")

    const stop = watchEffect((onInvalidate) => {
      let ipt:HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement;
      //它是非惰性的，你一进入页面，它就会帮你自动调用——勤快
      //而watch只有值改变的时候，或者你配置选项，它才会帮你调用
      console.log('message: ' + message.value)
      // console.log('message2: ' + message2.value)
      // console.log(ipt,'###########')  //正常为null  因为此时DOM还没有加载
      //onInvalidate是一个回调函数，它会帮我们之前做一些事情：防抖，清除接口等
      onInvalidate(()=>{
        console.log('帮我们在之前做一些事情')
      })

    },{
      flush:'post',
      //但是如果加了flush:'post'，ipt就不为空了

      //它还提供了一个帮我们进行调试的工具：
      onTrigger(e){
        debugger
      }
    })

    const stopWatch = ()=>stop();
</script>

<style scoped>

</style>
