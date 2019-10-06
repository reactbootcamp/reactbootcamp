# ES6?  What's this?

ES=ECMAScript. ECMA = European Computer Manfucatures Association -- but simply known as ECMA.  It is a standards organisation

ES6 is an evolution of Javascript.  The legacy Javascript that is still prevalent on many web sites is known as ES5. 

### what are the differences?

There are many... some you will find more useful than others, and some you will not be able to live without. Let's start with some simple things.

<hr />

## Defining variables and Block Scope

ES5
```Javascript
var myVar
```

ES6
```Javascript
let myVar
const myVar
```

The primary difference between these is that lt and const are block scoped. Consider this:

```Javascript
{
   var  myvar = 'hello world' 
}

console.log( myvar )
```

This yields 'hello world'

Now, let try...

```Javascript
{
   const  myvar = 'hello world' 
}

console.log( myvar )
```

This yields:

```bash
console.log( myvar )         ^

ReferenceError: myvar is not defined

```

Note that if we used let the result would be the same since let and const are block scoped.

Another example

```Javascript
let i = 100;

for ( let i = 0; i < 10; i++ ) {
    console.log(`the value of i inside the block is ${i}`)
}
console.log(`the value of i outside the block is ${i}`)

```

This yields:

```bash
the value of i inside the block is 0
the value of i inside the block is 1
the value of i inside the block is 2
the value of i inside the block is 3
the value of i inside the block is 4
the value of i inside the block is 5
the value of i inside the block is 6
the value of i inside the block is 7
the value of i inside the block is 8
the value of i inside the block is 9
the value of i outside the block is 100

```

Aside: I was cheeky and snuck in templating.  Notice the ${expression} in the console statement :-)  More on this later.

const is immuttable -- i.e. it cannot be changed.  Also, when defining a const variable, it must be assigned a value.

Incorrect:

```javascript
const myVar;
```

Correct:

```javascript
const myVar = 1;
```

<hr />

## Arrow Functions

Arrow functions are one of the most important changes with ES6.  If you've written ES5 Javascript, then you will appreciate the difficulties with preserving 'this'.  Arrow functions not only bring a cleaner syntax -- and less keystrokes -- but also preserve the value of this making our code much cleaner.  It also makes our code more robust if we don't have to worry about 'this'.

Here's an example from a React app.  Notice how we are using an Arrow function in the second setInterval.  This is a React class -- and we expect THIS to reference the class.  With the 'non-arrow' implementation, it does not.  it represent Window.  But with the Arrow function implementation, it does.  Making life simpler.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toISOString()
    }
    window.setInterval(function () {
      console.log(this);
    }, 1000)


    window.setInterval(() => {
      console.log(this);
    }, 1000);
  }

```

This yields: (Note Window vs MyComponent)

```bash
11:06:50.355 .... MyComponent {props: {…}, context: {…}, refs: {…}, updater: {…}, onClick: ƒ, …}
11:06:51.354 .... Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
11:06:51.355 .... MyComponent {props: {…}, context: {…}, refs: {…}, updater: {…}, onClick: ƒ, …}
11:06:52.354 .... Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}

```

### Arrow Function Summary

In an arrow function, "this" represents the **owner** of the function.  Without an arrow, "this" represents the **object that calls the function**.

<hr />

## Parameters and Defaults

This is another much needed addition in ES6.  Essentially, if a paremeter is 'undefined', then a default can be provided.  It works when destruring as well.

Example:

```javascript
function calculate( age=33 ) {
    console.log( age );
}

calculate();
calculate(27)

```

This yields:

```bash
33
27
```


```javascript
const {age = 33} = {}
console.log( age );
```

This yields:

```bash
33
```

```javascript
const {age = 33} = {age: 22}
console.log( age );
```

This yields:

```bash
22
```

<hr />

## Object Destructuring

Destructuring assignment allows you to assign 1 or more values from an object or array to named variables in a single step.


```javascript
const cars = {
    type: 'Mercedes',
    color: 'Silver'
}
let { type, color } = cars
console.log( type, color) 
```

Another example:

ES5
```javascript
var firstValue = values[0];
var secondValue = values[1];
var thirdValue = values[2];
```

ES6
```javascript
let [firstValue, secondValue, thirdValue] = values;
```

## Rest and Spread

Rest and Spread are very handy additions to ES6.  Here's an example

```javascript
const f1Teams = [
    'Mercedes', 'Ferrari', 'Red Bull', 'McLaren', 'Renault', 'Toro Rosso', 'Racing Point', 'Alfa Romeo', 'Haas', 'Williams'
]

console.log(f1Teams);

function logLeaders(first, second, third, ...rest) {
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(...rest);

}
const f1Leaders = [first, second, third, ...rest] = f1Teams;
logLeaders(...f1Leaders)
```

This yields:

```bash
[ 'Mercedes',
  'Ferrari',
  'Red Bull',
  'McLaren',
  'Renault',
  'Toro Rosso',
  'Racing Point',
  'Alfa Romeo',
  'Haas',
  'Williams' ]
Mercedes
Ferrari
Red Bull
McLaren Renault Toro Rosso Racing Point Alfa Romeo Haas Williams
```

Here's what's happening:

1. We create an array tat holds he name of F1 Teams
1. This line ```const f1Leaders = [first, second, third, ...rest] = f1Teams;``` creates a new Array from f1Teams
1. The line ```logLeaders(...f1Leaders)``` calls the function logLeaders but using the spread operator on the Array
1. The function logLeaders has 4 arguments.  The first 3 values in the array are assigned and the 'rest' are simply catered for via the ...rest argument

So we can see in this example, we only really care about the first 3, and the rest is well the ...rest.

<hr />

## ES6 Classes

Width ES5, you could easily bring a lot of OOP to your code using protoype or other ways.  However, now we have 'proper' classes that have constructors, and methods like other languagses. Let's take a look.  

Here's a simple class called ```Car``` that has a method called getColour (and setColour).  It also takes an argument that sets the colour of the Car in the Constructor.

```javascript
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

} // end class

const myCar1 = new Car();
console.log( myCar1.getColour());

const myCar2 = new Car('red');
console.log( myCar2.getColour());
```

This yields:

```bash
black
red
```

### Extending Classes

Now let's see how subclassing works.  i.e. extending a Base class to make it more functional.  Here we create a new class 'SuperCar' that extends Car and adds a new function ```activateTurbo``` and also overrides te base class ```getTopSpeed``` function.

Notice how we use the getColour function in the SuperCar class which is defined in the base class.

```javascript
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

```

This yields:

```bash
black
red
100kmh
red
Turbo activated!!!!
300kmh
```

### Class Summary

Pretty cool!

ES6 classes now make JavaScript look like other OOP languages like Java.  As you will see in the stateful React Components lesson, there are certain 'lifecycle' methods you override (such as render).  These components exploit ES6 classes.  (Of course, there are now ReactHooks... but we'll explore all of that soon.)




