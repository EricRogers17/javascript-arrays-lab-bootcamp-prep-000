const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  // effect the underlying array and return it
  kittens.append(name);
  return kittens;
}