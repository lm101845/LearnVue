/*
 * @Author: liming
 * @Date: 2021-08-03 09:55:48
 * @LastEditTime: 2021-08-28 17:37:48
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\main.js
 */

//引入Vue
import Vue from 'vue';
//引入App.vue
import App from './App'

//引入ElementUI组件库
import ElementUI from "element-ui";
//引入ElementUI的全部样式
// 把所有的样式都引入了。。。。。。
import 'element-ui/lib/theme-chalk/index.css';
//关闭Vue的生产提示
Vue.config.productionTip = false
//应用ElementUI——把里面的100多个组件都给你注册上了，不管你用不用都注册了。。。。。。
Vue.use(ElementUI);
new Vue({
  el: "#app",
  render: (h) => h(App),
});


 