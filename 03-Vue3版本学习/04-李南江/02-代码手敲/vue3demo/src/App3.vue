<!--
 * @Author: liming
 * @Date: 2021-05-25 18:19:59
 * @LastEditTime: 2021-05-25 22:53:36
 * @FilePath: \LearnVue\01-Vue3.x\02-李南江Vue3.x\02-代码手敲\vue3demo\src\App.vue
-->
<template>
  <div>
    <p>{{count}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
 import {ref} from 'vue'
  export default {
    name: 'App',
    // setup函数是组合API的入口函数
    // setup(){
    //     let count = 0;
    // }
    setup(){
        // 定义了一个名称叫做count的变量，这个变量的初始值是0
        // 这个变量发生改变之后，vue会自动更新UI 
        let count = ref(0)
        // 这个count是一个对象！！！
        // 在组合API中，如果想定义方法，不用定义到methods中，直接定义即可。
        function myFn(){
        //    alert(123) 
        // console.log(count);
        // console.log(count.value);
        count.value+=1
        }
        // 注意点：
        // 在组合API中定义的变量/方法要想在外界使用，必须通过return {xxx,xxx}暴露出去
        return {count,myFn  }
    }
  }
</script>
