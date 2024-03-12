// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// destructively append a cat to the end of cats
function destructivelyAppendCat(name) {
  return cats.push(name);
}

// destructively prepend a cat to the beginning of cats
function destructivelyPrependCat(name) {
  return cats.unshift(name);
}

// destructively remove the last cat from the end of cats
function destructivelyRemoveLastCat() {
  return cats.pop();
}

// destructively remove the first cat from the beginning of cats
function destructivelyRemoveFirstCat() {
  return cats.shift();
}

// non-destructively adds a cat to the end of cats
function appendCat(name) {
  return [...cats, name];
}

// non-destructively prepends a cat to the beginning of cats
function prependCat(name) {
  return [name, ...cats];
}

// non-destructively removes the last cat from cats
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// non-destructively remove the first cat from cats
function removeFirstCat() {
  return cats.slice(1);
}
