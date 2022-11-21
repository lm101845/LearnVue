<template>
  <div class="list-wrapper">
    <ul class="list">
      <li class="animal-card" v-for="animal in animalData" :key="animal.id" @click="handleClick(animal)">
        <div class="animal-pic-wrapper">
          <img class="animal-pic" :src="animal.picUrl" />
        </div>
        <div class="animal-name">{{ animal.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import animalData from '../mock/data'
import { saveAnimal } from '../common/js/cache'

export default {
  data() {
    return {
      animalData
    }
  },
  methods: {
    handleClick(animal) {
      this.$router.push(`/list/${animal.id}`)
      saveAnimal(animal)
    }
  }
}
</script>

<style lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  .animal-card {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 300px;
    margin-right: 35px;
    margin-bottom: 60px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
    box-sizing: border-box;

    &:nth-child(3n) {
      margin-right: 0;
      margin-bottom: 0;
    }

    .animal-pic-wrapper {
      width: 100%;
      height: 230px;
      .animal-pic {
        width: 100%;
        height: 100%;
      }
    }

    .animal-name {
      height: 70px;
      font-size: 24px;
      font-weight: 500;
      text-align: center;
      line-height: 70px;
    }
  }
}
</style>