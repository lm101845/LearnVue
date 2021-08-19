<!--
 * @Author: liming
 * @Date: 2021-08-18 22:30:29
 * @LastEditTime: 2021-08-18 23:26:49
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\components\Category.vue
-->
<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- <ul>
      <li v-for="(item, index) in games" :key="index">{{ item }}</li>
    </ul> -->

    <!-- <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot> -->
    <!-- Category组件数据在这，根据数据生成的代码也在这，我们可以不使用插槽了 -->
    <!-- 接下来我提一个需求：数据都是这4个游戏，但是根据这4个游戏生成的结构不一样(由使用者来定)，分别是：无序列表、有序列表、h4-->
    <!-- 一个比较笨的方法，App组件传一个type数据，根据type数据里面内容不同进行条件渲染，这是可行的，但是弊端：你要写很多判断,不灵活-->
    <!-- 此时你就可以借助作用域插槽了 -->
    <slot :youxi="games" msg="hello">我是默认的一些内容</slot>
    <!-- <slot name="haha" :youxi="games" msg="hello">我是默认的一些内容</slot> -->
    <!-- 作用域插槽也是可以有名字的！！！ -->
    <!-- 它就是把这个youxi传给了插槽的使用者 -->
    <!--这是一个插槽，你写插槽的目的？等着往里面塞结构。那你注意：谁往你里面塞结构，那么这个youxi就传给谁  -->
    <!-- 这个是默认插槽 -->
    <!-- 插槽的作用就是：插槽的使用者往插槽里面塞东西，但是作用域插槽，有种感觉让数据流逆着过去了-->
    <!-- App是插槽的使用者！！！ -->
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      // 数据在插槽定义的那个组件(Category)里面
      //   但是用这个数据生成的结构是由插槽的使用者(App)而决定的，你说ul就ul,你说ol就ol,你说h4就h4

      //   插槽的作用：让父组件可以向子组件指定位置插入html结构，这也是一种组件间通信方式，适用于父组件=》子组件
      //   您能在一个组件结构中写另外一个组件的标签，这就是父子
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
};
</script>

<style lang="less">
.category {
  background-color: skyblue;
  /* 这里宽高老师是静心设计过的 */
  width: 200px;
  height: 300px;
  h3 {
    text-align: center;
    background-color: orange;
  }
}
</style>
