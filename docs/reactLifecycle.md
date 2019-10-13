# Components

## Definition

A React component is a JavaScript class --or function -- that can accepts input parameter (which are called Props) and return a JSX element.  Consider the returned JSX element to be your markup.

There are different types of components.

1. Function.  Or sometimes referred to as Stateless.  These component simply take props (which are just input parameters).  They do not manage ant state. (More on that soon).
1. Class Components.  Or sometimes called Stateful.  The primary difference here is that Stateful component can have logic and can manage state.  State is being able to sore and modify state that is unique to this component.  (For example, is a checkbox selected or not?  What is the value of a particular input field etc.)

How do yo know which type of component to build?

Here are some guidelines:

1. You need to manage local state. (For example, the state of input fields etc.)  
1. You need to add lifecycle methods to your component.  (D you need to acquire data from a server when this component is loaded?)
1. You need to add logic for event handlers.  (Do you need to post data when a button is clicked?)

All well and godd.. but let's see some code to illustrate.