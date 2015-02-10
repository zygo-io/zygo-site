---
title: hello world!
subtitle: Yet Another Hello World. Sorry.
category: tutorial
id: helloworld
thumb: Once
---

If you read through the [prerequisites](/category/tutorial/post/prereq) you'll have a pretty good idea of what you _need_ for zygo to work, but how do you _use_ this stuff? Never fear! Hello world is here. In this tutorial we set up a simple zygo application and run you through creating a HelloWorld component and serving it.

To start with, let's create an empty directory for our project and start up JSPM:

```
mkdir helloworld; cd helloworld
jspm init
```

JSPM will ask you a bunch of questions about how you wish to structure your app. We are going to stick to the defaults, which means that the `baseURL` of our application is the `helloworld` directory itself, and our code should go in the `helloworld/lib` directory. If you feel adventurous, you can read the JSPM docs at the [project wiki](https://github.com/jspm/jspm-cli/wiki).

Next we want to install our front-end dependencies. Every zygo application is going to need at least two packages - the `zygo` client itself, and the `react` package for rendering. It would also be nice to include `jsx` and `css` code directly in our code, so we should also grab the respective JSPM plugins.

Let's go ahead and install these packages:

```
jspm install zygo react jsx css
```

We are now in the clear on the dependency front, so let's get developing. Zygo requires two sources of information in order to know how to render an app:

- `zygo.json`  
This is your server configuration file. This is where you override default templates, point zygo to your routes config, set up server middleware etcetera. The HelloWorld project will not need to use most of these features, as they have sensible defaults.

- `routes.js`  
This is where you set up the zygo router, and point it to your components. We will only deal with a single route for now.

First, let's set up our router. Create a file called `routes.js` in the base directory:

```javascript
export default {
  component: "app/HelloWorld.jsx!"
}
```

This tells zygo that the component to be rendered for the base (`/`) route is our HelloWorld component.
