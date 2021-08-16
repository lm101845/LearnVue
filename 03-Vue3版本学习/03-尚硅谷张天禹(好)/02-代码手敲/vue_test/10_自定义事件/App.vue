<!--
 * @Author: liming
 * @Date: 2021-08-03 16:41:23
 * @LastEditTime: 2021-08-16 19:12:12
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\10_自定义事件\App.vue
-->
<template>
  <div class="app">
    <h1>{{ msg }},学生姓名是:{{ studentName }}</h1>
    <!-- 【模版里面的东西都不需要写this】 -->
    <!-- 通过父组件给子组件传递函数类型的props实现：【子给父传递数据】(第一种写法：使用@或v-on) -->
    <!-- 这里的getSchoolName就是函数类型的props -->
    <School :chuangetSchoolName="getSchoolName" />
    <!-- 第一步:给你微信转账，转账消息是chuangetSchoolName(可以随便写)，
    转账的钱(内容)是：getSchoolName，这个是我自己钱包里定义的一个函数 -->
    <!-- 这个回调函数getSchoolName得留在父亲这！！！ -->
    <!-- 等儿子触发这个自定义事件的时候，自定义的回调函数getSchoolName一定会执行(在父亲这里执行)，
    所以才会收到子组件里传的东西 -->
    <!-- <Student v-on:atguigu="getStudentName" /> -->
    <Student @atguigu="getStudentName" @demo="m1" />
    <!-- 事件名叫demo,m1是回调名，不要搞错了，在Student组件里面写是的事件名demo -->
    <!-- 简写形式 -->
    <!--  v-on在谁身上，那就是给谁绑定事件-->
    <!-- 由于v-on在Student组件标签上，所以说，是给Student这个组件的实例对象vc身上绑定了事件，事件名字叫atguigu-->
    <!-- 如果有人触发了atguigu这个事件，那么demo函数就会被调用 -->
    <!-- 这个demo函数是在父组件App里面写的 -->
    <!-- 接下来的当务之急就是如何触发这个我们自定义的atguigu事件？ -->
    <!-- 但是这个事件我们怎么触发呢？click事件，我们点击就行，keyup事件，键盘点下去再抬起来就行，
    那这个自定义事件的触发机制是什么呢？ -->
    <!-- 小贴士：vue中的内置事件(click等)是给HTML元素用的，而自定义事件是给组件用的 -->
    <!-- 原则：【你给谁绑定的事件，你就找谁触发事件去】 -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法：使用ref -->
    <Student ref="student" />

    <!-- 一般原生事件是给HTML元素用的，自定义事件是给组件用的，那我可不可以给组件使用原生事件呢？ -->
    <!-- 我点击了，但是没有反应，是不是说明组件不能绑定原生DOM事件呢？——是可以的！！！！但是不能这么写 -->
    <!-- 你这么写的话别人就拿你这个click当成自定义事件看待了 -->
    <!-- 解决方法：使用修饰符native -->
    <Student @click="show" />
    <Student @click.native="show" />
  </div>
</template>

<script>
//引入Student组件
import Student from "./components/Student";
import School from "./components/School";
// 你先引入School组件，再引入Student组件，最终样式就以下面的为准了，被覆盖了(后来者居上)
// 注意：不是看你【使用】的顺序，而是看你【引用】的顺序
// 使用一个scoped属性即可解决这个问题，提供了一个局部的作用域
export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      msg: "你好啊",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名", name);
    },
    // demo() {
    // getStudentName(name, x, y, z) {
    //   // 可以收到子组件的参数name
    //   //   console.log("demo被调用了", name);
    //   console.log("App收到了学生名", name, x, y, z);
    // },

    getStudentName(name, ...a) {
      // 使用ES6语法，我不管你传了多少参数，第一个参数拿出来作为name，其他参数都整理到a上
      // 可以收到子组件的参数name
      //   console.log("demo被调用了", name);
      console.log("App收到了学生名", name, a);
      this.studentName = name;
    },
    m1() {
      console.log("demo事件被触发了");
    },
    show() {
      console.log(123);
    },
  },
  mounted() {
    //mounted要和上面的ref配合使用
    //mounted写在哪个组件里面，哪个组件就挂载完毕，这里是App组件挂载完毕了
    // this.$refs.student.$on("atguigu", this.getStudentName);
    // this.$refs.student.$on("atguigu", function (name, ...params) {
    //   console.log(this);
    //   //这个this不是App的组件实例对象，而是触发事件的那个组件实例对象
    //   //   Vue底层：谁触发了atguigu事件，那么回调当中的this就是谁
    //   console.log("App收到了学生名", name, params);
    //   this.studentName = name;
    //   //   但是这样写不行(普通函数)
    // });

    this.$refs.student.$on("atguigu", (name, ...params) => {
      console.log(this);
      //这个this不是App的组件实例对象，而是触发事件的那个组件实例对象
      //   Vue底层：谁触发了atguigu事件，那么回调当中的this就是谁
      console.log("App收到了学生名", name, params);
      this.studentName = name;
      //   但是这样写不行(普通函数)
      //   写成箭头函数就可以了=>箭头函数往外(mounted函数)找，则this就是当前组件的实例对象了
    });
    // 我不单独写getStudentName了，直接在这里写
    // this.$refs.student.$once("atguigu", this.getStudentName);
    // 这个自定义事件就只能触发一次了
    // vue3中$on好像被废弃了
    //this.refs.student就表示Student组件的实例对象
    //$on("atguigu")表示当atguigu这个事件被触发的时候就执行一个回调
    // setTimeout(() => {
    //   this.$refs.student.$on("atguigu", this.getStudentName);
    //   //使用第2种写法可以写异步，更加灵活
    // }, 3000);
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
