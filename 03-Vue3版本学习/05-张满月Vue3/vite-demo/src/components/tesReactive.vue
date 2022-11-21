<!--
 * @Author liming
 * @Date 2022/11/18 18:29
-->
<template>
  <form action="">
    <input type="text" v-model="form.name">
    <br>
    <input type="text" v-model="form.age">
    <br>
    <button @click.prevent="submit">提交</button>
    <hr>
  </form>
  <div>
    <ul>
      <li v-for="(item,index) in list.arr" key="index">{{item}}</li>
    </ul>
    <button @click="add">添加</button>
    <button @click="show">测试readonly</button>
    <hr>
    {{obj2}}
    <button @click="edit">修改</button>
  </div>
</template>

<script setup lang="ts">
import {reactive, readonly, shallowReactive} from "vue";

type M = {
  name:string,
  age:number
}
let form = reactive<M>({
  name:"小满",
  age:23
})

form.age  = 23;
//ref取值和赋值都要加.value,而reactive不需要,直接取即可

//ref支持所有类型参数
//而reactive只支持引用类型参数,object,array,map,set等

const submit = ()=>{
  console.log(form)
}

// let list = reactive<string[]>([])
let list = reactive<{
  arr:string[]
}>({
  arr:[]
})

const add = ()=>{
  // list.push("EDG")
  setTimeout(()=>{
    let res = ["edg",'rng','jdg']
    // list = res;
    //reactive是Proxy代理的对象，你直接赋值会破坏掉它的代理，你不能直接给它赋值，否则会破坏掉响应式对象
    // list.push(...res)
    //解决方案1：数组可以使用push加解构
    list.arr = res
    // 解决方案2:添加一个对象，把数组作为一个属性去解决
    console.log(list)
  },2000)
}

let obj = reactive({name:'小满'})
const read = readonly(obj)
// read.name = "大满"  //只读属性，无法赋值
const show = ()=>{
  console.log(obj,read)
}

let obj2:any = shallowReactive({
  foo:{
    bar:{
      num:1
    }
  }
})

const edit = ()=>{
  obj.name = "我要改了"
  obj2.foo.bar.num = "我被影响了";
  console.log(obj2)
}
</script>

<style scoped>

</style>
