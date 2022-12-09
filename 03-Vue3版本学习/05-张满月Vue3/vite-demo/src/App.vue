
<template>
<!--  <div style="display:flex">-->
<!--    {{message}}-->
<!--    <hr>-->
<!--    {{num ? "我是小憨批" :"我是假的"}}-->
<!--    <div v-for="(item,index) in Arr" key="index" >-->
<!--        {{item}}-->
<!--    </div>-->
<!--    <testRef></testRef>-->
    <!--    <testReactive/>-->
    <!--    <testTo/>-->
    <!--    <testComputed/>-->
    <!--    <testCard/>-->
    <!--    <testWatch/>-->
    <!--    <testWatchEffect/>-->
    <!--    <testComponent v-if="flag"/>-->
    <!--    <button @click="flag = !flag">创建/销毁</button>-->
    <!--    <Fu/>-->
    <!--    <Father/>-->
    <!--    <Card/>-->
    <!--&lt;!&ndash;    单独引用&ndash;&gt;-->
    <!--    <GlobalCard/>-->
    <!--&lt;!&ndash;    全局引用&ndash;&gt;-->
<!--    <Tree :data="data"/>-->

<!--使用动态组件进行tab切换-->
<!--    <div @click="switchCom(item,index)" :class="[active === index ? 'active':'']" class="tabs" v-for="(item,index) in data">-->
<!--      <div>{{item.name}}</div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <component :is="comId"></component>-->

<!--    插槽-->
<!--  <Content/>-->

<!--要展示异步组件必须要使用Suspense-->
<!--    <Suspense>-->
<!--      &lt;!&ndash;Suspense组件里面默认提供了2个插槽&ndash;&gt;-->
<!--      <template #default>-->
<!--        <SyncVue/>-->
<!--      </template>-->
<!--      <template #fallback>-->
<!--      &lt;!&ndash;加载的时候做些什么，可以放一个骨架屏&ndash;&gt;-->
<!--        <skeletonVue/>-->
<!--      </template>-->
<!--    </Suspense>-->
<!--    <testTeleport/>-->
<!--    <el-button type="primary" @click="flag = !flag">切换组件</el-button>-->
<!--    &lt;!&ndash;这样写就只缓存Form组件了&ndash;&gt;-->
<!--   <keep-alive :include="['Form']">-->
<!--     <Form v-if="flag"></Form>-->
<!--     <Input v-else></Input>-->
<!--   </keep-alive>-->
  <Fu/>
</template>

<script setup lang="ts">
// import {ref} from "vue";
//
// const flag = ref<Boolean>(true)
//注意：Vue3中的组件开箱即用，不需要进行注册(export default:components:{xxx}不需要写了)
import testRef from "../src/components/testRef.vue"
 // const message:string = "我是真男人"
 // const num:number = 0
 // const Arr:Array<string> =['A', 'B', 'C', 'D']
 // Arr.splice(2,0,'E')
 //splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
 //在元素2【前面】插入

// import testReactive from "../src/components/tesReactive.vue"
// import testTo from "../src/components/testTo.vue"
// import testComputed from "../src/components/testComputed.vue"
// import testCard from "../src/components/testCard.vue"
// import testWatch from "../src/components/testWatch.vue"
// import testWatchEffect from "../src/components/testWatchEffect.vue"
// import testComponent from "../src/components/testComponent.vue"
// import Fu from "../src/components/Fu.vue"
import Father from "../src/components/Father.vue"
import Card from "../src/components/Card.vue"
// import Tree from "../src/components/Tree.vue"
import AVue from "../src/components/expame/A.vue"
import BVue from "../src/components/expame/B.vue"
import CVue from "../src/components/expame/C.vue"
import {reactive, ref, markRaw, shallowRef, defineAsyncComponent} from "vue";
import Content from "../src/layout/Content/index.vue"

// interface Tree {
//   name: string
//   checked: boolean
//   children?: Tree[]
// }
//
// const data = reactive<Tree[]>([
//   {
//     name: '1',
//     checked: false,
//     children:[
//       {
//         name:'1-1',
//         checked: false
//       }
//     ]
//   },
//   {
//     name: '2',
//     checked: true
//   },
//   {
//     name: '3',
//     checked: false,
//     children:[
//       {
//         name:'3-1',
//         checked: false,
//         children:[
//           {
//             name:'3-1-1',
//             checked: true
//           },
//           {
//             name:'3-1-2',
//             checked: false
//           },
//         ]
//       }
//     ]
//   }
// ])

// const comId = shallowRef(AVue);
// const active = ref(0);
// const data = reactive([
//   {
//     name:'A组件',
//     com:markRaw(AVue)
//     //markRaw是为了优化性能的
//   },
//   {
//     name:'B组件',
//     com:markRaw(BVue)
//   },
//   {
//     name:'C组件',
//     com:markRaw(CVue)
//   },
// ])

// const switchCom = (item:any,index:number)=>{
//   comId.value = item.com;
//   active.value = index;
// }

import Dailog from '../src/components/dialog/index.vue'
import skeletonVue from './components/skeleton.vue'

// const SyncVue = defineAsyncComponent(() =>import('../src/components/sync.vue'))

import testTeleport from '../src/components/testTeleport.vue'

// const flag = ref<boolean>(true)
import Form from '../src/components/keepalive/Form.vue'
import Input from '../src/components/keepalive/Input.vue'
// import A from '../src/components/transition/index.vue'
import Fu from '../src/components/provideandinject/Fu.vue'
</script>

<style scoped>
/*.active{*/
/*  background: skyblue;*/
/*}*/
/*.tabs{*/
/*  border:1px solid #ccc;*/
/*  padding: 5px 10px;*/
/*  margin: 5px;*/
/*  cursor: pointer;*/
/*}*/
</style>
