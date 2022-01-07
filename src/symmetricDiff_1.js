function symOfTwo(first, second) {
  const checkedArray = [];
  const symDiff = [];

  for (const element of first) {
    if(!checkedArray.includes(element)){
      checkedArray.push(element);

      if (!second.includes(element)) {
        symDiff.push(element);
      }
    }
  };

  for (const element of second) {
    if (!checkedArray.includes(element)) {
      symDiff.push(element);
      checkedArray.push(element);
    }
  };

  return symDiff;
};

function sym(...args) {
  const [first, second, ...rest] = args;

  const result = symOfTwo(first, second);

  return rest.length === 0 ? result : sym(result, ...rest);
};

console.log(sym([1, 2, 3], [5, 2, 1, 4]));     // => [3,4,5]
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));  // => [3,4,5]
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5]));  // => [3,4,5]

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))  // => [1,4,5]
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))  // => [2, 3, 4, 6, 7]
