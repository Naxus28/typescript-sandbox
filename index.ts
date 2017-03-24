/**
 * Similarly to how we can use interfaces to describe function types, we can also describe types that we can “index into” 
 * like a[10], or ageMap["daniel"]. Indexable types have an index signature that describes the types we can use to index into 
 * the object, along with the corresponding return types when indexing. Let’s take an example:
 */

/**
 * StringArray index signature states that when a StringArray is indexed with a number, it will return a string.
 */
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

console.log(myStr);


// with an obj
interface StringObj {
  [index: string]: string; // accepts string index
  [index: number]: string; // accepts number index
}

// string index
let myObj: StringObj;
myObj = {name: 'Gabriel', profession: 'Web Dev'}

let myName: string = myObj['name'];
let profession: string = myObj['profession'];

console.log('myName: ', myName);
console.log('profession: ', profession);


// number index
let myObjTwo: StringObj;
myObjTwo = {0: 'Gabriel', 1: 'Web Dev'}

let theName: string = myObjTwo[0];
let theProfession: string = myObjTwo[1];

console.log('theName: ', theName);
console.log('theProfession: ', theProfession);


/**
 * There are two types of supported index signatures: string and number. 
 * It is possible to support both types of indexers, but the type returned from a numeric indexer must be a subtype of the type returned from the string indexer. 
 * This is because when indexing with a number, JavaScript will actually convert that to a string before indexing into an object. 
 * That means that indexing with 100 (a number) is the same thing as indexing with "100" (a string), so the two need to be consistent.
 */


class Animal {
  name: string;
}

// because 'Dog' extends 'Animal' and their indexers are different this will cause an error
class Dog extends Animal {
  breed: string;
}

// Error: indexing with a 'string' will sometimes get you a Dog!
interface NotOkay {
  [x: number]: Animal; // type-checker msg: "numeric index 'Animal' is not assignable to string index type 'Dog'"
  [x: string]: Dog; // comment this out for cod below to work
}

let bird = new Animal();

bird.name = 'danny';

console.log(bird.name);



/**
 * While string index signatures are a powerful way to describe the “dictionary” pattern, 
 * they also enforce that all properties match their return type. 
 * This is because a string index declares that obj.property is also available as obj["property"]. 
 * In the following example, name’s type does not match the string index’s type, and the type-checker gives an error:
 */

interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
    name: string;      // error, the type of 'name' is not a subtype of the indexer
}

/**
 * Finally, you can make index signatures readonly in order to prevent assignment to their indices:
 */

interface ReadonlyStringArray {
   readonly [index: number]: string;
}
let arr: ReadonlyStringArray = ["Alice", "Bob"];
arr[2] = "Mallory"; // error! type-checker msg: "Index signature in type 'ReadonlyStringArray' only permits reading."




