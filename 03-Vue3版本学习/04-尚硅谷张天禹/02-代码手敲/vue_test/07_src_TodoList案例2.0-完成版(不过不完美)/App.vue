<!--
 * @Author: liming
 * @Date: 2021-08-03 16:41:23
 * @LastEditTime: 2021-08-07 03:54:22
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\App.vue
-->
<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 建议，剪贴走哪个就立马把哪个组件标签写到 这里-->
        <MyHeader :addTodo="addTodo" />
        <!-- 同时我也可以把一个函数传给MyHeader -->
        <!-- APP是一个父亲，想给孩子传什么就传什么，数组可以传，函数同样也可以传 -->
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
        <!-- 爷爷想给孙子传东西，只能先经过父亲 -->
        <!-- <MyList :todos="todos" /> -->
        <!-- todos是一个数组，我可以把数组传给MyList-->
        <!-- checkTodo先给MyList，之后再通过MyList传给MyItem -->
        <MyFooter
          :todos1="todos"
          :checkAllTodo="checkAllTodo"
          :clearAllTodo="clearAllTodo"
        />
        <!-- 这里我想测试一下todos1和todos的关系，todos1是自定义属性的名字，todos是传入的数据-->
        <!-- MyFooter在使用的时候，使用的是todos1，属性的名字 -->
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
      todos: [
        { id: "001", title: "吃饭", isCompleted: true },
        { id: "002", title: "睡觉", isCompleted: false },
        { id: "003", title: "打豆豆", isCompleted: true },
        //这id要用字符串，因为你用number的话，在JS里面number是有尽头的
        //我是爹，我要把我里面的数据传给儿子(微信给儿子钱，儿子要写props确认)

        // 数据在App里面，那么所有对数据的增删改操作也应该在App里进行才是
      ],
    };
  },
  methods: {
    //添加一个todo
    addTodo(todoObj) {
      console.log("我是App组件，我收到了数据：", todoObj);
      this.todos.unshift(todoObj);
      //unshift是数组头部添加
    },
    //勾选或者取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        //遍历数组找对应的id
        if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      });
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        //过滤掉我不想要的就是一种删除
        // 细节问题：fileter是不改变原来数组的
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
};
</script>

<style>
/*base*/
/* 基本样式都在App.vue里面写 */
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
