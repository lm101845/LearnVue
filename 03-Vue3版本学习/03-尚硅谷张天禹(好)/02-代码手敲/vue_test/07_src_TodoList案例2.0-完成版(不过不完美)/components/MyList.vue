<!--
 * @Author: liming
 * @Date: 2021-08-06 21:24:12
 * @LastEditTime: 2021-08-07 02:24:53
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\components\MyList.vue
-->
<template>
  <ul class="todo-main">
    <!-- 因为复用，所以只要一个li就可以了 -->
    <MyItem
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todo="todoObj"
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo"
    />
    <!-- 不仅要根据数据的数量去遍历我用多少次MyItem,而且还要把每一条具体信息对象传给item  -->
    <!-- 要使用props给MyItem（儿子）组件传数据 -->
    <!-- todoObj是遍历的时候每一个要遍历的对象 -->
    <!-- 只有写了冒号，todoObj才是表达式,才能实现动态绑定，否则就写死了。而todo则是标签的自定义属性，是父级组件定义的，子组件要写props来确认这个自定义属性-->
    <!-- <MyItem /> -->
    <!-- <MyItem /> -->
    <!-- <MyItem /> -->
    <!-- 根据数据决定用多少MyItem -->
    <!-- 这里不要自己写4遍，写一个就行，到时候遍历-->
  </ul>
</template>

<script>
import MyItem from "./MyItem";
// 爹里面引入儿子
// 用谁就引入谁
export default {
  name: "MyList",
  components: { MyItem },
  //   data() {
  //     return {
  //       todos: [
  //         { id: "001", title: "吃饭", isCompleted: true },
  //         { id: "002", title: "睡觉", isCompleted: false },
  //         { id: "003", title: "打豆豆", isCompleted: true },
  //         //这id要用字符串，因为你用number的话，在JS里面number是有尽头的
  //         //我是爹，我要把我里面的数据传给儿子(微信给儿子钱，儿子要写props确认)
  //       ],
  //     };
  //   },
  props: ["todos", "checkTodo", "deleteTodo"],
  //   props: ["todos"],
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
</style>
