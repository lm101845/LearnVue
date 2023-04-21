<template>
  <div>
    <div v-if="status === 0">
      已营销内容
    </div>
    <div v-else>
      未营销内容
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentComponent",
  props: {
    status: {
      type: Number,
      default: 0
    }
  }
};
</script>
