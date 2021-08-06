<!--
 * @Author: liming
 * @Date: 2021-08-06 21:24:12
 * @LastEditTime: 2021-08-07 02:25:22
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\components\MyItem.vue
-->
<template>
  <!-- <li @click="handleCheck(todo.id)"> -->
  <li @click="handleCheck(todo.id)">
    <label>
      <input type="checkbox" :checked="todo.isCompleted" />
      <!-- <input type="checkbox" :checked="todo.isCompleted" @click="handleCheck(todo.id)" /> -->
      <!-- <input type="checkbox" v-model="todo.isCompleted" /> -->
      <!-- 这个代码也能实现代码，但是不推荐，它违反了props -->
      <!-- v-model就是双向数据绑定，就是你的操作会影响数据 -->
      <!-- <input type="checkbox" v-model="a" /> -->
      <!-- 这样可以完成效果，但是有一个问题，它违反了一个原则，就是props是只读的，它不可以修改 -->
      <!-- 如果你是checkbox,并且你的v-model绑定了一个布尔值，那么这个布尔值就能决定这个布尔值是否勾选 -->
      <!-- 这个checked需要动态的决定加还是不加 -->
      <!-- 如何在Vue里面让一个标签动态的拥有某个属性？？使用v-bind即可 -->
      <!-- <span>xxxxx</span> -->
      <!-- 这里不能写死 -->

      <!-- 写法1：绑定点击事件 @click="handleCheck(todo.id)"，这里就不用这个了-->
      <!-- 写法2：绑定change事件 -->
      <span>{{ todo.title }}</span>
    </label>
    <!-- <button class="btn btn-danger" @click="delete">删除</button> -->
    <!-- 方法不要叫delete，这个是JS关键字 -->
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  //声明接收父组件传过来的todo对象
  props: ["todo", "checkTodo", "deleteTodo"],
  //   props: ["todo", "a"],
  //   props: ["todo"],
  //   mounted() {
  //     console.log(this.todo); //都叫todoObj，很明显不对，要写冒号来实现动态绑定
  //   },
  methods: {
    //   勾选或者取消勾选
    handleCheck(id) {
      //   console.log(id);
      // 通知App组件将对应的todo对象的isCompleted取反
      this.checkTodo(id);
    },
    // 删除
    handleDelete(id) {
      if (confirm("确定删除吗?")) {
        //   confirm根据用户的交互显示为真还是假，客户选是，就是真，反之则假
        // console.log(id);
        // 通知App删除对应id的todo项
        this.deleteTodo(id);
      }
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

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
