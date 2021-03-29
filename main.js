let {arrayNumbers, arrayCars} = require('./data')
let {correctSort} = require('./funtions')

console.log(arrayCars);
console.log(arrayNumbers);
console.log(arrayCars.sort());
console.log(arrayNumbers.sort());



console.log(arrayNumbers.sort((a, b) => a-b));

//  from exported function:
console.log("__------  from function-------");
console.log(correctSort(arrayNumbers));





