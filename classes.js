class Car {

  constructor( colour ) {
    this.setColour(colour);
  }

  getColour() {
    return this.colour;
  }

  setColour( colour ) {
    this.colour = colour ? colour : 'black';
  }

  getTopSpeed() {
     return '100kmh';
  }

} // end class

class SuperCar extends Car {

  activateTurbo() {
    console.log( 'Turbo activated!!!!' );
  }

  getTopSpeed() {
     return '300kmh';
  }

} // end class

const myCar1 = new Car();
console.log( myCar1.getColour());

const myCar2 = new Car('red');
console.log( myCar2.getColour());

console.log( myCar1.getTopSpeed());

const superCar = new SuperCar('red');
console.log( myCar2.getColour());
superCar.activateTurbo();
console.log( superCar.getTopSpeed());
