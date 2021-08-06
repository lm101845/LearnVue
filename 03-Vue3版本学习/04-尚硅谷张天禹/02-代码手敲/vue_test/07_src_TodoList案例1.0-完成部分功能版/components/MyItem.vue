<!--
 * @Author: liming
 * @Date: 2021-08-06 21:24:12
 * @LastEditTime: 2021-08-07 01:25:00
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\components\MyItem.vue
-->
<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.isCompleted" @change="handleCheck(todo.id)" />
      <!-- 这个checked需要动态的决定加还是不加 -->
      <!-- 如何在Vue里面让一个标签动态的拥有某个属性？？使用v-bind即可 -->
      <!-- <span>xxxxx</span> -->
      <!-- 这里不能写死 -->

      <!-- 写法1：绑定点击事件 @click="handleCheck(todo.id)"，这里就不用这个了-->
      <!-- 写法2：绑定change事件 -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" style="display: none">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  //声明接收父组件传过来的todo对象
  props: ["todo", "checkTodo"],
  //   mounted() {
  //     console.log(this.todo); //都叫todoObj，很明显不对，要写冒号来实现动态绑定
  //   },
  methods: {
    handleCheck(id) {
      //   console.log(id);
      // 通知App组件将对应的todo对象的isCompleted取反
      this.checkTodo(id);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
