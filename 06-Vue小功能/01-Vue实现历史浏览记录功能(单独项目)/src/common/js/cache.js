import { saveToStorage, loadFromStorage } from './storage'

const ANIMAL_KEY = 'animal_history'
const ANIMAL_MAX_LEN = 3

function saveAnimal(animal) {
  const animals = loadFromStorage(ANIMAL_KEY, [])
  insertArr(
    animals, 
    animal, 
    item => item.id === animal.id,
    ANIMAL_MAX_LEN
  )
  saveToStorage(ANIMAL_KEY, animals)
  return animals
}

function insertArr(arr, item, compareFn, maxLen) {
  const index = arr.findIndex(compareFn)

  if (index === 0) {
    return
  }

  if (index > 0) {
    arr.splice(index, 1)
  }

  arr.unshift(item)

  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

export {
  saveAnimal
}