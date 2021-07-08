/*
 * @Author: liming
 * @Date: 2021-05-27 12:38:18
 * @LastEditTime: 2021-05-27 12:40:28
 * @FilePath: \LearnVue\01-Vue3.x\02-李南江Vue3.x\02-代码手敲\vue3demo\src\rem.js
 */
  import {
      reactive
  } from 'vue'

 function useRemoveStudent() {
     let state = reactive({
         stus: [{
                 id: 1,
                 name: '张三',
                 age: 18
             },
             {
                 id: 2,
                 name: '李四',
                 age: 28
             },
             {
                 id: 3,
                 name: '王五',
                 age: 38
             },
         ]
     })

     function remStu(index) {
         state.stus = state.stus.filter((stu, idx) => idx !== index)
     }
     return {
         state,
         remStu
     }
}
 
export default useRemoveStudent