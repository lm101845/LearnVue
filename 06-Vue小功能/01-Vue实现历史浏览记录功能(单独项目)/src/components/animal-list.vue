<template>
  <ul class="animal-list">
    <li 
      v-for="animal in animals" 
      class="animal-list-item"
      :key="animal.id"
    > 
      <div class="animal-id">
        {{ animal.id }}
      </div>
      <div class="animal-pic">
        <img :src="animal.picUrl" />
      </div>
      <div class="animal-name">{{ animal.name }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    animals: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
.animal-list {
  width: 550px;
  margin: 0 auto;
}
.animal-list-item {
  display: flex;
  align-items: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: #fff;

  .animal-id {
    width: 100px;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
  }

  .animal-pic {
    width: 300px;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .animal-name {
    width: 150px;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
  }
}
</style>