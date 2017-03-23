// without interface
/**
 * The printLabel function has a single parameter that requires that the object passed in 
 * has a property called label of type string. Notice that our object actually has more properties t
 * han this, but the compiler only checks that at least the ones required are present and match the types required.
 */
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);



/**
 * // with interface
 * The interface LabelledValue is a name we can now use to describe the requirement in the 
 * previous example. It still represents having a single property called label that is of type string. 
 * Notice we didn’t have to explicitly say that the object we pass to printLabel implements this 
 * interface like we might have to in other languages. Here, it’s only the shape that matters. 
 * If the object we pass to the function meets the requirements listed, then it’s allowed.
 */
interface LabelledValue {
    label: string;
}

function printLabelInFace(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObjInFace = {size: 10, label: "Size 10 Object"};
printLabelInFace(myObj);



//////////////////////

interface IntegerPower {
  base: number;
  exponent: number;
}

// not the best idea to return a string from a math method but this is just
// for practice--the design of this method is also not that great
function integerPower(numbers: IntegerPower): {result: number | string} {
  let result;
   
  if (numbers.base === 0) { 
    result = 0;
  } else if (numbers.exponent === 0) { 
    result = 1;
  } else {
    result = numbers.base;

    for (var i=1; i < Math.abs(numbers.exponent); i++) {
      result*=numbers.base;
    }

    if (numbers.exponent < 0) {
      result = '1/' + result.toString();
    }
  }

  return result;
}

let pOfTwo = integerPower({ base: 5, exponent: 2 });
let pOfZero = integerPower({ base: 0, exponent: 4 });
let pOfMinus2 = integerPower({ base: 5, exponent: -2 });

console.log(pOfTwo);
console.log(pOfZero);
console.log(pOfMinus2);

///////////////////////
