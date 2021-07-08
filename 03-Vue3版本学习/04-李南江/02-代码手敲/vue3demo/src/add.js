/*
 * @Author: liming
 * @Date: 2021-05-27 12:38:28
 * @LastEditTime: 2021-05-27 12:39:39
 * @FilePath: \LearnVue\01-Vue3.x\02-李南江Vue3.x\02-代码手敲\vue3demo\src\add.js
 */
  import {
      reactive
  } from 'vue'

 function useAddStudent(state) {
     let state2 = reactive({
         stu: {
             id: '',
             name: '',
             age: ''
         }
     })

     function addStu(e) {
         e.preventDefault();
         console.log(state2.stu)
         const stu = Object.assign({}, state2.stu)
         state.stus.push(stu)
         state2.stu.id = ''
         state2.stu.name = ''
         state2.stu.age = ''
     }
     return {
         state2,
         addStu
     }
}
 
export default useAddStudent