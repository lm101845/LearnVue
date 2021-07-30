/*
 * @Author: liming
 * @Date: 2021-07-30 23:48:23
 * @LastEditTime: 2021-07-30 23:57:58
 * @FilePath: \04-尚硅谷张天禹\02-代码手敲\vue_basic\19_单文件组件(开发时用这个)\main.js
 */

// 有的脚手架叫index.js
// 有的脚手架叫app.js(比如React)
// Vue里面就叫main.js

//只有APp.vue才有资格和main.js进行对话
//而School和Student它们是直接和App.vue对话的

import App from './App.vue'

new Vue({
    el: '#root',
    template: `<App></App>`,
    // 准备一个容器
    components: { App }
    // 只需要注册组件中的【宰相】就可以了
})