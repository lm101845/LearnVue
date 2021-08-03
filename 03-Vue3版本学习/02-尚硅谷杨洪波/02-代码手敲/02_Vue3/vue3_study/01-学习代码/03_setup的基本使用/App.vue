<!--
 * @Author: liming
 * @Date: 2021-08-02 16:04:30
 * @LastEditTime: 2021-08-02 16:57:54
 * @FilePath: \vue3_study\02-项目代码\src\App.vue
-->
<template>
    <h2>setup和ref的基本使用</h2>
    <h3>{{count2}}</h3>
    <button @click="updateCount2">vue2方法更新数据 </button>
    <hr>
    <h3>{{count3}}</h3>
    <!-- <h3>{{count3.value}}</h3> -->
    <!-- html模版中是不需要写.value的写法的 -->
    <button @click="updateCount3">vue3方法更新数据 </button>
</template>

<script lang="ts">
import { defineComponent ,ref} from 'vue';


export default defineComponent({
  name: 'App',
  //需求：页面打开后可以直接看到一个数据，点击按钮后，该数据可以发生变化
  //vue2的方式实现
  //vue3里面支持绝大多数vue2的代码
  data() {
      return {
          count2:0
      }
  },
     methods:{
          updateCount2(){
              this.count2++
          }
      },
  //vue3的方式实现
  //setup是组合API的入口函数，程序一执行会先进入到setup入口函数当中
  //它返回的是一个对象
  setup(){
      console.log('第一次');
      
      //变量
    //   let count3 = 0;    
      //此时的数据并不是响应式的数据(数据变化，页面跟着渲染变化)
      //ref是一个函数，作用：定义一个响应式数据,返回的是一个ref对象
      //对象中有一个value属性，如果需要对数据进行操作，那么需要使用该Ref对象调用value属性的方式进行操作
      
      const count3 = ref(0)
      //ref一般用来定义一个【基本类型】的响应式数据
      console.log(count3);
      //方法
      function updateCount3(){
          console.log('============');
        //   报错的原因：count是一个ref对象，对象是不能进行++操作的
        //   count3++
        count3.value++
      }
      return {
        //   count:count,
        //   把count变量给count属性
        // 简写为count
        //属性
        count3,
        //方法
        updateCount3
      }
  }
});
</script>

<style>

</style>
