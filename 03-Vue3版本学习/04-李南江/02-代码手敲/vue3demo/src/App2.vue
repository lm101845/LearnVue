<!--
 * @Author: liming
 * @Date: 2021-05-25 18:19:59
 * @LastEditTime: 2021-05-25 22:38:13
 * @FilePath: \LearnVue\01-Vue3.x\02-李南江Vue3.x\02-代码手敲\vue3demo\src\App.vue
-->
<template>
  <div>
      <form action="">
          <input type="text" v-model="stu.id">
          <input type="text" v-model="stu.name">
          <input type="text" v-model="stu.age">
          <input type="submit" @click="addStu">
      </form>
    <ul>
      <li v-for="(item,index) in stus" :key="index" @click="remStu(index)">
        {{item.name}}-{{item.age}}
      </li>
    </ul>
  </div>
</template>

<script>


  export default {
    name: 'App',
    data() {
      return {
        stus: [
          { id: 1, name: '张三', age: 18 },
          { id: 2, name: '李四', age: 28 },
          { id: 3, name: '王五', age: 38 },
        ],
        stu:{
            id:'',
            name:'',
            age:''
        }
        // 新增功能1的数据
      }
    },
    methods: {
      remStu(index) {
        this.stus = this.stus.filter((stu, idx) => {
          return idx != index
        })
      },
      addStu(e){
        //   表单默认行为我们不需要，先把它给注销掉
        e.preventDefault();
        const stu = Object.assign({},this.stu)
        // 拷贝一份数据
        this.stus.push(stu)
        this.stu.id='';
        this.stu.name = '';
        this.stu.age = ''
      },
    //   新增功能1的业务逻辑
    computed:{
    //   新增功能1的业务逻辑

    },
    watch:{
    //   新增功能1的业务逻辑
        
    }
    },
  }
</script>
