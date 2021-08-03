<template>
  <div>
    <h1 v-text="msg" id="title" ref="title"></h1>
    <button @click="showDOM" ref="btn">点我输出上方的DOM元素</button>
    <School ref="sch" id="sch" />
    <!-- 如果给组件里面加ref标签会有什么后果呢？ -->
  </div>
</template>

<script>
//引入School组件
import School from "./components/School";
export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
  //注册组件
  methods: {
    showDOM() {
      //   console.log("@");
      //   console.log(document.getElementById("title"));
      //   这样写可以实现效果，但是在Vue里面使用原生的DOM不太好
      //   Vue里面给你提供了一个标签属性：ref,用来给元素打标识

      //   ref可以简单的理解为是id的替代者
      console.log(this);
      console.log(this.$refs);
      console.log(this.$refs.title);
      console.log(this.$refs.btn);
      console.log(this.$refs.sch);
      console.log("=================");
      console.log(document.getElementById("sch"));
      //这个就是School组件完整的DOM结构
    },
  },
};
</script>

<style></style>
