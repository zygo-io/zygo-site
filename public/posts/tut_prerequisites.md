---
title: prerequisites
subtitle: What do you need for the tutorials?
category: tutorial
id: prereq
thumb: In this post we detail what you need to get started with zygo.
---

Zygo is first and foremost a _render server_, built for apps using [JSPM](https://github.com/jspm/jspm-cli) for frontend package management and [React](https://facebook.github.io/react/) for component code. To start a simple zygo application, ensure you have the following packages globally installed:

```
npm install -g jspm zygo
```

We can now create the application. `cd` into the working directory and install the following dependencies:

```
jspm init
jspm install react zygo
```

This is all you need to start hacking with zygo. Because we like modularity, and because we are using React, you may also want to install the `css` and `jsx` plugins for JSPM's loader:

```
jspm install jsx css
```

This will allow you to import `css` and `jsx` files directly within your components, saving you a build step. For example:

```javascript
import './component.css!';
import './child.jsx!';

...
```

For details on using zygo, venture onwards!
