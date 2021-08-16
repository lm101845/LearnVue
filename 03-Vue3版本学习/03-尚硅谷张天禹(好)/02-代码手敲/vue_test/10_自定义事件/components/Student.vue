<!--
 * @Author: liming
 * @Date: 2021-08-04 00:22:35
 * @LastEditTime: 2021-08-16 19:14:56
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\10_自定义事件\components\Student.vue
-->
<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前求和为：{{ number }}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu自定义事件</button>
    <!-- 你给谁绑定的，就在谁身上解绑 -->
    <button @click="death">销毁当前Student组件的实例对象</button>
  </div>
</template>
<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
      number: 0,
    };
  },
  methods: {
    add() {
      console.log("add回调被调用了");
      this.number++;
    },
    sendStudentName() {
      // 给组件的实例对象vc绑定了atguigu事件，你回头想触发这个事件，就只能找组件的实例对象了
      //   this.$emit("atguigu");
      //   【触发Student组件实例身上的atguigu事件】
      //   使用this就可以轻而易举的拿到组件的实例对象了
      //   我们可以借助一个特殊的方法$emit来触发atguigu这个自定义事件
      //emit本身没有触发的含义，中文叫发射，但是这里就是触发的意思
      this.$emit("atguigu", this.name, 666, 888, 999);
      //   【子组件触发自定义事件，里面可以传参数，这样父组件也可以收到子组件传过来的东西】
      //   没有数据，可以再写一个参数传数据
      //   this.$emit("demo");
      this.$emit("click");
    },
    unbind() {
      this.$off("atguigu");
      //   这个写法只适用于解绑一个自定义事件
      //   this.$off(["atguigu", "demo"]);
      //   这个写法只适用于解绑多个个自定义事件
      //   this.$off();
      //   更加暴力的写法:所有的自定义事件都解绑
    },
    death() {
      this.$destroy();
      //销毁了当前Student组件的实例对象
      //销毁后所有Student实例的自定义事件全都不奏效了
    },
  },
  //   mounted() {
  //     this.$on("haha", (data) => {
  //       console.log("haha事件被触发了", data);
  //     });
  //   },
};
</script>

<style scoped lang="less">
/* 在Vue里面你不仅仅可以用css来写样式，还可以用css预处理器,比如less,sass,stylus等来写样式 */
// 但是Vue脚手架处理不了less，需要安装一个less-loader来处理
//注意：Vue脚手架是依托于webpack的，现在webpack的最高版本是5，但是vue官方依托的webpack脚手架版本是4.46【官方求稳】，就出现了兼容性问题了
// 所以你不要直接安装最新版的less-loader，要安装低版本的less-loader即可(建议安装7版本的——最新版的都是10了)
.student {
  background-color: orange;
  padding: 5px;
  margin-top: 30px;
}
</style>
