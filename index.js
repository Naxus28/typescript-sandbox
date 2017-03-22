// need to declare and initialize array on the same statement
var list = [1, 2, 3];
var listOne = [];
var listTwo; //this returns type 'undefined'; it is useless because since it is not an array we cannot assign any values to it
console.log(list);
console.log(listOne);
console.log(listTwo); // undefined
// listTwo[0] = 10; // Cannot set property '0' of undefined
