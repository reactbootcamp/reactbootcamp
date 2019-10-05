# ES6 Introduction

## ES6?  What's this?

ES=ECMAScript. ECMA = European Computer Manfucatures Association -- but simply known as ECMA.  It is a standards organisation

ES6 is an evolution of Javascript.  The legacy Javascript that is still prevalent on many web sites is known as ES5. 

### what are the differences?

There are many... some you will find more useful than others, and some you will not be able to live without. Let's start with some simple things.

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

const is immuatble -- i.e. it cannot be changed.  Also, when defining a const variable, it must be assigned a value.

Incorrect:

```javascript
const myVar;
```

Correct:

```javascript
const myVar = 1;
```

## Arrow Functions

Arrow functions are one of the most important changes with ES6.  If you've written ES5 Javascript, then you will appreciate the difficulties with preserving 'this'.  Arrow functions not only bring a cleaner syntax -- and less keystrokes -- but also preserve the vaue of this making our code much cleaner.  It also makes our code more robust if we don't have to worry about 'this'.

Here's an example from a React app.  Notice how we are using an Arrow function in the second setInterval.  This is a React class -- and we expect THIS to reference the class.  With the 'non-arrow implementation, it does not.  it represent Window.  But with the Arrow function implementation, it does.  Making life simpler.

```javascript
class Helper1 extends React.Component {
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

This yields: (Note Window vs Helper1)

```bash
11:06:50.355 Helper1.jsx:15 Helper1 {props: {…}, context: {…}, refs: {…}, updater: {…}, onClick: ƒ, …}
11:06:51.354 Helper1.jsx:10 Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
11:06:51.355 Helper1.jsx:15 Helper1 {props: {…}, context: {…}, refs: {…}, updater: {…}, onClick: ƒ, …}
11:06:52.354 Helper1.jsx:10 Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}

```

### Arrow Function Summary

In an arrow function, "this" represents the **owner** of the functionb.  Without an arrow, "this" represents the **object that calls the function**.


