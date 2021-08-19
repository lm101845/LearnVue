<!--
 * @Author: liming
 * @Date: 2021-08-03 16:41:23
 * @LastEditTime: 2021-08-17 00:06:41
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\App.vue
-->
<template>
  <div id="root">
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>
<script>
import axios from "axios";
// 这是一个库，不是一个组件，不需要注册的，引入就能用
export default {
  name: "App",
  methods: {
    getStudents() {
      //   axios.get("http://localhost:5000/students").then(
      //   axios.get("/atguigu/http://192.168.1.5:8080/students").then(
      // 注意：请求前缀/agtuigu虽然叫前缀，但是不是放在最前方的！！这个位置是紧跟端口号的,后面的原来怎么写，还怎么写
      axios.get("http://192.168.1.5:8080/atguigu/students").then(
        //   前缀不是说是最前面，而是忽略了协议名/主机名/端口号的最前方
        //   这里我们设置了一个代理服务器，它的端口号默认和我们的一样，都是8080，原来是浏览器直接找student服务器5000要数据
        // 现在我们间接通过代理服务器(端口号8080)要数据，然后它再找student5000要数据
        //Vue.config.js里面的【devServer: {proxy: "http://localhost:5000"}】里面的
        // 5000指的是代理服务器找5000的端口的student服务器要数据

        // 注意：浏览器和代理服务器的协议名+主机名+端口号(自动一样)必须完全一致！！！！

        // 2个问题：
        // 问题1：代理服务器8080不是把所有的请求都转发给5000的！！！当你请求的资源代理服务器8080本身就有，
        // 它就不会把请求再转发给远程服务器了
        //比如public文件夹就相当于8080-这台服务器的根路径(8080服务器public里面到底有什么内容，它就有什么内容)
        // 比如你输入http://192.168.1.5:8080/test.txt，就会把test.txt里面的内容给显示到浏览器上
        // 就是说，public这个文件夹里面有的东西，都算是8080里面有的
        // 如果有一天public里面有一个文件(没有后缀)叫students，里面内容aabbcc，就会出事了

        // 问题2：你无法配置多个代理！！！
        // 你这个代理的8080，它只能把请求转发给5000，它不能转发给别人了

        // 注意：如果你使用http://192.168.1.5:8080打开的浏览器，记得要把代理服务器改成
        // 【devServer: {proxy: "http://192.168.1.5:8080"}】
        //请求之后返回的是一个Promise值，你得给2个回调：成功的回调和失败的回调
        // 无论是response还是error，它们都是对象
        (response) => {
          console.log("请求成功了", response.data);
          // response是响应对象，里面的data属性才是服务器真正给你的东西
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    getCars() {
      axios.get("http://192.168.1.5:8080/api/cars").then(
        //   你只要加了/api前缀，它就走代理，不加就不会走代理了，比较灵活
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>

<style></style>
