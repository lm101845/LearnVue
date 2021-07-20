/*
 * @Author: liming
 * @Date: 2021-05-21 21:00:14
 * @LastEditTime: 2021-05-21 21:02:18
 * @FilePath: \LearnTypeScript\01-尚硅谷李智超\part4\06-接口.ts
 */
(function () {
    // 描述一个对象的类型
    type myType = {
        name: string,
        age: number,
    }

    const obj: myType = {
        name: 'liming',
        age:27
    }
})()