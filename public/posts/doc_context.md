---
title: Context
thumb: The global data store, mutated by handlers at render time.
id: doc-context
category: docs
---

The global context object is the means by which data is passed around in zygo. It is mutated at render time by components' [handlers](https://github.com/zygo-io/zygo-server/wiki/Handlers). The context object has several properties set by zygo:

- `context.meta`  
Metadata associated with the component. Currently only `meta.title` is valid, and can be mutated in your handlers.

- `context.curRoute`  
Data associated with the route request that is currently rendered.  
`context.curRoute.routes`  
The matched routes of the request.  
`context.curRoute.path`  
The route path.  
`context.curRoute.[option]`  
The options in the matched route path are embedded directly into the curRoute object.  
`context.curRoute.headers`  
The request headers.  
`context.curRoute.method`  
The request method.  

- `context.loadRoute`  
Similar to `context.curRoute`, but for a request in the process of being rendered. Handlers and components can use this to access the data of the request that is calling them.

Properties specified in the `defaultContext` property of your `zygo.json` will also be set.
