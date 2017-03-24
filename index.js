/**
 * Similarly to how we can use interfaces to describe function types, we can also describe types that we can “index into”
 * like a[10], or ageMap["daniel"]. Indexable types have an index signature that describes the types we can use to index into
 * the object, along with the corresponding return types when indexing. Let’s take an example:
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log(myStr);
// string index
var myObj;
myObj = { name: 'Gabriel', profession: 'Web Dev' };
var myName = myObj['name'];
var profession = myObj['profession'];
console.log('myName: ', myName);
console.log('profession: ', profession);
// number index
var myObjTwo;
myObjTwo = { 0: 'Gabriel', 1: 'Web Dev' };
var theName = myObjTwo[0];
var theProfession = myObjTwo[1];
console.log('theName: ', theName);
console.log('theProfession: ', theProfession);
/**
 * There are two types of supported index signatures: string and number.
 * It is possible to support both types of indexers, but the type returned from a numeric indexer must be a subtype of the type returned from the string indexer.
 * This is because when indexing with a number, JavaScript will actually convert that to a string before indexing into an object.
 * That means that indexing with 100 (a number) is the same thing as indexing with "100" (a string), so the two need to be consistent.
 */
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
// because 'Dog' extends 'Animal' and their indexers are different this will cause an error
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var bird = new Animal();
bird.name = 'danny';
console.log(bird.name);
var arr = ["Alice", "Bob"];
arr[2] = "Mallory"; // error! type-checker msg: "Index signature in type 'ReadonlyStringArray' only permits reading."
