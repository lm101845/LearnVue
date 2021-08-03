<template>
  <!-- template只是一个分割作用，最后还要脱落掉-->
  <div>
    <!-- 模版里面必须有一个跟元素，这里是div -->
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
//因为app是宰相，一人之下(vm)，万人之上，它管理其他的所有组件，所以你要先引入所有组件
//引入其他组件
//所有的组件都要听vm的命令，所以还要创建一个vm
//不过你不要妄图把创建vm的代码写到App.vue里面
//只要这个文件是.vue结尾的，你一定不能写出new Vue这类的代码，这个是不可以的！！！
import School from "./components/School";
import Student from "./components/Student";
// 在脚手架里面后缀.vue可写可不写，为了方便我们不写了

export default {
  name: "App",
  //引入后还要注册才能使用
  components: {
    School,
    Student,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
