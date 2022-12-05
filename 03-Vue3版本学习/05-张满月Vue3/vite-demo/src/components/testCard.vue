<!--
 * @Author liming
 * @Date 2022/12/5 7:32
-->
<template>
  <table style="width:800px"  border="1" cellspacing="0">
    <thead>
    <tr>
      <th>名称</th>
      <th>数量</th>
      <th>单价</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item,index) in data">
      <td align="center">{{item.name}}</td>
      <td align="center">
        <button @click="addAndSub(item,false)">-</button>
        {{item.num}}
        <button @click="addAndSub(item,true)">+</button>
      </td>
      <td align="center">{{item.price}}</td>
      <td align="center">
        <button @click="del(index)">删除</button>
      </td>
    </tr>
    </tbody>
    <tfoot>
    <td></td>
    <td></td>
    <td></td>
    <td align="center">总价：{{$total}}</td>
    </tfoot>
  </table>
</template>

<script setup lang="ts">
import {computed, reactive, ref} from "vue";

type Shop = {
  name:string
  num:number,
  price:number

}

let $total = ref(0)

const data = reactive<Shop[]>([
  {
    name:'裤子',
    num:1,
    price:100
  },
  {
    name:'衣服',
    num:1,
    price:200
  },
  {
    name:'帽子',
    num:1,
    price:300
  }
])

const addAndSub = (item:Shop,type:boolean):void =>{
  if(item.num >1 && !type){
    item.num--;
  }
  if(item.num < 99 && type){
    item.num++
  }
  // total()
}

const del = (index:number)=>{
  data.splice(index,1)
  // total()
}

//写法1：
// const total = ()=>{
//   $total.value = data.reduce((prev,next)=>{
//     return prev + next.num * next.price
//   },0)
// }
// total()   //第一次就要调用一下

//写法2：使用计算属性
//注：因为computed返回的就是ref类型的值，所以不用写$total.value了
$total =computed<number>(()=>{
  return data.reduce((prev,next)=>{
    return prev + next.num * next.price
  },0)
})
</script>

<style scoped>

</style>
