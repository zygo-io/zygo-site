---
title: Handlers
thumb: The zygo data buses from your stores to components.
id: doc-handlers
category: docs
---

Handlers are the data buses for zygo. A handler module must export a `handler` function that takes in the global [context](https://github.com/zygo-io/zygo-server/wiki/Context) object as a parameter. The handler should mutate context with the data needed by its associated component.

The `handler` function should either return nothing or an object containing a _redirect_ property. This will cause the router to redirect to the given path, useful if you wish to implement authentication at a base route level, for instance.

Handler modules may also export both a `serialize` and `deserialize` function. Like the `handler` function, these take in the context object and mutate it. `serialize` is called by the zygo server before the context is pushed to the client. `deserialize` is then called by the client. This allows you to pass custom objects between the client and server as your data stores, as after serialization is run, the server passes through the context as JSON.

```javascript
import Store from './my-store';

//Populate context
export function handler(context) {
  context.store = new Store( ... );
  return { redirect: '/another/path' }; //if you wish to redirect
}

//Optionally dehydrate context
export function serialize(context) {
  context.store = context.store.getData();
}

//Optionally rehydrate context
export function rehydrate(context) {
  context.store = new Store(context.store);
}
```
