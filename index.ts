/**
 * Like classes, interfaces can extend each other. 
 * This allows you to copy the members of one interface into another, 
 * which gives you more flexibility in how you separate your interfaces into reusable components.
 */
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

//////
/**
 * An interface can extend multiple interfaces, creating a combination of all of the interfaces.
 */

interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let sq = <Square>{};
sq.color = "blue";
sq.sideLength = 10;
sq.penWidth = 5.0;


/////
// this could be designed differently but it is just for demo
interface Person {
  name: string;
  age: number;
}

interface Profession {
  profession: {name: string, field: string, company: string};
}

// could have done it like this as well: 
// interface Profession extends Person, then interface Engineer extends Profession
// in this case I don't think it matters becuase a professional needs to be a person
// and an engineer is a person with a profession
interface Engineer extends Person, Profession {
}

let joe = <Engineer>{};

joe.name = 'Joe';
joe.age = 33;
joe.profession = {name:'Engineer', field: 'Software', company: 'Apple'} ;

console.log(joe.name);
console.log(joe.profession.name);
console.log(joe.profession.field);
console.log(joe.profession.company);







