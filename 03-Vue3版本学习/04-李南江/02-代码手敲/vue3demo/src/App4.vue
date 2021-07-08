<!--
 * @Author: liming
 * @Date: 2021-05-25 18:19:59
 * @LastEditTime: 2021-05-27 12:41:51
 * @FilePath: \LearnVue\01-Vue3.x\02-李南江Vue3.x\02-代码手敲\vue3demo\src\App.vue
-->
<template>
  <div>
       <form action="">
          <input type="text" v-model="state2.id">
          <input type="text" v-model="state2.name">
          <input type="text" v-model="state2.age">
          <input type="submit" @click="addStu">
      </form>
      <ul>
          <li 
          v-for="(item,index) in state.stus"  
          :key="index"
          @click="remStu(index)"
          >{{item.name}}-{{item.age}}</li>
      </ul>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  import useRemoveStudent from './rem'
  import useAddStudent from './add'
  export default {
    name: 'App',
    setup() {
        let {state,remStu} = useRemoveStudent()
        let {state2,addStu} = useAddStudent(state)
    //     let state2 = reactive({
    //         stu:{
    //             id:'',
    //             name:'',
    //             age:''
    //         }
    //     })
    //   // ref函数注意点
    //   // ref函数不仅可以监听简单类型变化，也可以监听复杂类型变化
    //   // ref和reactive只是为了满足不同人的习惯而已。
    // //   let state = reactive({
    // //     stus: [
    // //       { id: 1, name: '张三', age: 18 },
    // //       { id: 2, name: '李四', age: 28 },
    // //       { id: 3, name: '王五', age: 38 },
    // //     ]
    // //   })

    // //   function remStu(index){
    // //       state.stus = state.stus.filter((stu,idx)=>idx !== index)
    // //   }
      
    //   function addStu(e){
    //       e.preventDefault();
    //       console.log(state2.stu)
    //       const stu = Object.assign({},state2.stu)
    //       state.stus.push(stu)
    //       state2.stu.id = ''
    //       state2.stu.name = ''
    //       state2.stu.age = ''
    //   }
      return {state,remStu,state2,addStu}
    }
  }
 
//  function useAddStudent(state){
//       let state2 = reactive({
//             stu:{
//                 id:'',
//                 name:'',
//                 age:''
//             }
//         })
//       function addStu(e){
//           e.preventDefault();
//           console.log(state2.stu)
//           const stu = Object.assign({},state2.stu)
//           state.stus.push(stu)
//           state2.stu.id = ''
//           state2.stu.name = ''
//           state2.stu.age = ''
//       }
//       return {state2,addStu}
//  }


//  function useRemoveStudent(){
//       let state = reactive({
//         stus: [
//           { id: 1, name: '张三', age: 18 },
//           { id: 2, name: '李四', age: 28 },
//           { id: 3, name: '王五', age: 38 },
//         ]
//       })

//       function remStu(index){
//           state.stus = state.stus.filter((stu,idx)=>idx !== index)
//       }
//       return {state,remStu}
//  }

</script>
