var nestedArray = [1,[2,3],4,[5,[6,7,[8,9,[10]]]]];
var copy = [...nestedArray.map (item => Array.isArray(item) ? [...item]:item)];
console.log(copy)