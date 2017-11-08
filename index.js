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
