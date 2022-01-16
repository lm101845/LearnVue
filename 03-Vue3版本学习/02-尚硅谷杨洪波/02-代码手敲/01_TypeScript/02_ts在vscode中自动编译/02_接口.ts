/*
 * @Author: liming
 * @Date: 2021-07-11 10:05:23
 * @LastEditTime: 2021-07-11 10:10:39
 * @FilePath: \LearnVue\03-Vue3版本学习\02-尚硅谷杨洪波\02-代码手敲\01_TypeScript\02_ts在vscode中自动编译\02_接口.ts
 */

// 接口:是一种能力,一种约束而已
(() => {
  // 定义一个接口
  interface IPerson {
    firstName: string; //姓氏
    lastName: string; // 名字
  }
  //输出姓名
  function showFullName(person: IPerson) {
    return person.firstName + "_" + person.lastName;
  }

  const person1 = {
    firstName: "东方",
    lastName: "不败",
    };
    
    console.log(showFullName(person1));
    
})();
