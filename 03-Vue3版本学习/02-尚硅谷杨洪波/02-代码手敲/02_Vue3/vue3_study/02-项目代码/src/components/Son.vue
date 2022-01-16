<!--
 * @Author: liming
 * @Date: 2022-01-17 06:22:46
 * @LastEditTime: 2022-01-17 06:22:47
 * @FilePath: \02-项目代码\src\components\Son.vue
-->
<template>
    <h3>Son子级组件</h3>
    <hr>
    <GrandSon/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GrandSon from './GrandSon.vue';
export default defineComponent({
    name:' Son', 
    components:{
        GrandSon
    }
})

</script>

<style scoped>

</style>
