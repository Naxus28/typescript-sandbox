/**
 * As we mentioned earlier, interfaces can describe the rich 
 * types present in real world JavaScript. 
 * Because of JavaScript’s dynamic and flexible nature, 
 * you may occasionally encounter an object that works as a 
 * combination of some of the types described above.
 * One such example is an object that acts as both a function 
 * and an object, with additional properties:
 */
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
console.log(c);

//When interacting with 3rd-party JavaScript, 
//you may need to use patterns like the above to fully describe the shape of the type.
