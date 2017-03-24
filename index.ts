interface ICar{  
  engine: string;
  color: string;
}

class Car {  
  engine: string;
  color: string;

  constructor (carProps: ICar) {
    this.engine = carProps.engine;
    this.color = carProps.color;
  }
} 

let yellowFord = new Car({engine: 'Ford', color: 'yellow'});
console.log(yellowFord);

// OR this way (cleaner)

interface IBoat{  
  engine: string;
  color: string;
}

class Boat implements IBoat{  
  constructor (public engine: string, public color: string) {
    this.engine = engine;
    this.color = color;
  }
} 

let yellowBoat = new Boat('BMW', 'yellow');
console.log(yellowBoat);
