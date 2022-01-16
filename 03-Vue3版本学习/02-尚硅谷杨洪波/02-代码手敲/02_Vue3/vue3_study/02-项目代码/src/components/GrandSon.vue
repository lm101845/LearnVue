<!--
 * @Author: liming
 * @Date: 2022-01-17 06:22:46
 * @LastEditTime: 2022-01-17 06:37:31
 * @FilePath: \02-项目代码\src\components\GrandSon.vue
-->
<template>
    <h3 :style="{color}">GrandSon孙子级组件</h3>
</template>

<script lang="ts">
import { defineComponent,inject } from 'vue';
export default defineComponent({
    name:' GrandSon', 
    
    setup(){
        const color = inject('color');
        return {
            color
        }
    }
})

</script>

<style scoped>

</style>
