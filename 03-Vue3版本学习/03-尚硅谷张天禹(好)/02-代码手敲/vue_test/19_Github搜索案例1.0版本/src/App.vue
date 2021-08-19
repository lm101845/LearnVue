<!--
 * @Author: liming
 * @Date: 2021-08-03 16:41:23
 * @LastEditTime: 2021-08-17 00:06:41
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\App.vue
-->
<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>
<script>
// import "./assets/css/bootstrap.css";
// 但是这样引入报错：字体找不到了——你虽然没有用，但是bootstrap里面用到了
// * ../fonts/glyphicons-halflings-regular.eot in ./node_modules/css-loader/dist/cjs.js??ref--6-oneO
// f-3-1!./node_modules/postcss-loader/src??ref--6-oneOf-3-2!./src/assets/css/bootstrap.css
// 如果你通过import这种形式来引入样式，脚手架会做一个【非常严格】的检查,你这个.css里面只要用到了不存在的资源，就会编译不通过
// 1.我建立一个fonts文件夹，把需要的字体下载下来——可是我这个样式里其实没有用到这个字体
// 2.我把引入字体的代码给它删了——可是以后如果要用字体的话怎么办呢？
// 这个时候就不推荐在assets里面放bootstrap.css了，你只要放到assets里面，就得通过import形式来引入，而import又比较严格。。。。。。
// 如果你Bootstrap里面没有用到奇奇怪怪的资源，你当然可以这样用了，如果用到了的话，我们就得另觅他途了
// 解决方法：另外一个引入第三方公共样式的方法，把bootstrap.css放到public文件下新建的css文件夹中，
// 在index.html里面通过link来引入，就不会有这个问题了。——你所有的组件最终编译完，最后都放到index.html里面的div里
import Search from "./components/Search";
import List from "./components/List";
export default {
  name: "App",
  components: { Search, List },
};
</script>

<style>
/* 注意：.vue里面的样式都是程序员自己写的，没有人会把第三方库(Bootstrap)里面的样式粘贴到这里 */
/* 正确的做法：把第三方成形的样式放在一个公共的位置，大家都能看到的位置*/
/* 我们可以在main.js里面引入(不推荐),或者在App.vue里面去引入(推荐) */
/* 不往里面写，但是可以在里面引入 */
</style>
