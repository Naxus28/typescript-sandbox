// need to declare and initialize array on the same statement
let list: number[] = [1, 2, 3];
let listOne: number[] = [];
let listTwo: number[]; //this returns type 'undefined'; it is useless because since it is not an array we cannot assign any values to it
let petList: string[] = ['cat', 'dog'];

console.log(list); // [1, 2, 3]
console.log(listOne); // []
console.log(listTwo); // undefined
// listTwo[0] = 10; // Cannot set property '0' of undefined
console.log(petList); // ['cat', 'dog']

// arrays can also be declared like this
let numList: Array<number> = [4, 5, 6];
let nameList: Array<string> = ['Gabriel', 'Paulo', 'Chris'];
console.log(numList); // [4, 5, 6]
console.log(nameList); //['Gabriel', 'Paulo', 'Chris']
