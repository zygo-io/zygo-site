---
title: Components
thumb: Zygo-specific component api.
id: doc-components
category: docs
date: 11 Feb 2015 19:00
---

Zygo uses [React](http://facebook.github.io/react) components as its unit of routing. A component module must export as `default` a [React](http://facebook.github.io/react) component:

```javascript
module.exports.default = React.createClass({ ... }); //or:
export default React.createClass({ ... }); //es6!
```

[JSPM](https://github.com/jspm/jspm-cli) handles the loading of ES6 for you, so there is no reason not to start using it today! \\(^_^)/

Components need data, and zygo abstracts this need out with [`handlers`](/category/docs/post/doc-handlers). Handlers are specified in the component's [`statics`](http://facebook.github.io/react/docs/component-specs.html#statics) property:

```javascript
export default React.createClass({
  statics: {
    handler: './shared', //A handler that is shared between client and server
    clientHandler: './client-only', //A handler that is run on the client only.
    serverHandler: './server-only' //A handler that is run on the server only.
  },
  ...
});
```

Only one handler is run for a given component at render time - `clientHandler` and `serverHandler` take precedence over `handler`. All handlers are loaded and run by [JSPM](https://github.com/jspm/jspm-cli). Note that this means in order to use core node modules in your server-side handlers, you will need to install them via jspm: `jspm install http fs path` for instance.

As detailed [here](/category/docs/post/doc-handlers), handlers populate the global [context](/category/docs/post/doc-context) object. This is passed to your component's `render` function via `this.props`:

```javascript
export default React.createClass({
  statics: {
    handler: './my-handler'
  },

  render: function() {
    //populated by my-handler
    return <div> {this.props.handlerLoadedData} </div>;
  }
})
```
