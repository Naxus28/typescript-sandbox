/*
Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data.
It has no runtime impact, and is used purely by the compiler.
TypeScript assumes that you, the programmer, have performed any special checks that you need.
 */
// Type assertions have two forms. One is the “angle-bracket” syntax and as-syntax:
var someValue = "this is a string"; // this variable can be reassigned to any type
var strLengthAngBracket = someValue.length; // this could also simply be written as 'let strLengthAngBracket: number = someValue.length;''
// OR
var strLengthAs = someValue.length;
console.log('strLengthAngBracket: ', strLengthAngBracket);
console.log('strLengthAs: ', strLengthAs);
// another example
var numStr = '10'; // this variable type can't be reassigned
var num = 20;
var concatValues = numStr + num; // concats values
console.log('concatValues: ', concatValues); //1020
var castNumStr = parseInt(numStr); // this could also simply be written as 'let castNumStr: number = parseInt(numStr);'
console.log(castNumStr + num); // 30
