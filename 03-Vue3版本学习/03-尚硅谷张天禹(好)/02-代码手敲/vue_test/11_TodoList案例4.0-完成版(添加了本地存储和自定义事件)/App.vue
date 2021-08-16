<!--
 * @Author: liming
 * @Date: 2021-08-03 16:41:23
 * @LastEditTime: 2021-08-16 14:16:51
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\App.vue
-->
<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- <MyHeader @zidingyiaddTodo="addTodo" /> -->
        <!-- 父亲给儿子一个函数，是为了给儿子调用的，儿子调用的目的是为了，通过调用把自己的数据给它父亲 -->
        <MyHeader @addTodo="addTodo" />
        <!-- 自定义事件的名字和后面的回调函数可以重名 -->
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
        <MyFooter
          :todos1="todos"
          @checkAllTodo="checkAllTodo"
          @clearAllTodo="clearAllTodo"
        />
        <!-- 这里的:todos1是数据，不是函数，所以不能改 -->
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
// 不要引入MyItem了，因为MyItem是MyList的子组件,父亲代表儿子即可
import MyFooter from "./components/MyFooter";

export default {
  name: "App",
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addTodo(todoObj) {
      console.log("我是App组件，我收到了数据：", todoObj);
      this.todos.unshift(todoObj);
    },
    checkTodo(id) {
      this.todos.forEach((todo) => {
        //遍历数组找对应的id
        if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      });
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },

    //全选或取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.isCompleted = done;
      });
    },
    //清楚所有已经完成的todo
    clearAllTodo() {
      if (confirm("确认清除已完成任务吗?")) {
        this.todos = this.todos.filter((todo) => {
          return !todo.isCompleted;
        });
      }
    },
  },
  watch: {
    todos: {
      deep: true,
      //必须要开启深度监视
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
