<template>
  <div>
    <School />
    <hr />
    <Student />
  </div>
</template>

<script>
//引入Student组件
import Student from "./components/Student";
import School from "./components/School";
export default {
  name: "App",
  components: { Student, School },
};
</script>

<style></style>
