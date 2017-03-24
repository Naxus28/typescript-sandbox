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
////////////////////////
interface IBoat{  
  engine: string;
  color: string;
}

class Boat implements IBoat{  
  // need to declare these two props of the class
  // they are public by default but we can add the keyword if we want
  public engine: string; 
  public color: string;

  constructor (engine: string, color: string) {
    this.engine = engine;
    this.color = color;
  }
} 

let yellowBoat = new Boat('BMW', 'yellow');
console.log(yellowBoat);

//OR even this way (even cleaner)
//////////////////
interface IPlane{  
  engine: string;
  color: string;
}

class Plane implements IPlane{  
  // the 'public' keyword creates the properties on this class automatically
  constructor (public engine: string, public color: string) {}
} 

let yellowPlane = new Plane('Embraer', 'yellow');
console.log(yellowPlane);

