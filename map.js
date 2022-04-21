const add = (a, b) => {
  return a + b;
};

console.log(
  [
    { id: 1, result: 64 },
    { id: 2, result: 87 },
    { id: 3, result: 89 },
  ]
    .map((a) => a.result)
    .reduce(add, 0)
);
console.log([1, 2, 3, 4, 5, 6].reduce(add, 0));
