//////////////////////

/*
Optional Properties
Not all properties of an interface may be required. 
Some exist under certain conditions or may not be there at all. 
These optional properties are popular when creating patterns like “option bags” where you pass an object to a function that only has a couple of properties filled in.
Here’s an example of this pattern:
 */

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({color: "black", width: 100});

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
let mySquareTwo = createSquare({ colour: "red", width: 100 }); // error!

// we can get around these checks in 3 different ways:
// 1. using type assertion on the argument
let squareOne = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// 2. a better approach might be to add a string index signature if you’re sure 
// that the object can have some extra properties that are used in some special way. 
// If SquareConfigs can have color and width properties with the above types, 
// but could also have any number of other properties, then we could define it like so:

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

// or we can  assign the object to another variable: 
// Since squareOptions won’t undergo excess property checks, the compiler won’t give you an error.
let squareOptions = { colour: "red", width: 100 };
let squareTwo = createSquare(squareOptions);


// my example -- a person has to have at least name and age and they need to match these types 
// a person could also have any number of optional properties of any type
interface Person {
  name: string;
  age: number;
  [propName: string]: any;
}

function createPerson(person: Person): {name: string; age: number} {
  let newPerson: any = {};

  for (var prop in person) {
    newPerson[prop] = person[prop];
  }

  return newPerson;
}

let joe = createPerson({name: 'Joe', age: 30, ethnicity: 'Latin'});
console.log('joe: ', joe);


let leo = createPerson({name: 'Leo', age: 30, height: 6.2, weight: '180 lbs', married: true});
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
