const app = "I don't do much."
var Kittens = [1,2,3]

function destructivelyAppendKitten(kitten){
  return kittens.push(kitten)
}

function destructivelyPrependKitten(kitten){
  return kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten(kitten){
  return kittens.pop(kitten)
}

function destructivelyRemoveFirstKitten(kitten){
  return kittens.shift(kitten)
}

function appendKitten(kitten){
  return [...kittens, kitten]
}

function prependKitten(kitten){
  return [kitten, ...kittens]
}

//function removeLastKitten(kitten){
  var newKittens = kittens.slice(kittens.length - 1)
  return newKittens
}

var Kittens = [1,2,3]
var newKittens = kittens.slice(kittens.length - 1)
console.log(newKittens)
