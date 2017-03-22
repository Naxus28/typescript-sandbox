var Fruits;
(function (Fruits) {
    Fruits[Fruits["Apple"] = 0] = "Apple";
    Fruits[Fruits["Banana"] = 1] = "Banana";
    Fruits[Fruits["Orange"] = 2] = "Orange";
})(Fruits || (Fruits = {}));
; // compiler treats enum as number types so iunder the hood we have { 0, 1, 2 }
var appleNum = Fruits.Apple; // 'appleNum' is of type 'Fruits' so it returns the index of 'Apple' (0)
var apple = Fruits[0]; // 'apple' is of type 'string' so we assign the string value of Fruits[0] ('Apple') to the variable
console.log('appleNum: ', appleNum); // 0
console.log('apple: ', apple); // Apple
var Pets;
(function (Pets) {
    Pets[Pets["Cat"] = 2] = "Cat";
    Pets[Pets["Dog"] = 4] = "Dog";
    Pets[Pets["Bird"] = 5] = "Bird";
})(Pets || (Pets = {}));
; // we can assign the numbers if we want
var catNum = Pets.Cat;
var dog = Pets[4];
var birdNum = Pets.Bird;
console.log('catNum: ', catNum); // 2
console.log('dog: ', dog); // Dog
console.log('birdNum: ', birdNum); // 5
