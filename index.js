// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// destructively append a cat to the end of cats
function destructivelyAppendCat(name) {
    cats.push(name);
};

// destructively prepend a cat to the beginning of cats
function destructivelyPrependCat(name) {
    cats.unshift(name);
};

// destructively remove the last cat from the end of cats
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
};

// destructively remove the first cat from the beginning of cats
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
};

// non-destructively adds a cat to the end of cats
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
};

// non-destructively prepends a cat to the beginning of cats
function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
};

// non-destructively removes the last cat from cats
function removeLastCat(name) {
    const newCats = cats.slice(0,-1);
    return newCats;
};

// non-destructively remove the first cat from cats
function removeFirstCat(name) {
    const newCats = cats.slice(1);
    return newCats;
};