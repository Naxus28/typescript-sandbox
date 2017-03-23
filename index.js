// without interface
/**
 * The printLabel function has a single parameter that requires that the object passed in
 * has a property called label of type string. Notice that our object actually has more properties t
 * han this, but the compiler only checks that at least the ones required are present and match the types required.
 */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabelInFace(labelledObj) {
    console.log(labelledObj.label);
}
var myObjInFace = { size: 10, label: "Size 10 Object" };
printLabelInFace(myObj);
// not the best idea to return a string from a math method but this is just
// for practice--the design of this method is also not that great
function integerPower(numbers) {
    var result;
    if (numbers.base === 0) {
        result = 0;
    }
    else if (numbers.exponent === 0) {
        result = 1;
    }
    else {
        result = numbers.base;
        for (var i = 1; i < Math.abs(numbers.exponent); i++) {
            result *= numbers.base;
        }
        if (numbers.exponent < 0) {
            result = '1/' + result.toString();
        }
    }
    return result;
}
var pOfTwo = integerPower({ base: 5, exponent: 2 });
var pOfZero = integerPower({ base: 0, exponent: 4 });
var pOfMinus2 = integerPower({ base: 5, exponent: -2 });
console.log(pOfTwo);
console.log(pOfZero);
console.log(pOfMinus2);
///////////////////////
