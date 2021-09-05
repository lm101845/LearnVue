<!--
 * @Author: liming
 * @Date: 2021-09-03 19:01:30
 * @LastEditTime: 2021-09-03 19:01:31
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Demo.vue
-->
<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前的的信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
</template>

<script>
import { ref, watch } from "vue";
// vue3里面的watch也是变成了一个组合式的API，用法也极其简单——vue3里面的 watch是一个函数
export default {
  name: "Demo",
  //   vue2里面的watch是一个配置项，它里面的类型是对象类型
  //   watch监视的2种写法：简单写法和复杂写法
  //   还是那句话：vue3里面可以用Vue2之前的写法，但是不推荐使用

  //   watch: {
  //     //   简写版watch
  //     // sum(newValue, oldValue) {
  //     //   console.log("sum的值变化了", newValue, oldValue);
  //     // },
  //     //完整版写法：把sum写成一个对象
  //     sum: {
  //       immediate: true,
  //       deep: true, //深度监视
  //       handler(newValue, oldValue) {
  //         console.log("sum的值变化了", newValue, oldValue);
  //       },
  //     },
  //   },
  setup() {
    //数据——需要接，所以用let sum =
    let sum = ref(0);
    let msg = ref("你好啊");

    //情况一：监视ref所定义的【一个】响应式行为
    // ——watch也是组合API，组合API就是一些函数
    //监视是一种行为，所以watch前面不需要使用let xxx = 了
    // watch(sum, (newValue, oldValue) => {
    //   //第一个参数：监视谁
    //   //第二个参数：监视后引发的回调——可以随便写箭头函数，因为setup函数中的this是undefined
    //   console.log("sum的值变化了", newValue, oldValue);
    // });

    //情况二(写法1——写了多个watch函数，比较麻烦)：监视ref所定义的【多个】响应式行为
    // 注意：Vue2的配置中你无法写出2个watch，而vue3中你是可以写出2个watch的！！！！！
    // 原因：vue2那个年代，watch是一个配置项，配置项是不能同名的
    // 而在Vue3里面你可以调用N次watch函数
    // watch(sum, (newValue, oldValue) => {
    //   console.log("sum的值变化了", newValue, oldValue);
    // });

    // watch(msg, (newValue, oldValue) => {
    //   console.log("msg的值变化了", newValue, oldValue);
    // });

    //情况二(写法2——写一个watch,但是这个watch里面是一个数组，比较麻烦)：监视ref所定义的【多个】响应式行为
    //注意：这个watch能传递第三个参数(监视的是谁，监视的回调，监视的配置)
    watch(
      [sum, msg],
      (newValue, oldValue) => {
        console.log("sum或msg的值变化了", newValue, oldValue);
      },
      { immediate: true }
      //当然了我在这里写deep:true一点意义也没有，因为我监视的sum就是一个数字，没有办法去deep
    );
    return {
      sum,
      msg,
    };
  },
};
</script>
