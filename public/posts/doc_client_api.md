---
title: Client-side API
thumb: The zygo client API.
id: doc-client-api
category: docs
---

A zygo client instance can be accessed by importing the `zygo` module through [SystemJS](https://github.com/systemjs/systemjs). This is how the client is initialized by [zygo-server](https://github.com/zygo-io/zygo-server) on page load, but if you see a use-case you can use the client as a stand-alone module:

```javascript
System.import('zygo')
.then(function(zygo) {
  ...
});
```

The zygo instance exposes the following public API:

- `zygo.route(routePath[, headers])`  
Matches the given routePath against `zygo.routes`, runs the matched routes' handlers and renders the routes to the `div#__zygo-body-container__` DOM element. If no routes are matched zygo falls back to `zygo.routes.default`. If this does not exist, an error is thrown.

- `zygo.refresh()`  
Takes the currently visible routes (in `zygo.context.curRoute.routes`) and re-renders them with the current `zygo.context`. The route handlers are _not_ run again. This is useful if you want fine-grained control over context updates and re-renders.

- `zygo.setMetadata()`  
Sets the page title to `context.meta.title`, pushes the current context to the HTML5 history API if possible and moves `context.loadRoute` into `context.curRoute`. As this suggests, it is run by zygo at the end of a `route()` transition.

The zygo instance exposes the following private API:

- `zygo._setContext(context)`  
`zygo._setRoutes(routes)`  
`zygo._setBundles(bundles)`  
Setters for the context, routes and bundles visible to zygo respectively. For more details on these, see the [https://github.com/zygo-io/zygo-server/wiki](zygo-server wiki).

- `zygo._addLinkHandlers()`  
Sets up click handlers to automatically wrap anchor tags as route transitions if they correspond to a valid route.

- `zygo._deserializeContext()`  
Deserializes `zygo.context` if it has previously been serialized. See the [https://github.com/zygo-io/zygo-server/wiki](zygo-server wiki) for details.
