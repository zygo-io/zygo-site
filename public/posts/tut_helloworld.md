---
title: Hello World Tutorial
subtitle: Yet Another Hello World. Sorry.
category: tutorials
id: hello-world
thumb: The universally recognized tutorial. Here we create a very simple zygo application rendering "Hello World!" to the DOM.
date: 10 Feb 2015 14:49
back_img: /assets/tutorial_bg.jpg
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
  component: "lib/HelloWorld.jsx!"
}
```

This tells zygo that the component to be rendered for the base (`/`) route is our HelloWorld component. Next we create a simple server config. Create another file called `zygo.json` in the base directory:

```json
{
  "routes": "./routes"
}
```

Here we are just pointing zygo to our routes config. Lastly, we need to actually write the component! As can be seen above, we pointed the base route to `lib/HelloWorld.jsx!`. So create the file `lib/HelloWorld.jsx`:

```javascript
import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div> Hello World! </div>
    );
  }
});
```

This is just a stock standard React component. To test the application out, simply run `zygo --serve` and point your favourite browser to `localhost:8080`;

For a little bit of pizazz in terrible taste, let's add some css to our component. Create a file `lib/HelloWorld.css`:

```css
div {
  background-color: green;
}
```

And add the following line to `lib/HelloWorld.jsx`:

```javascript
import './HelloWorld.css!';
```

Simply run zygo again with `zygo --serve` and navigate to `localhost:8080`. Voila!
