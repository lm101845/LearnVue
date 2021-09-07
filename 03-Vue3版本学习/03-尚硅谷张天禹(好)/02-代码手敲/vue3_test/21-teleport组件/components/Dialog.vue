<!--
 * @Author: liming
 * @Date: 2021-09-07 09:59:59
 * @LastEditTime: 2021-09-07 09:59:59
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Dialog.vue
-->
<template>
  <div>
    <!-- v-if不要给弹窗，给遮罩层，遮罩层一出来，弹窗顺带着也出来了 -->
    <!-- 弹窗在遮罩层里面，所以再外面再包一个div -->
    <button @click="isShow = true">点我弹个窗</button>
    <!-- <div class="dialog" v-if="isShow">
      <h3>我是一个弹窗</h3>
      <h4>一些内容</h4>
      <button @click="isShow = false">关闭弹窗</button> 
    </div> -->

    <!-- 现在你想控制弹窗的位置(想放在水平位置)就很恶心，因为这个弹窗在App下的Child下的Son里面，你的结构是在人家里面包着的，身不由己 -->
    <!-- 使用teleport可以将弹窗组件【传送走，你想去哪就去哪】 -->
    <teleport to="body">
      <div class="mask" v-if="isShow">
        <!-- 使用to属性可以决定将这个组件传送到哪里去 -->
        <!-- 这个时候你弹窗的时候，把结构放到html元素里面，对App,Child,Son组件的结构没有影响，不会把它撑开了 -->
        <!-- 而且还有一个优势就是：可以直接参考body来决定弹窗的定位了，哪怕你套了8层组件，弹窗也不会影响其他结构  -->
        <div class="dialog">
          <h3>我是一个弹窗</h3>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Dialog",
  setup() {
    //写一些数据，数据驱动着页面的显示
    let isShow = ref(false);
    return { isShow };
  },
};
</script>

<style>
.mask {
  /* 遮罩层要把整个页面都遮掉 */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* 遮死 */
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog {
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: green;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 这个-50%是参考自身 */
}
</style>
