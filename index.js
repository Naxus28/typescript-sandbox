var Car = (function () {
    function Car(carProps) {
        this.engine = carProps.engine;
        this.color = carProps.color;
    }
    return Car;
}());
var yellowFord = new Car({ engine: 'Ford', color: 'yellow' });
console.log(yellowFord);
var Boat = (function () {
    function Boat(engine, color) {
        this.engine = engine;
        this.color = color;
        this.engine = engine;
        this.color = color;
    }
    return Boat;
}());
var yellowBoat = new Boat('BMW', 'yellow');
console.log(yellowBoat);
