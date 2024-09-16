const array = ['a', 'b', 'c'];

const iterator = array.entries();

for (let [index, element] of iterator) {
    console.log(index, element);
}

