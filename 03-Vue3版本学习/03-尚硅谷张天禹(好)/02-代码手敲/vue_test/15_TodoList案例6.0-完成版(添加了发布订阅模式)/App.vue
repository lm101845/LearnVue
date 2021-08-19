<!--
 * @Author: liming
 * @Date: 2021-08-03 16:41:23
 * @LastEditTime: 2021-08-17 00:06:41
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
        <!-- <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" /> -->
        <MyList :todos="todos" />
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
//引入消息订阅库pubsub
// 第三方库一般往上靠
import pubsub from "pubsub-js";
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
    //   你要做的不是删除掉这个方法，而是这个方法不要给List传了，通过总线直接给Item传
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
    //更改编辑后的数据
    //更新一个todo
    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        //遍历数组找对应的id
        if (todo.id === id) todo.title = title;
      });
    },
    // 删除一个todo
    // deleteTodo(msgName, id) {
    deleteTodo(_, id) {
      // 并且这个deleteTodo不能直接用，它有2个参数，第一个是消息的id，第二个是消息的名字
      // 可以使用下划线去占个位，表示前面有一个参数，但是我不用，这样才能保证我收到的是正常的参数
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
  mounted() {
    //   首先我们要搞清楚谁给谁传递数据？
    // Item给App传数据，传什么呢？勾选的时候传id，删除的时候传id
    // 收数据的人应该绑定事件总线身上的自定义事件
    // 什么时候绑定呢？——mounted一挂载就绑定，最合适
    // this.$bus.$on("checkTodo", checkTodo);
    // 不写this报错： checkTodo is not defined，害我找了半天。。。。。。
    this.$bus.$on("zidingyicheckTodo", this.checkTodo);
    // 如果有一天zidingyicheckTodo这个自定义事件被触发了(肯定是Item它自己触发的，Item要用emit进行触发)，我这里就调用我自己这里定义的回调函数checkTodo
    // this.$bus.$on("zidingyideleteTodo", this.deleteTodo);

    //什么时候去订阅？？组件挂载完毕就去订阅
    // pubsub.subscribe("deleteTodo", deleteTodo);
    // 不要忘了加this！！！！并且这个deleteTodo不能直接用，它有2个参数，第一个是消息的id，第二个是消息传过来的数据
    this.pubId = pubsub.subscribe("deleteTodo", this.deleteTodo);
    // 当有人发布消息时，我再拿到传过来的数据，执行我自己写的回调

    this.$bus.$on("updateTodo", this.updateTodo);
  },
  //   最好在组件即将被销毁的时候，进行一下解绑
  beforeCreate() {
    this.$bus.$off("zidingyicheckTodo");
    // this.$bus.$off("zidingyideleteTodo");
    pubsub.unsubscribe(this.pubId);
    this.$bus.$off("updateTodo ");
  },
};
</script>

<style>
/* App里面的样式全体都用，不要加scoped */
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

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(103, 159, 180);
  margin-right: 5px;
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
