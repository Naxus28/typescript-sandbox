//In TypeScript, both undefined and null actually have their own types named undefined and null respectively. 
//Much like void, they’re not extremely useful on their own:
var u = undefined;
var n = null;
console.log(u); // undefined
console.log(n); // null
// By default null and undefined are subtypes of all other types. 
// That means you can assign null and undefined to something like number or string.
var num = undefined;
var str = null;
console.log(num); // undefined
console.log(str); // null
//reassign types
num = 10;
str = 'now i have a string value';
console.log(num); // 10
console.log(str); // 'now i have a string value'
/*
 * Important note:
 * When using the --strictNullChecks flag (in tscConfig.json), 'null' and 'undefined' are only assignable to void and their respective types.
 * This helps avoid many common errors.
 * In cases where we want to pass in either a string or null or undefined, you can use the union type string | null | undefined.
 * they encourage the use of --strictNullChecks when possible.
 */
// using union type
function notSureWhatWillCome(someValue) {
    return someValue;
}
// now we can call notSureWhatWillComewith either specified type
console.log(notSureWhatWillCome('I am a string')); // I am a string
console.log(notSureWhatWillCome(null)); // null
console.log(notSureWhatWillCome(undefined)); // undefined
console.log(notSureWhatWillCome(100)); // 100
