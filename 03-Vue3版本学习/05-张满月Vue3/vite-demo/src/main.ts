import { createApp } from 'vue'
import App from './App.vue'
import Card from './components/Card.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import mitt from 'mitt'

const Mit = mitt();
export const app = createApp(App);

/**
 * 这是一段 TypeScript 代码，它声明了一个名为 vue 的模块。该模块导出了一个名为 ComponentCustomProperties 的接口，
 * 接口中定义了一个名为 $Bus 的属性，类型为 typeof Mit。
 *
 * 这意味着你可以在组件中使用 $Bus 属性，并且该属性的类型为 Mit 类型的类型。这个类型的具体含义取决于 Mit 类型的定义。
 */
declare module 'vue'{
    export interface ComponentCustomProperties{
        $Bus:typeof Mit
    }
}


app.config.globalProperties.$Bus = Mit;
app.use(ElementPlus)
//可以将它注册为一个全局组件，
app.component('GlobalCard', Card)
app.mount('#app')
