/*
 * @Author: liming
 * @Date: 2021-08-03 09:55:48
 * @LastEditTime: 2021-08-04 16:31:48
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_test\src\main.js
 */
//引入Vue
import Vue from 'vue';
//引入App.vue
import App from './App'

import plugins from './plugins'
//Express中使用app.use来使用中间件，而这里使用Vue.use使用插件，效果一样的

//应用(使用)插件
//不仅仅人家在调用的时候把Vue给你，而且还允许你往后调用的时候带参数，就很强
Vue.use(plugins,1,2,3)


//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
    el: '#app',
    render:h=>h(App)
})