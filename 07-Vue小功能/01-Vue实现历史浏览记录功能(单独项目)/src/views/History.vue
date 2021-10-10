<template>
  <div class="history">
    <animal-list :animals="animalHistory"></animal-list>
  </div>
</template>

<script>
import { loadFromStorage } from '../common/js/storage'
import AnimalList from '../components/animal-list.vue'

export default {
  data() {
    return {
      animalHistory: []
    }
  },
  mounted() {
    this.animalHistory = loadFromStorage('animal_history')
  },
  components: {
    AnimalList
  }
}
</script>

<style>

</style>