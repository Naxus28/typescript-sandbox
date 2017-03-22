

//Tuple types allow us to express an array where the type of a fixed number of elements is known, but need not be the same. 
//For example, we can have a string and a number
var tuple; // declare the tuple
tuple = ['Hello', 10]; // initialize it
tuple[3] = 5; // assign elements outside of the known indices assigned -- has to be either of the types expressed on the declaration otherwise it will error out
console.log('tuple: ', tuple); // [ 'Hello', 10, , 5 ] -- notice it is missing index 2, which is assigned an empty string
console.log('tuple length: ', tuple.length); // 4

// need to declare and initialize array on the same statement
var list = [1, 2, 3];
var listOne = [];
var listTwo; //this returns type 'undefined'; it is useless because since it is not an array we cannot assign any values to it
console.log(list);
console.log(listOne);
console.log(listTwo); // undefined
// listTwo[0] = 10; // Cannot set property '0' of undefined


