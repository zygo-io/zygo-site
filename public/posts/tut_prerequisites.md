---
title: Zygo Prerequisites
subtitle: Getting started with zygo.
category: tutorial
id: prereq
thumb: In this post we detail what you need to do to start hacking with zygo.
date: 10 Feb 2015 15:49
back_img: /assets/tutorial_bg.jpg
---

Zygo is first and foremost a _render server_, built for apps using [JSPM](https://github.com/jspm/jspm-cli) for frontend package management and [React](https://facebook.github.io/react/) for component code. To start a simple zygo application, ensure you have the following packages globally installed:

```
npm install -g jspm zygo
```

We can now create the application. `cd` into the working directory and install the aforementioned dependencies:

```
jspm init
jspm install react zygo
```

Note some lightly confusing nomenclature - `zygo` on the npm registry refers to the zygo command-line tool, whereas `zygo` on the JSPM registry refers to the client side zygo module.

These packages are all you need to start hacking with zygo. Because we like modularity, and because we are using React, you may also want to install the `css` and `jsx` plugins for JSPM's loader:

```
jspm install jsx css
```

This will allow you to import `css` and `jsx` files directly within your components, saving you a build step. For example:

```javascript
import './style.css!';
import './component.jsx!';

...
```

For details on actually _using_ zygo, venture onwards to the other tutorials!
