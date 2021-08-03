/*
 * @Author: liming
 * @Date: 2021-07-11 10:16:26
 * @LastEditTime: 2021-07-11 10:22:56
 * @FilePath: \LearnVue\03-Vue3版本学习\02-尚硅谷杨洪波\02-代码手敲\01_TypeScript\02_ts在vscode中自动编译\03_类.ts
 */
// ts中书写js中的类,演示效果
(function () {
    //定义一个类型
    var Person = /** @class */ (function () {
        // 定义一个构造器函数
        function Person(firstName, lastName) {
            //更新属性数据
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + "_" + this.lastName;
        }
        return Person;
    }());
    // 定义一个函数
    function showFullName(person) {
        return person.firstName + person.lastName;
    }
    //实例化对象
    var person = new Person("诸葛", "孔明");
    console.log(person);
    console.log(showFullName(person));
})();
