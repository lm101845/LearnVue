<!--
 * @Author: liming
 * @Date: 2021-08-03 16:41:23
 * @LastEditTime: 2021-08-23 20:45:43
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\App.vue
-->
<template>
  <div>
    <div>
      <div class="row">
        <Banner />
        <!-- 你亲自写的Banner组件标签，它是一般组件 -->
        <!-- 开发中为了区分，一般把它们放到不同的文件夹里面 -->
        <!-- pages里面放路由组件，components里面放一般组件 -->
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <!-- 原始HTML中我们使用a标签实现页面的跳转 -->
            <!-- <a class="list-group-item" href="./about.html">About</a> -->
            <!-- <a class="list-group-item active" href="./home.html">Home</a> -->

            <!--  -->
            <!-- 你要想使用路由，你就不能使用a标签了，你得使用路由给我们提供的特殊的标签，它的名字叫router-link-->
            <!-- a标签使用href实现页面的跳转，而router-link标签使用to来实现页面的跳转 -->
            <!-- 注意：不要加点，不能忘了/ -->
            <!-- router-link最终还是会转换为a标签的！！！！！ 是通过vue-router这个库转的-->
            <!-- 疑问：如果我这里不是a标签，而是2个按钮的？后面我们会学到编程式路由导航，可以解决这个问题 -->
            <!-- 到时候，不管你写按钮，图片还是视频，我都能让它做到一点击就进行跳转 -->

            <!--Vue中借助router-link标签实现路由的切换   -->
            <router-link class="list-group-item" active-class="active" to="/about"
              >About</router-link
            >
            <router-link class="list-group-item" active-class="active" to="/home"
              >Home</router-link
            >

            <!-- 注意：不用的路由组件或者说当你切换切走了的路由组件，它是被【销毁】了！！！ -->
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <!-- <div class="panel-body">此处到底展示什么组件得看用户点击的是哪个导航项</div> -->
            <div class="panel-body">
              <!-- 指定组件的呈现位置 -->
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "./components/Banner";
export default {
  name: "App",
  components: { Banner },
  //   注意：这里components是复数！！！少写一个s是不行的！！！！
  //   这里的Baner是一般组件，而About和Home是路由组件，它们不是一路人
};
</script>

<style lang="less"></style>
