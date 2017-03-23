//////////////////////
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black", width: 100 });
/**
 * Combining optional properties naively would let you to shoot yourself
 * in the foot the same way you might in JavaScript though.
 */
/**
 * i.e:
 * You could argue that this program below is correctly typed, since the width properties are compatible,
 * there’s no color property present, and the extra colour property is insignificant.
 * However, TypeScript takes the stance that there’s probably a bug in this code.
 * Object literals get special treatment and undergo excess property checking when assigning them to other variables,
 * or passing them as arguments.
 */
var mySquareTwo = createSquare({ colour: "red", width: 100 }); // error!
// we can get around these checks in 3 different ways:
// 1. using type assertion on the argument
var squareOne = createSquare({ width: 100, opacity: 0.5 });
// or we can  assign the object to another variable: 
// Since squareOptions won’t undergo excess property checks, the compiler won’t give you an error.
var squareOptions = { colour: "red", width: 100 };
var squareTwo = createSquare(squareOptions);
function createPerson(person) {
    var newPerson = {};
    for (var prop in person) {
        newPerson[prop] = person[prop];
    }
    return newPerson;
}
var joe = createPerson({ name: 'Joe', age: 30, ethnicity: 'Latin' });
console.log('joe: ', joe);
var leo = createPerson({ name: 'Leo', age: 30, height: 6.2, weight: '180 lbs', married: true });
console.log('leo: ', leo);
/**
without interface the code would be something like this

function createPerson(name: string, age: number, otherFeatures: any) {
  let newPerson = { name, age };

  for (var prop in otherFeatures) {
    newPerson[prop] = otherFeatures[prop];
  }

  return newPerson;
}

let joe = createPerson('Joe', 30, { ethnicity: 'Latin'} );
console.log('joe: ', joe);


let leo = createPerson('Leo', 30, {height: 6.2, weight: '180 lbs', married: true});
console.log('leo: ', leo);
 */
