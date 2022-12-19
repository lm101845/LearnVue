/**
 * @Author liming
 * @Date 2022/12/19 12:45
 **/

//写法1：返回一个渲染函数
// export default function (){
//     return <h2>孙悟空</h2>
// }

//写法2：optionsAPI——用的少
// import {defineComponent} from "vue";
// export default defineComponent({
//     data(){
//         return {
//             age:23
//         }
//     },
//
//     render(){
//         return (<h2>{this.age}</h2>)
//     }
// })

//方法3：setup函数模式
//注：ref在template里面是自动解包的,双大括号里面不用写.value，而tsx并不会，需要手动写.value
import {defineComponent, ref} from "vue";
export default defineComponent({
    setup(){
        const flag = ref(true);
        // return ()=>(<h2 v-show={flag}>setup函数模式</h2>)
        //支持v-show
        // return ()=>(<h2 v-if={flag.value}>setup函数模式</h2>)
        //不支持v-if我们换一个思想去实现它(三元表达式)
        return ()=>(<h2>{flag.value ? '你好啊':''}</h2>)
    }
})
