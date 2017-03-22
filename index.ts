// when we don't know the type beforehand (the value may be created dynamically) we assign the type 'any'
// this prevents type checking during compilation so we can get away with not assigning types in certain cases

let uncertain: any = 4;
console.log(typeof uncertain); // number

uncertain = false;
console.log(typeof uncertain); // boolean

uncertain = 'Now I am a string';
console.log(typeof uncertain); // string

uncertain = {};
console.log(typeof uncertain); // object