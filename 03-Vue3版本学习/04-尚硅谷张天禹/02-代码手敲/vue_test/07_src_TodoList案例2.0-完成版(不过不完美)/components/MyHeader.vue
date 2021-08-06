<!--
 * @Author: liming
 * @Date: 2021-08-06 21:24:12
 * @LastEditTime: 2021-08-06 23:56:03
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\components\MyHeader.vue
-->
<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="add"
      v-model="title"
    />
    <!-- v-model="title" =>不用这种来获取表单内容了-->
  </div>
</template>

<script>
import { nanoid } from "nanoid";
//这个nanoid是一个函数，直接调用它就能生成一个标准的字符串了
export default {
  name: "MyHeader",
  //   html5里面有个标签叫header，所以组件最好不要叫header
  // 方法2通过v-model来得到用户的输入(但是这里只有一个表单输入框，就不用这个方法了)
  data() {
    return {
      title: "",
    };
  },
  methods: {
    //方法1来得到用户的输入
    add(event) {
      //   别人什么也没输入按回车，不让他添加
      //进行数据的校验
      if (!this.title.trim()) return alert("输入不能为空");

      //包装成一个对象
      //   console.log(event);
      //   console.log(event.target.value);
      // 使用事件对象来获取用户的输入
      //   console.log(this.title);

      //我们需要把用户输入的东西【包装】为一个todo对象，不仅仅有title，还要有id，isCompleted等属性
      //有一个uuid库，可以生成独一无二的id,nanoid是uuid的精简版
      //   const todoObj = { id: nanoid(), title: event.target.value, isCompleted: false };
      //   写法1：event.target.value写法
      const todoObj = { id: nanoid(), title: this.title, isCompleted: false };
      //   写法2：v-model写法
      //   添加一个要做的事情，默认值肯定是false，你肯定没做完
      console.log(todoObj);
      //   有一个问题：保存一堆要做的事情的todos数据是在MyList组件中的
      //   而你输出的todoObj是位于MyHeader组件中的
      //   以目前我们的知识量，无法将MyHeader组件中的todoObj传给MyList组件
      //   以目前我们的知识量，想从组件外部给组件里面携带一些数据进去，只能有一个写法：props
      //   但是MyHeader和MyList不是包裹关系，不是父子，它们是兄弟关系
      //   APP组件是宰相，给谁传东西都能传。(直接在App组件里面写<MyList a="1"></MyList>即可)

      //通知App组件去添加一个对象
      this.addTodo(todoObj);
      //   写法1
      //   event.target.value = "";
      //文字敲完了添加一行了之后要清空
      //不操作DOM的写法2
      this.title = "";
    },
  },
  props: ["addTodo"],
  //父亲传的很高级，传的是一个函数
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
