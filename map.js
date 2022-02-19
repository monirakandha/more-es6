const numbers = [4, 5, 6, 7,9,10];
const output2 = [];
// for (const number of numbers){
//     const result = number *3;
//     output.push(result);
// }
// console.log(output);

// function doubleOld(number){
//     return number*2
// }

const doubleIt = number => number * 2;
// for (const number of numbers){
//     const result = doubleIt(number);
//     output.push(result);
// }
// console.log(output);

const output = numbers.map(number => number * 2);
console.log(output);


const square = numbers.map(x => x * x);
console.log(square);