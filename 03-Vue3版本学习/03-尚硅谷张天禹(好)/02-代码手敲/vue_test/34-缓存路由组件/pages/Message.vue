<!--
 * @Author: liming
 * @Date: 2021-08-23 21:09:40
 * @LastEditTime: 2021-08-26 04:04:45
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\pages\Message.vue
-->
<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- <a href="/message1">{{ m.title }}</a -->
        <!-- <router-link to="/home/message/detail?id=666&title=你好啊!">{{
          m.title
        }}</router-link> -->

        <!-- 跳转路由并携带query参数，to的字符串写法 -->
        <!-- 如果你to前面不加冒号，你写出花来，它都是字符串，加了冒号，后面的就是表达式了,当作JS进行解析了 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{
          m.title
        }}</router-link> -->

        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/666/你好啊`">{{ m.title }}</router-link> -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{
          m.title
        }}</router-link> -->

        <!-- 666，你好啊是参数，而不是路由的层级，但是路由它不知道，需要你告诉路由 -->
        <!-- 跳转路由并携带query参数，to的对象写法 -->
        <!-- 个人建议使用这种写法 -->
        <!-- <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link> -->

        <!-- <router-link
          :to="{
            path: 'xiangqing',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link> -->

        <router-link
          :to="{
            name: 'xiangqing',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
        <!-- 使用query参数的话index.js里面的path后面就不用写/:id/:title了 -->

        <!-- 使用路由名字来写路径，这样就方便一些，把path换成xiangqing -->
        <!-- <router-link
          :to="{
            name: 'xiangqing',
            params: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link> -->
        <!-- 把query改成params,一个坑：如果你携带 params参数，则不允许你使用path,只允许你使用name-->
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
      <!-- 路由也是可以携带参数的 -->
    </ul>
    <hr />
    <!-- 在哪里展示，就在哪里写link-view -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Mesage",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  beforeDestroy() {
    //   注意：这个函数不能放到methods里面！！它是生命周期钩子函数！！需要单独放！！！
    console.log("Message组件即将被销毁了！");
  },
  methods: {
    pushShow(m) {
      //   console.log(this.$router);
      //   不要找路由(route)，路由只是一个规则，别人只是应用这个规则
      //    要找router，这个是路由器，它很强大，它有绝对的指挥权
      this.$router.push({
        //你原来怎么写，现在还是怎么写，直接复制即可
        name: "xiangqing",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m) {
      //   console.log(this.$router);
      //   不要找路由(route)，路由只是一个规则，别人只是应用这个规则
      //    要找router，这个是路由器，它很强大，它有绝对的指挥权
      this.$router.replace({
        //你原来怎么写，现在还是怎么写，直接复制即可
        name: "xiangqing",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>
