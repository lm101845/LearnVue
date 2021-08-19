<!--
 * @Author: liming
 * @Date: 2021-08-06 21:24:12
 * @LastEditTime: 2021-08-17 12:18:53
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\MyList.vue
-->
<template>
  <ul class="todo-main">
    <!-- 注意：这里不只一个组件，所以不能写成transition,而要写成transition-group来代替-->
    <transition-group key="todoObj.id" appear name="todo">
      <!-- 因为复用，所以只要一个li就可以了 -->
      <!-- 给MyList里面添加过渡和动画效果 -->
      <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
      <!-- 不仅要根据数据的数量去遍历我用多少次MyItem,而且还要把每一条具体信息对象传给item  -->
      <!-- 要使用props给MyItem（儿子）组件传数据 -->
      <!-- todoObj是遍历的时候每一个要遍历的对象 -->
      <!-- 只有写了冒号，todoObj才是表达式,才能实现动态绑定，否则就写死了。而todo则是标签的自定义属性，是父级组件定义的，子组件要写props来确认这个自定义属性-->
      <!-- <MyItem /> -->
      <!-- <MyItem /> -->
      <!-- <MyItem /> -->
      <!-- 根据数据决定用多少MyItem -->
      <!-- 这里不要自己写4遍，写一个就行，到时候遍历-->
    </transition-group>
  </ul>
</template>

<script>
import MyItem from "./MyItem";
// 爹里面引入儿子
// 用谁就引入谁
export default {
  name: "MyList",
  components: { MyItem },
  props: ["todos"],
  //   props: ["todos", "checkTodo", "deleteTodo"],
};
</script>

<style sscoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

/* 在MyList里面添加过渡和动画效果 */
.todo-enter-active {
  animation: atguigu 1s linear;
}
.todo-leave-active {
  animation: atguigu 1s reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0px);
  }
}
</style>
