/*
 * @Author: liming
 * @Date: 2021-08-03 09:55:48
 * @LastEditTime: 2021-08-28 17:51:27
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\main.js
 */

//引入Vue
import Vue from 'vue';
//引入App.vue
import App from './App'
//完整引入
//引入ElementUI组件库
// import ElementUI from "element-ui";
//引入ElementUI的全部样式
import { Button,Row,DatePicker } from "element-ui";
// 第一个组件名字可以随便写
Vue.component('atguigu-button', Button);
Vue.component("atguigu-row", Row);
Vue.component("atguigu-date-picker", DatePicker);
// 你引入了这3个组件以后，样式就不用你自动引入了，ElementUI它会自动分析的


// 把所有的样式都引入了。。。。。。
// import 'element-ui/lib/theme-chalk/index.css';

//关闭Vue的生产提示
Vue.config.productionTip = false
//应用ElementUI——把里面的100多个组件都给你注册上了，不管你用不用都注册了。。。。。。
// Vue.use(ElementUI);
new Vue({
  el: "#app",
  render: (h) => h(App),
});


 