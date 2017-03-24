/**
 * One of the most common uses of interfaces in languages like C# and Java,
 * that of explicitly enforcing that a class meets a particular contract, is also possible in TypeScript.
 */
var Clock = (function () {
    function Clock(h, m) {
    }
    return Clock;
}());
var ClockOne = (function () {
    function ClockOne(h, m) {
    }
    ClockOne.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return ClockOne;
}());
// error: "Class 'ClockTwo' incorrectly implements interface 'ClockConstructor'. 
// type 'ClockTwo' provides no match for the signature 'new (hour: number, minute: number): any'"
var ClockTwo = (function () {
    function ClockTwo(h, m) {
    } // this is not an instance, but a static side of the class
    return ClockTwo;
}());
/**
 * This is because when a class implements an interface, only the instance side of the class is checked.
 * Since the constructor sits in the static side, it is not included in this check.
 */
