/**
 * One of the most common uses of interfaces in languages like C# and Java, 
 * that of explicitly enforcing that a class meets a particular contract, is also possible in TypeScript.
 */
interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) { }
}

/**
 * You can also describe methods in an interface that are implemented in the class, 
 * as we do with setTime in the below example:
 */
interface ClockInterfaceOne {
    currentTime: Date;
    setTime(d: Date);
}

class ClockOne implements ClockInterfaceOne {
  currentTime: Date;
  setTime(d: Date) {
     this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}

/**
 * Interfaces describe the public side of the class, rather than both the public and private side. 
 * This prohibits you from using them to check that a class also has particular 
 * types for the private side of the class instance.
 */

/**
 * Difference between the static and instance sides of classes:
 * When working with classes and interfaces, it helps to keep in mind that a class has two types: 
 * the type of the static side (no need to instantiate the class. i.e. Array.from(), Array.isArray()) 
 * and the type of the instance side (var array = new Array();). 
 * You may notice that if you create an interface with a construct signature and try to create a class 
 * that implements this interface you get an error:
 */
 interface ClockConstructor {
    new (hour: number, minute: number);
 }

 // error: "Class 'ClockTwo' incorrectly implements interface 'ClockConstructor'. 
 // type 'ClockTwo' provides no match for the signature 'new (hour: number, minute: number): any'"

 class ClockTwo implements ClockConstructor {
   currentTime: Date;
   constructor(h: number, m: number) { } // this is not an instance, but the static side of the class
 }
/**
 * This is because when a class implements an interface, only the instance side of the class is checked. 
 * Since the constructor sits in the static side, it is not included in this check.
 * Instead, you would need to work with the static side of the class directly.
 *  
 * In this example, we define two interfaces, ClockCtructor for the constructor and 
 * ClockInterface for the instance methods. Then for convenience we define 
 * a constructor function createClock that creates instances of the type that is passed to it.
 */

// constructs a class whose constructor takes hour and minute and returns an obj of type 'ClockIface'
interface ClockCtructor {
  new (hour: number, minute: number, timeOfTheDay: string): ClockIface;
}

// the interface establishes what properties/methods a class needs to have
interface ClockIface {
  hour: number; // property be created in the constructor
  minute: number; // property be created in the constructor
  timeOfTheDay: string; // property be created in the constructor
  currentTime: any; //property to be returned from 'getTime'
  tick(); // dummy method
  setTime(); // sets time
  getTime(); // gets time
}

// this is just a convenience method used to instantiate the classes
// we can instantiate the classes directly if we want (i.e. new DigitalClock(7, 34, 'p.m.'))
// it takes the 'ClockCtructor', the hour, and the minute, and returns an obj of type 'ClockIface'
function createClock(ctor: ClockCtructor, hour: number, minute: number, timeOfTheDay: string): ClockIface {
  // needs to enforce that 'DigitalClock' and 'AnalogClock' meet the contract established on 'ClockCtructor'
  return new ctor(hour, minute, timeOfTheDay);
}

// parent class from which we will extend other 'clock' classes
class ClockParent implements ClockIface {
  hour: number; 
  minute: number; 
  timeOfTheDay: string;
  currentTime: any; 

  constructor(h: number, m: number, tOfTheDay: string) { 
    this.hour = h;
    this.minute = m;
    this.timeOfTheDay = tOfTheDay;
  }

  tick() {}
  setTime(){
    this.currentTime = this.hour + ':' + this.minute + ' ' + this.timeOfTheDay;
  }
  getTime(){
    return this.currentTime;
  } 
}

// instanciates parent class implicitly
class DigitalClock extends ClockParent {
  // overrides parent method
  tick() {
    return "beep beep: it is";
  }
}

// instanciates parent class implicitly
class AnalogClock extends ClockParent {
  // overrides parent method
  tick() {
    return "tick tock: it is";
  }
}

// creates instances of clock classes
let digital = createClock(DigitalClock, 12, 17, 'p.m.'); // instantiates with convenience method
let digitalTwo = new DigitalClock(7, 34, 'p.m.'); // this is the same as the above
let analog = createClock(AnalogClock, 7, 32,  'a.m.');

let clockLogger = (clockInstance) => {
  clockInstance.setTime();
  // clockInstance.constructor['name'] gets class name; type-checker yells if we use 'constructor.name'
  // unless we assign type 'any' to the constructor and get the name from the variable:
  // let class: any = digital.constructor; console.log(class.name);
  console.log(clockInstance.constructor['name'] + ' ' + clockInstance.tick() + ' ' + clockInstance.getTime());
};

clockLogger(digital);
clockLogger(digitalTwo);
clockLogger(analog);





























