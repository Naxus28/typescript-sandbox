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
 * This prohibits you from using them to check that a class also has particular types for the private side of the class instance.
 */

/**
 * Difference between the static and instance sides of classes
 * When working with classes and interfaces, it helps to keep in mind that a class has two types: 
 * the type of the static side (no need to instantiate the class. i.e. Array.from(), Array.isArray()) and the type of the instance side. 
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
   constructor(h: number, m: number) { } // this is not an instance, but a static side of the class
 }

/**
 * This is because when a class implements an interface, only the instance side of the class is checked. 
 * Since the constructor sits in the static side, it is not included in this check.
 */




