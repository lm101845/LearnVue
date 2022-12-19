<!--
 * @Author liming
 * @Date 2022/12/19 14:55
-->
<template>
  <div v-if="modelValue" class="model">
    {{modelValue}}
    <div class="close"><button @click="close">关闭</button></div>
    <h3>我是v-model子组件,dialog</h3>
    <div>内容：<input :value="textValue" type="text" @input="change"></div>
<!--
  input 和 change 是两个 HTML 元素的事件。

  input 事件会在用户输入时立即触发，包括文本输入、选择日期、单选框、复选框、下拉框等。
  它的目的是提供用户实时反馈，例如在输入密码时可以实时显示密码强度。

  change 事件会在用户离开输入框时触发，也就是用户输入完成后才会触发。
  它的目的是在用户完成输入后进行一些操作，例如验证输入是否符合规范。

  因此，两者的主要区别在于触发时机不同：input 事件是在用户输入时立即触发，
  而 change 事件是在用户离开输入框时触发。
-->
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue:boolean,
  textValue:string,
  textValueModifiers?:{
    isBt:boolean
  }
}>()
const emit = defineEmits(['update:modelValue','update:textValue'])
//update:modelValue这个是固定写法
const close = ()=>{
  emit('update:modelValue',false)
}

const change = (e:Event)=>{
  const target = e.target as HTMLInputElement
  emit('update:textValue',props?.textValueModifiers?.isBt ? target.value +  '变态' :target.value)
}

</script>

<style scoped lang="less">
.model{
  width: 400px;
  height: 400px;
  border: 5px solid #ccc;
  .close{
    text-align: right;
  }
}
</style>
