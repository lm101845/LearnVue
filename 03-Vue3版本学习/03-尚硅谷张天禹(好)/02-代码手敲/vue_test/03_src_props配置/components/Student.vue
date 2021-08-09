<!--
 * @Author: liming
 * @Date: 2021-08-04 00:22:35
 * @LastEditTime: 2021-08-06 22:17:42
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\03_src_props配置\components\Student.vue
-->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2>学生年龄+1错误写法：{{ age + 1 }}</h2>
    <!-- 老王也想用我的组件，但是里面的数据不一样，他的数据是李四女19, -->
    <!-- 他需要【把数据传递过来】进行展示即可 -->
    <!-- <h2>学生年龄+1不是标准写法：{{ age * 1 + 1 }}</h2> -->
    <!-- 这个可以，但是不建议这样用 -->
    <h2>学生年龄+1不是标准写法：{{ age + 1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄(props是不让改的)</button>
    <!-- 你要硬改也是可以改的，但是会引起Vue产生一些奇奇怪怪的问题 -->
    <h2>学生年龄：这样折腾一下就可以改props了{{ myAge }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    console.log(this);
    return {
      //   首先，我需要把这里改一下，不能把数据写死了
      //   我收到的东西在vc身上，我写的东西(指data)也在vc身上，那就打架了，所以data这里不能再写name,sex,age了
      //如果data里的东西和props里面的东西打架了，优先级props更高。
      //   数据里面的东西是外面传进来的
      msg: "我是一个尚硅谷的学生 ",
      //   name: "张三",
      //   sex: "男",
      //   age: 20,
      myAge: this.age,
    };
  },
  //第二步：在组件里说一声，要用我传的数据——使用全新的配置项【props】
  //   类似确认收款
  //   收款方式1：简单声明接收写法
  //    props: ["name", "sex", "age"],
  //   注意1：声明的时候不要瞎声明，如果那边没有传某个数据，你就不要声明了
  //   注意2：【接收到的props是不允许改的！！！！】
  //   顺序无所谓
  //   我在这里写了东西【接收】，但是东西收哪里去了？
  //   我这里微信收款确认了，但是钱存到哪里去了？？
  //   是在Student组件实例对象vc里面存起来的

  //    App.vue是付款方(提供外部数据)，Student.vue是收款方(写props，接收外部数据)
  //    但是收款方也是有原则的，不是什么东西都收的，可以给props属性写限制条件

  //    收款方式2：有条件接收写法(接收的同时给它们进行类型进行限制)
  //   String，Number都属于JS里面内置的构造函数，内置的对象
  //   props: {
  //     name: String,
  //     age: Number,
  //     sex: String,
  //   },

  //    收款方式2之更高端写法(限制更多：接收的同时对数据进行类型限制+默认值的指定+必要性的限制)
  //   一般required和default是不会同时出现的
  methods: {
    updateAge() {
      //年龄在vc身上，使用this
      this.myAge++;
    },
  },
  props: {
    //父组件传了一堆prop,你这里要声明接收，所以是props
    name: {
      type: String, //name的类型是字符串
      required: true, //name是必须要传的
    },
    age: {
      type: Number,
      default: 99,
    },
    sex: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
