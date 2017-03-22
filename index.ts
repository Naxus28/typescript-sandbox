// need to declare and initialize array on the same statement
let list: number[] = [1, 2, 3];
let listOne: number[] = [];
let listTwo: number[]; //this returns type 'undefined'; it is useless because since it is not an array we cannot assign any values to it

console.log(list);
console.log(listOne);
console.log(listTwo); // undefined
// listTwo[0] = 10; // Cannot set property '0' of undefined
