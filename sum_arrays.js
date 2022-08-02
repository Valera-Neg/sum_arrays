function sum (numbers) {
  "use strict";

  const initVal = 0;
  const sumWithInit = numbers.reduce((prev, current) => prev + current, initVal)
  
  return sumWithInit;
};


console.log(sum([])) // -> 0
console.log(sum([1, 5.2, 4, 0, -1])) // -> 9.2
console.log(sum([-2.398])) // -> -2.398