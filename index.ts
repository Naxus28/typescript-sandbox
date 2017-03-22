/*
Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” 
A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. 
It has no runtime impact, and is used purely by the compiler. 
TypeScript assumes that you, the programmer, have performed any special checks that you need.
 */

// Type assertions have two forms. One is the “angle-bracket” syntax and as-syntax:

let someValue: any = "this is a string"; // this variable can be reassigned to any type
let strLengthAngBracket: number = (<string>someValue).length; // this could also simply be written as 'let strLengthAngBracket: number = someValue.length;''
// OR
let strLengthAs: number = (someValue as string).length;

console.log('strLengthAngBracket: ', strLengthAngBracket); // 16
console.log('strLengthAs: ', strLengthAs); // 16


// another example
let numStr: string = '10'; // this variable type can't be reassigned
let num: number = 20;

let concatValues = numStr + num; // concats values
console.log('concatValues: ', concatValues); //1020

let castNumStr: number = parseInt(<string>numStr); // this could also simply be written as 'let castNumStr: number = parseInt(numStr);'
console.log(castNumStr + num); // 30
