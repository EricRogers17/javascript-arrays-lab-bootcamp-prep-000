const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  // effect the underlying array from the global array kittens
  // and return it.
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  // effect the underlying kittens array and remove
  // the last kitten
  // the returning array should only have Milo and Otis
  kittens.pop(name);
  return kittens;
}
