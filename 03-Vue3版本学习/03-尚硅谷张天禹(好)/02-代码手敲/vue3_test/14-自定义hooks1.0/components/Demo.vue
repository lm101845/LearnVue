<!--
 * @Author: liming
 * @Date: 2021-09-03 19:01:30
 * @LastEditTime: 2021-09-03 19:01:31
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Demo.vue
-->
<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点点我+1</button>
  <hr />
  <h2>当前点击时鼠标的坐标为：x：{{ point.x }}，y：{{ point.y }}</h2>
  <!-- 我给谁绑定事件？ 是屏幕中可以看到的整个区域，也就是window-->
  <!-- 什么时候绑定合适呢？组件挂载完毕我绑定事件比较合适 -->
  <!-- 这里我就不写正常配置的API了，而是在setup里面写组合式的生命周期钩子,那我就得引入onMounted -->
</template>

<script>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
//watchEffect也是做监视的，但是它不说它具体监视谁
export default {
  name: "Demo",
  setup() {
    //数据
    let sum = ref(0);

    //和鼠标打点相关的数据
    let point = reactive({
      x: 0,
      y: 0,
    });

    //和鼠标打点相关的方法
    //事件方法单独写，有了名字到时候好移除
    function savePoint(event) {
      // 我这里能拿到很多坐标，pageX,clientX,我就选pageX吧
      point.x = event.pageX;
      point.y = event.pageY;
      console.log(event.pageX, event.pageY);
      // 有一个问题：我这个X,Y也是Demo组件在用，如果有一天Demo组件都卸载了，但是这个监听还是继续发挥着作用
      // 所以就要借助于另外一个钩子了：onBeforeOnMount(类似于Vue2里面的beforeDestory)——当卸载之前(把这个函数给弄死——removeEventListener)

      /**
         * 通过 addEventListener() 添加的事件处理程序只能使用 removeEventListener() 并传入与添
            加时同样的参数来移除。这意味着使用 addEventListener() 添加的匿名函数无法移除
         */
    }

    //和鼠标打点相关的生命周期钩子
    onMounted(() => {
      //只要这个Demo组件一挂载，立刻就走这个回调
      //   window.addEventListener("click", (event) => {
      //     point.x = event.pageX;
      //     point.y = event.pageY;
      //     console.log(event.pageX, event.pageY);
      //   });
      window.addEventListener("click", savePoint);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("click", savePoint);
    });

    return {
      sum,
      point,
    };
  },
};
</script>
