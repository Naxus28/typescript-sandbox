/**
 * In addition to describing an object with properties, 
 * interfaces are also capable of describing function types.
 * To describe a function type with an interface, we give the interface a call signature. 
 * This is like a function declaration with only the parameter list and return type given. 
 * Each parameter in the parameter list requires both name and type.
 */

interface SearchFunc {
   (source: string, subString: string): boolean;
}

/**
 * Once defined, we can use this function type interface like we would other interfaces. 
 * Here, we show how you can create a variable of a function type and assign it a function value of the same type.
 */

// could also declare the variable first and then assign the function if 
// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {};
let mySearch: SearchFunc = function(source: string, subString: string) {
  let result = source.search(subString);
  
  // need to return the type specified on the interface
  return result > -1;
  // in case we returned a different type the type-checker would warn us there is something wrong
}

let searchInName = mySearch('gabriel', 'serg'); 
let searchInPhrase = mySearch('Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'conse'); 

console.log('searchInName: ', searchInName);// false
console.log('searchInPhrase: ', searchInPhrase);// true

/**
 * For function types to correctly type-check, the names of the parameters do not need to match. 
 * We could have, for example, written the above example like this:
 */
let search: SearchFunc = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}

/**
 * if we pass the arguments in the order they were defined in the interface
 * we don't need to specify the types. Also, the return type is implied by the return statement.
 */
let newSearch: SearchFunc = function(src, sub) {
  let result = src.search(sub);
  return result > -1; 
}


///////////

// my example
interface InstertString {
  (originalStr: string, subString: any) : string;
}

// refactor this to work on objs with multiple keys
let instertString: InstertString = function(originalStr: string, subString: any): string {
  let arraykey = Object.keys(subString).toString();
  let newStr = originalStr.replace(/{([^{}]*)}/g, subString[arraykey]);
  
  // keysArray.forEach((key) => {
  //   originalStr = originalStr.replace(/{([^{}]*)}/g, subString[key]);
  // })

  return newStr;
}

let phrase = instertString('My name is {name}.', {name: 'Gabriel Ferraz'});
console.log('phrase: ', phrase);

let phraseTwo = instertString('The {animal} is pretty large', {animal: 'Elephant'});
console.log('phraseTwo: ', phraseTwo);


