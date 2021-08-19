<!--
 * @Author: liming
 * @Date: 2021-08-03 16:41:23
 * @LastEditTime: 2021-08-18 23:19:59
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\App.vue
-->
<template>
  <div class="container">
    <!-- App组件是Category组件的使用者，并且数据也是存放在App里面的 -->
    <!-- 现在，我把数据不放在App里面了，放到Category里面了——此时插槽就没有必要使用了 -->
    <!-- <Category title="游戏" type="ul"> </Category>
    <Category title="游戏" type="ol"> </Category>
    <Category title="游戏" type="h4"> </Category> -->

    <!-- App是使用者，它可以决定我可以把什么样的结构给你 -->
    <!-- 数据在Category里，我们通过作用域插槽来拿到Category里的作用域，并且解析后返回给它 -->
    <Category title="游戏">
      <!-- App组件里面没有games，数据都在Category里面，这就像JS里面的作用域问题了 -->
      <!-- 我有点疑惑，我把数据放到App里面就可以了啊。。。。。。是不是实际中不行啊。。。 -->
      <!-- 有些场景：数据不在你(App)这里，而且数据也不允许给你，你就只能通过作用域插槽了 -->
      <!-- 要求：【必须】包裹一层template -->
      <template scope="atguigu">
        <!-- 这个只能叫scope,中文叫作用，注意：不是scoped！！！ -->
        <!-- {{ atguigu }} -->
        <!-- {{ atguigu.youxi }} -->
        <ul>
          <li v-for="(item, index) in atguigu.youxi" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <!-- <template scope="atguigu"> -->
      <!-- 可以使用解构赋值，简化代码 -->
      <template scope="{youxi}">
        <ol>
          <li style="color: red" v-for="(item, index) in youxi" :key="index">
            {{ item }}
          </li>
        </ol>
        <!-- <h4>{{ atguigu.msg }}</h4> -->
        <!-- <h4>{{ msg }}</h4> -->
      </template>
    </Category>

    <Category title="游戏">
      <!-- <template scope="{youxi}"> -->
      <!-- 另外一种写法：slot-scope，效果一样，新旧API的问题，slot-scope是新的API -->
      <template slot-scope="{ youxi }">
        <h4 v-for="(item, index) in youxi" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>
<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
  //   data() {
  //     return {
  //       games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
  //     };
  //   },
};
</script>

<style lang="less">
@flex: {
  display: flex;
  justify-content: space-around;
  /* 调一下主轴的对齐方式——平分剩余空间*/
};

.container,
.foot {
  @flex();
}

h4 {
  text-align: center;
}
</style>
