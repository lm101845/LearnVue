<!--
 * @Author liming
 * @Date 2022/11/18 7:36
-->
<template>
  <div>
    123
    Ref:{{ Man }}
    <hr>
    shallowRef:{{ Man2 }}
    <hr>
    使用triggerRef进行强制更新:{{ Man3 }}
    <hr>
    customerRef:{{obj}}
    <hr>
<!--    ref获取dom元素-->
    <div ref="dom1">我是DOM</div>

  </div>
  <hr>
  <button @click="change">修改</button>
</template>

<script setup lang="ts">
import {isRef, ref,shallowRef,triggerRef,customRef} from 'vue'
//shallowRef用于做浅层响应式
//ref：深层次的响应
import type{Ref} from 'vue'  //这个是Ref的interface

//customRef表示我们自定义的ref

const dom1 = ref<HTMLDivElement>();   //注意：变量名要和ref起的名字一样,并且还要.value一下
console.log(dom1.value?.innerText,'dom1')  //注意：setup里面还没渲染，所以这里是undefined
function myRef<T>(value:T){
  let timer:any
  return customRef((track,trigger)=>{
    //customRef函数也是浅层的
    return {
      get(){
        track()
        return value
        //track用来收集依赖
      },
      set(newVal){
        console.log("触发了,用于调接口的优化操作,比如防抖")
        clearTimeout(timer)  //先清空之前的定时器
        timer = setTimeout(()=>{
          console.log("处理防抖，在这里调接口")
          value = newVal
          timer = null;  //用完之后给它清一下
        },500)
        trigger()
      }
    }
  })
}

const obj = myRef<string>("小满4")

type M = {
  name:string
}
// const Man = {name: "小满"}
const Man = ref<M>({name: "小满"})  //写法1
// const Man:Ref<M> = ref({name: "小满"})  //写法2

const Man2 = shallowRef<M>({name: "小满2"})

const Man3 = shallowRef<M>({name: "小满3"})

//ref支持泛型，或者不写，它可以自己推导
const change = () => {
  // Man.name = "大满"  //不行

  // Man.value.name = "大满"
  //固定语法：你要修改或者取值，必须要加一个.value,不加的话修改不了
  // console.log(Man)
  // console.log(isRef((Man)))   //判断是否为ref对象的函数
  //注：shallowRef如果和ref一起用则shallowRef也会变成深层次

  console.log("=====")
  Man2.value.name = "大满2"   //这样不是响应式(如果change函数里面没有使用过ref函数的话)
  Man3.value.name = "大满3"   //这样不是响应式(如果change函数里面没有使用过ref函数的话)
  triggerRef(Man3)
  //即：shallowRef不能和ref一起混着写
  // Man2.value = {
  //   //这样写才是响应式的
  //   name:"大满2"
  // }
  console.log(Man2)

  console.log('xxxxxxxxxxxxxxx')
  obj.value = "大满4"

  console.log("111111111")
  console.log(dom1,'dom1期初')
  console.log(dom1.value?.innerText,'dom1')
}
</script>

<style scoped>

</style>
