<!--
 * @Author: liming
 * @Date: 2021-09-03 19:01:30
 * @LastEditTime: 2021-09-03 19:01:31
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue3_test\src\components\Demo.vue
-->
<template>
  <h2>姓名：{{ person.name }}</h2>
  <h2>姓名：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}k</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
  <!-- 在Vue3里面你一点击涨薪，watch都能监视到(默认就开启了深度监视)，而在Vue2里面必须要开启深度监视才能监视到 -->
  <!-- 并且Vue3里面的深度监视你无法通过'deep:false'关掉它 -->
</template>

<script>
import { ref, reactive, watch } from "vue";
// vue3里面的watch也是变成了一个组合式的API，用法也极其简单——vue3里面的 watch是一个函数
export default {
  name: "Demo",
  setup() {
    // let person = ref({
    // 使用ref如何发现里面是对象，底层还是用的reactive
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 情况三：监视reactive所定义的响应式数据中的全部属性
    // 一个坑：此处无法正确的获得oldValue(ref是没有问题的)——现在是无法解决的，以后可能会解决
    // 不过在开发中oldValue我们也不太需要，主要关系newValue
    // watch(person.value, (newValue, oldValue) => {
    // 使用ref必须要用.value

    // watch(person, (newValue, oldValue) => {
    //   console.log("person变化了", newValue, oldValue);
    //   {
    //     deep: false;
    //     // 注意：此处的deep配置无效
    //   }
    // });

    /**情况三注意点：
     * 注意一：无法正确的获取oldValue
     * 注意二：强制开启了深度监视(deep配置无效，你写也白写)
     */

    //情况四：监视reactive所定义的一个响应式数据中的某个属性
    // watch(
    //   () => person.age,
    //   (newValue, oldValue) => {
    //     // watch(person.age, (newValue, oldValue) => {
    //     // 不能这么写，这样写监视没用，不符合人家的规则
    //     console.log("person的age变化了", newValue, oldValue);
    //      //因为person.age它本身是一个字符串，是一个基本数据类型，所以可以获取到oldValue
    //   }
    // );

    //情况五：监视reactive所定义的一个响应式数据中的某些属性
    // watch([() => person.age, () => person.name], (newValue, oldValue) => {
    //   // watch(person.age, (newValue, oldValue) => {
    //   // 不能这么写，这样写监视没用，不符合人家的规则
    //   console.log("person的age或name变化了", newValue, oldValue);
    // });

    //特殊情况
    watch(
      () => person.job,
      //   job和name,age可不一样，job不是基本数据
      //   你监视的是job,但是你改的是job里面的salary，这个时候监测不到！！！
      //   此时你需要添加deep:true属性
      (newValue, oldValue) => {
        console.log("person的job变化了", newValue, oldValue);
      },
      { deep: true }
      //此处由于监视的是reactive所定义的对象中的某个属性(它依然是一个对象)，所以deep配置有效
    );
    return {
      person,
    };
  },
};
</script>
