# React Intro

https://reactjs.org/

React is a Javascript framework developed by Facebook. It is declartive in nature and helps you, the developer, focus on building UI Components which are the fundamental building blocks of your user interface. React applications are also called "Single Page Applications" where there is only one physical page load required to load the entire application. Navigating from one page to another is all done client side. This makes for a very responsive interface.

React leverages ES6 -- and we'll go over the role of Babel and Webpack play during this tutorial. You may also have heard of JSX (Javascript XML). Some call it Javascript eXtensions. This small example shows JSX.

# JSX

```javascript
const helloWorld = <h1>Hello, world!</h1>;
```

Perhaps you would think that to create something like this, you would code...

```javascript
const helloWorld = '<h1>Hello, world!</h1>';
```

No.. That's just a string. The first example created a React element. It's really that simple.

## React let's you choose what's right

React does not provide a complete application framework. It does not for example provide a HTTP library, or user interface "widgets". This a strength, not a weakness since it allows you to use the tool that you think is right. For example, for HTTP requests, if you want to use Axios.... go ahead. If you want to use Bootstrap, fine. Sematic UI, well, that's ok too.

## A complete React Application

```html
<div id="root"></div>
```

```javascript
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'React',
  lastName: 'Intro',
};

const element = <h1>Hello, {formatName(user)}!</h1>;

ReactDOM.render(element, document.getElementById('root'));
```

### What does this do?

1. The HTML code creates a DIV. It has an ID of 'root'.
1. The Javascript (JSX) uses te ReactDOM.render method to inject element into the root div.
1. The element ID consists of a JSX expression that uses a function formatName -- passing the user object.
1. formatName simply concatenates first and last names from the user object and returns thm in a string.

Note the element constant. It is a combination of HTML and a call to a Javascript function.

And the output is:

# Hello, React Intro!

## Other Things

React actually prevents injection attacks. It is 100% safe to include user input in your application, React automatically escapes any values in JSX before rendering. Everything is converted to a string. This helps prevent XSS (cross-site-scripting) attacks.

React has been around since 2011 and was made available to the public in 2013.

<hr />

&#11013; [BACK](./README.md)
