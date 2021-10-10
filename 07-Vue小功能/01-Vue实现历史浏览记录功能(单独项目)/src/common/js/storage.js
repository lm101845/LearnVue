function saveToStorage(key, val) {
  let animal = localStorage.getItem('__animal__')

  if (!animal) {
    animal = {}
  } else {
    animal = JSON.parse(animal)
  }
  
  animal[key] = val

  localStorage.setItem('__animal__', JSON.stringify(animal))
}

function loadFromStorage(key, def) {
  let animal = localStorage.getItem('__animal__')

  if (!animal) {
    return def
  }

  animal = JSON.parse(animal)
  const ret = animal[key] || def

  return ret
}

export {
  saveToStorage,
  loadFromStorage
}