<!--
 * @Author liming
 * @Date 2022/12/9 12:18
-->
<template>
<div class="content">
  <button @click="flag = !flag">Switch</button>
<!--  <transition name="fade">-->
  <transition leave-active-class="animate_animated animate_fadeOut" enter-active-class="animate_animated animate_bounce">
    <div v-if="flag" class="box"></div>
  </transition>
</div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import 'animate.css'

const flag = ref<boolean>(true)
</script>

<style scoped lang="less">
.box{
  width: 200px;
  height: 200px;
  background-color: pink;
}
//显示====================================
//进入之前
.fade-enter-from{
  width: 0;
  height: 0;
}

.fade-enter-active{
transition: all 1.5s ease;
}

//过渡结束
.fade-enter-to{
  width: 200px;
  height: 200px;
  //transform: scale(2);
}

//隐藏====================================
.fade-leave-from{
  width: 200px;
  height: 200px;
  transform: rotate(360deg);
}

.fade-leave-active{
  transition: all 5s ease;
}

.fade-leave-to{
width: 0;
  height: 0;
}
</style>
