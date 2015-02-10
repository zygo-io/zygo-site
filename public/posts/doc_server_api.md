---
title: Server-side API
thumb: The zygo server API.
id: doc-server-api
category: docs
---

Create a new zygo-server instance by passing it the path to your `zygo.json` config file, and then initialising it. Note that the `zygo.initialise()` function returns a promise, resolving when it is finished.
```javascript
import Zygo from 'zygo-server';

let zygo = new Zygo('zygo.json');
zygo.initialise()
  .then( ... );
```

After initialisation, the following methods are exposed by the zygo-server instance:

* `zygo.createServer()`  
Creates and returns a promise resolving to a simple http server listening on `config.port` if it is defined, else port 8080. Handlers can be added to the server via `server.use(function (req, res, next, zygo) { ... })` in the express style, with an added parameter to access the current zygo instance. These handlers are guaranteed to run before zygo does static file serving or routing.

* `zygo.bundle()`
Bundles your app into the `buildDir` specified in the `zygo.json`. Note that bundles are only pushed to the client if the environment is set to `production`.

* `zygo.unbundle()`
Removes all bundle config and bundles, cleaning your `buildDir`.

* `zygo.route('route/path', headers, requestMethod)`  
Matches the given path against the routes specified in the `routes.js`. If there is no match, the router falls back to the `default` route. The matched route's handlers are then run and the resolved component rendered onto the `config.template` if it was specified, else a default standard template. The function resolves to the rendered html.

* `zygo.setDebug([mode = true])`  
Sets debug mode, turning detailed error messages on and off.
