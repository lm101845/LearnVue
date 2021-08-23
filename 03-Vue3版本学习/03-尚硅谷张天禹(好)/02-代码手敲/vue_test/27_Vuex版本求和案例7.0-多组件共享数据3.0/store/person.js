/*
 * @Author: liming
 * @Date: 2021-08-20 23:34:05
 * @LastEditTime: 2021-08-21 00:07:26
 * @FilePath: \03-尚硅谷张天禹(好)\02-代码手敲\vue_test\src\store\person.js
 */
// const personOptions = {
import axios from 'axios'
// import nanoid from 'nanoid'
import { nanoid } from "nanoid";
// 尼玛，导入nanoid的时候外面没有写{}报错，找了半天。。。。。。
export default {
  namespaced: true,
  actions: {
    addPersonWang(context, value) {
      //添加的只能是姓王的人
      if (value.name.indexOf("王") === 0) {
        context.commit("ADD_PERSON", value);
      } else {
        alert("添加的人必须姓王");
      }
    },
    // addPersonServer(context) {
    //   //联系服务器给我一个人的名字(找服务器要，就不要传value了)
    //   axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
    //     (response) => {
    //       context.commit("ADD_PERSON", { id: nanoid(), name: response.data });
    //     },
    //     (error) => {
    //       alert(error.message);
    //     }
    //   );
    // },

    addPersonServer(context) {
      axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
        (response) => {
          context.commit("ADD_PERSON", { id: nanoid(), name: response.data });
        },
        (error) => {
          alert(error.message);
        }
      );
    },
  },
  mutations: {
    ADD_PERSON(state, value) {
      console.log("mutations中的ADD_PERSON被调用了");
      state.personList.unshift(value);
    },
  },
  state: {
    personList: [
      { id: "001", name: "张三" },
      { id: "002", name: "李四" },
    ],
  },
  getters: {
    //对state进行加工，类似计算属性
    firstPersonName(state) {
      return state.personList[0].name;
    },
  },
};