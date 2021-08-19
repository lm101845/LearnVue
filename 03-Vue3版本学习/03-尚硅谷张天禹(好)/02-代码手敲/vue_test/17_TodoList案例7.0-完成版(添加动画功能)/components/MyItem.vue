<!--
 * @Author: liming
 * @Date: 2021-08-06 21:24:12
 * @LastEditTime: 2021-08-17 00:25:56
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\MyItem.vue
-->
<template>
  <!-- <li @click="handleCheck(todo.id)"> -->
  <!-- 给li增加过渡和动画效果 -->
  <!-- 也可以在MyList里面添加 -->
  <!-- <transition name="todo" appear> -->
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
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        v-show="todo.isEdit"
        type="text"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
      <!-- 这2个二选一 -->
    </label>
    <!-- <button class="btn btn-danger" @click="delete">删除</button> -->
    <!-- 方法不要叫delete，这个是JS关键字 -->
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)" v-show="!todo.isEdit">
      编辑
      <!-- 我已经处于编辑状态下，这个按钮就不要显示了 -->
    </button>
    <!-- 不要直接传id，得传todo -->
  </li>
  <!-- </transition> -->
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  //声明接收父组件传过来的todo对象
  //   props: ["todo", "checkTodo", "deleteTodo"],
  //   props: ["todo", "a"],
  props: ["todo"],
  //   mounted() {
  //     console.log(this.todo); //都叫todoObj，很明显不对，要写冒号来实现动态绑定
  //   },
  methods: {
    //   勾选或者取消勾选
    handleCheck(id) {
      //   console.log(id);
      // 通知App组件将对应的todo对象的isCompleted取反
      //   this.checkTodo(id);
      this.$bus.$emit("zidingyicheckTodo", id);
      //   触发zidingyicheckTodo，顺便把id给父组件送过去
    },
    // 删除
    // 使用消息订阅重写一下
    // App数据需要数据，需要删除那个组件的id，而MyItem组件提供数据
    handleDelete(id) {
      if (confirm("确定删除吗?")) {
        //   confirm根据用户的交互显示为真还是假，客户选是，就是真，反之则假
        // console.log(id);
        // 通知App删除对应id的todo项
        // this.deleteTodo(id);
        // this.$bus.$emit("zidingyideleteTodo", id);

        //使用消息订阅模式来发布消息
        pubsub.publish("deleteTodo", id);
        // 通过某种渠道把id给App给传递过去
      }
    },
    //编辑
    handleEdit(todo) {
      //首先我得拿到你编辑的是哪个todo
      // 1  todo.isEdit = true;
      // 不能这么写，这么写不会把isEdit放入到响应式中去
      //判断todo身上有没有isEdit属性，如果没有我合理合法的进行追加，如果有的话，我直接改就可以了
      // 你这么写不对，有可能todo身上的isEdit是false
      //   if (todo.isEdit) {
      //  你这样写判断，只是判断todo身上的isEdit值为真为假，而我要判断是是todo身上有没有这个属性
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
        //   真正的流程是这样的：这句话的确走了，但是Vue并没有立即解析模版，而是继续往下走，直到 this.$refs.inputTitle.focus();
        //   此时它再帮你解析模版，由于我们使用v-show来控制语句，input框还没有显示，此时调用focus，是不能获取到焦点的
      } else {
        console.log("todo身上没有isEdit");
        this.$set(todo, "isEdit", true);
      }
      //   上面的if...else把文字变成输入框
      //   this.$refs.inputTitle.focus();
      //   紧随其后我就让它获取焦点
      //   真正的流程是这样的：这句话的确走了，但是Vue并没有立即解析模版，而是继续往下走，直到 this.$refs.inputTitle.focus();
      //   此时它再帮你解析模版，由于我们使用v-show来控制语句，input框还没有显示，此时调用focus，是不能获取到焦点的
      //   解决方法：在它外面加一个延时定时器，马上就奏效
      //方法1：
      //   setTimeout(() => {
      //     this.$refs.inputTitle.focus();
      //   }, 200);

      //方法2：官方设计了一个API——nextTick（下一轮）,它里面指定了一个回调函数，这个回调函数会在DOM节点更新之后再执行
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
        // Vue一看$nextTick，就会重新解析模版，等整个DOM都更新完毕之后再帮这位兄弟调用函数
      });
    },
    //失去焦点回调(真正执行修改逻辑)
    handleBlur(todo, e) {
      // 注意：它必须要先获取焦点才能失去焦点——一个比较坑的地方
      // 复选框失去焦点后将复选框隐藏
      //   this.$set(todo, "isEdit", false);
      //这个todo身上已经有了isEdit，我们要做的就是把它身上的isEdit改成false
      todo.isEdit = false;
      this.$bus.$emit("updateTodo", todo.id, todo.title);
      //1   todo.title则你拿的还是todo原本的title,你得拿到输入框里面的值
      //   使用$event来得到新的值
      //   console.log("updateTodo", todo.id, e.target.value);
      //添加校验
      if (!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
      //   然后你再去【能真正修改数据的App】里面进行数据的修改操作——在mounted里面写(增删改查中的【改】)
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

/* 添加过渡和动画效果 */
/* .todo-enter-active {
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
} */
</style>
