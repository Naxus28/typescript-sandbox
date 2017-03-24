var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    } // this is not an instance, but the static side of the class
    return ClockTwo;
}());
// this is just a convenience method used to instantiate the classes
// we can instantiate the classes directly if we want (i.e. new DigitalClock(7, 34, 'p.m.'))
// it takes the 'ClockCtructor', the hour, and the minute, and returns an obj of type 'ClockIface'
function createClock(ctor, hour, minute, timeOfTheDay) {
    // needs to enforce that 'DigitalClock' and 'AnalogClock' meet the contract established on 'ClockCtructor'
    return new ctor(hour, minute, timeOfTheDay);
}
// parent class from which we will extend other 'clock' classes
var ClockParent = (function () {
    function ClockParent(h, m, tOfTheDay) {
        this.hour = h;
        this.minute = m;
        this.timeOfTheDay = tOfTheDay;
    }
    ClockParent.prototype.tick = function () { };
    ClockParent.prototype.setTime = function () {
        this.currentTime = this.hour + ':' + this.minute + ' ' + this.timeOfTheDay;
    };
    ClockParent.prototype.getTime = function () {
        return this.currentTime;
    };
    return ClockParent;
}());
// instanciates parent class implicitly
var DigitalClock = (function (_super) {
    __extends(DigitalClock, _super);
    function DigitalClock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // overrides parent method
    DigitalClock.prototype.tick = function () {
        return "beep beep: it is";
    };
    return DigitalClock;
}(ClockParent));
// instanciates parent class implicitly
var AnalogClock = (function (_super) {
    __extends(AnalogClock, _super);
    function AnalogClock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // overrides parent method
    AnalogClock.prototype.tick = function () {
        return "tick tock: it is";
    };
    return AnalogClock;
}(ClockParent));
// creates instances of clock classes
var digital = createClock(DigitalClock, 12, 17, 'p.m.'); // instantiates with convenience method
var digitalTwo = new DigitalClock(7, 34, 'p.m.'); // this is the same as the above
var analog = createClock(AnalogClock, 7, 32, 'a.m.');
var clockLogger = function (clockInstance) {
    clockInstance.setTime();
    // clockInstance.constructor['name'] gets class name; type-checker yells if we use 'constructor.name'
    // unless we assign type 'any' to the constructor and get the name from the variable:
    // let class: any = digital.constructor; console.log(class.name);
    console.log(clockInstance.constructor['name'] + ' ' + clockInstance.tick() + ' ' + clockInstance.getTime());
};
clockLogger(digital);
clockLogger(digitalTwo);
clockLogger(analog);
