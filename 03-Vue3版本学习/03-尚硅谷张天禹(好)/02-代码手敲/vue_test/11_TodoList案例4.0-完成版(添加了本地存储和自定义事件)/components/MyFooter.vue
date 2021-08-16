<!--
 * @Author: liming
 * @Date: 2021-08-06 21:24:12
 * @LastEditTime: 2021-08-16 14:19:24
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\MyFooter.vue
-->
<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
      <!-- 写法2：输入的初始值要展示，并且以后要交互 -->
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ todos1.length }}</span
    >
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  //   html5里面有个标签叫footer，所以组件最好不要叫footer
  //   props: ["todos1", "checkAllTodo", "clearAllTodo"],
  props: ["todos1"],
  computed: {
    doneTotal() {
      // 这个是计算属性的简写，没有get,set
      //   return 99;
      //   写法1：普通写法
      //   let i = 0;
      //   this.todos1.forEach((todo) => {
      //     if (todo.isCompleted) i++;
      //   });
      //   return i;
      //   写法2：reduce——专门用来做条件统计的
      //   前端人员的职责就是在合适的时候发出合适的请求，拿回合适的数据，展示到合适的位置
      //   但是很多时候这个数据是不能直接展示的，涉及到对这个数据进行遍历，过滤，加工，然后再展示
      //   所以说前端人员，如果你对数组或对象身上的方法不熟悉，那你干前端是很吃力的
      //   所以前端面试问你常用的数组方法有哪些？？
      //   const x = this.todos1.reduce((prev, cur) => {
      //     //   console.log("@", prev, cur);
      //     //   cur是每一个todo项
      //     //   console.log(prev);
      //     //   console.log(cur);
      //     //   return 3;
      //     // console.log("=========", x);
      //     return prev + (cur.isCompleted ? 1 : 0);
      //   }, 0);
      //   写法2：精简写法
      return this.todos1.reduce((prev, cur) => prev + (cur.isCompleted ? 1 : 0), 0);
    },
    total() {
      return this.todos1.length;
    },
    isAll: {
      //isAll需要是一个布尔值
      //   return this.doneTotal === this.total && this.total > 0;
      //   一个计算属性可以通过另外的或其他的计算属性再进行计算得到
      //   isAll是一个计算属性，这里是简写形式，前提：只为读取，不为修改
      //但是我们这里用方法2，把isAll写在了v-model里面，这就意味着等你以后勾选或者取消勾选，都会引起isAll的变化
      //所以我们这里要写计算属性完整写法
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      set(value) {
        // console.log("###", value);
        // this.checkAllTodo(value);
        this.$emit("checkAllTodo", value);
        // value就是儿子想给父亲传递的东西
      },
    },
  },
  methods: {
    checkAll(e) {
      //   console.log(e.target.checked);
      //   并没有操作DOM，这里只是借助DOM拿到一个属性而已
      this.checkAllTodo(e.target.checked);
    },
    clearAll() {
      //告诉App把所有isCompeleted为真的都删掉
      //   this.clearAllTodo();
      this.$emit("clearAllTodo");
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
