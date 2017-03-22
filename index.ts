enum Fruits { Apple, Banana, Orange }; // compiler treats enum as number types so iunder the hood we have { 0, 1, 2 }

let appleNum: Fruits = Fruits.Apple; // 'appleNum' is of type 'Fruits' so it returns the index of 'Apple' (0)
let apple: string = Fruits[0]; // 'apple' is of type 'string' so we assign the string value of Fruits[0] ('Apple') to the variable

console.log('appleNum: ', appleNum); // 0
console.log('apple: ', apple); // Apple



enum Pets { Cat = 2, Dog = 4, Bird }; // we can assign the numbers if we want

let catNum: Pets = Pets.Cat;
let dog: string = Pets[4];
let birdNum: Pets = Pets.Bird;

console.log('catNum: ', catNum); // 2
console.log('dog: ', dog); // Dog
console.log('birdNum: ', birdNum); // 5
