# Create React App

## About

Create Reat App is a tool that create a fully working React application for you fro the command line. It creates many of the things that you need to develop full-function, testable applications. For example, it includes Webpack, Babel, JEST and Enzyme, and helpful script to build and deploy your application.

It is opinionated -- meaning it doesn't really ask you about the structure of the application. It just does it :-) This is not a bad thing since being opinionated means that all apps created by this tools will look the same.

This means that if someone new joins your team and they have used create-react-app before then the structure etc. will be easily understood.

## Installing

Note: You need to have installed NodeJS first.

```bash
npm install -g create-react-app
```

The -g switch means install it globally. This makes create-react-app available from the command line.

## Creating your first app

Steps.

Create a folder called reactbootcamp, then we'll create a new app in there.

```bash
mkdir reactbootcamp
cd reatbootcamp
create-react-app rbexample1
```

After a minute ot so, you should see

```bash

Success! Created rbexample1 at .... reactbootcamp/rbexample1
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd rbexample1
  yarn start

Happy hacking!

```

Pretty simple! A fully functional React application that contains just about everything you need!

Start the server (yarn start) and you will see this screen...

![React App](./assets/images/reactApp.png 'React App')

## What's Yarn?

I mentioned in the pre-requisites that npm is the way we install npm packages. This is true. yarn is a utility from Facebook that essentially does the same thing. Before npm v5.6, yarn was quicker, and offered better integrity. It's now a case of what you're used to -- although as stated, they accomplish the same thing.

For me, I use npm and the lessons in this tutorial will use npm.

Now that we have created our first app, we're ready to go!

<hr />

&#11013; [BACK](./README.md)
