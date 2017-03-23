/**
 * Readonly properties Some properties should only be modifiable when an object is first created.
 * You can specify this by putting readonly before the name of the property:
 */
// You can construct a Point by assigning an object literal. 
// After the assignment, x and y can’t be changed.
var p1 = { x: 10, y: 20 };
p1.x = 5; // error! 
/**
 * TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T>
 * with all mutating methods removed, so you can make sure you don’t change your arrays after creation:
 */
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
//we can override the array assignment with an assertion though
var b = ro;
// or
b = ro;
console.log('b: ', b); //[1, 2, 3, 4]
///////////////////////  
