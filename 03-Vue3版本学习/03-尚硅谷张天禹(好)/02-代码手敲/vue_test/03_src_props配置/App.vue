<template>
  <div>
    <Student name="李四" sex="女" age="18" />
    <hr />
    <Student name="王五" sex="男" age="20+1" />
    <!-- 写法1：在标签里面写标签属性(组件标签也是标签)-->
    <!-- 第一步：传数据。 -->
    <!-- 第二步：跟子组件说一声，要用我传的数据——使用全新的配置项【props】-->
    <!-- 我支付宝给你转钱，不需要你确认 -->
    <!-- 但是我微信给你转钱，你需要确认才能转账成功，这里类似微信转账 -->
    <!-- 这里的20你就算不写引号，它也会自动给你加引号的，这个固定的写法，值(value)必须是字符串 -->
    <hr />
    <Student name="赵六" sex="男" :age="20" />
    <hr />
    <Student name="大毛" sex="男" :age="20 + 1" />
    <!-- 如果你写了冒号，里面的就是表达式了 -->
    <!-- :age是动态绑定，我确实想给你传age,但是age的值得是【运行引号里面的红色(指20)的js表达式执行的结果】-->
  </div>
</template>

<script>
//引入Student组件
import Student from "./components/Student";
export default {
  name: "App",
  components: { Student },
};
</script>

<style></style>
