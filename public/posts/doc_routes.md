---
title: Routes.js
thumb: The zygo router's configuration file.
id: doc-routes
category: docs
---

`routes.js` is the routing configuration file. Currently this is required by zygo - a 'CGI' mode based on directory structure is planned for the future. The structure is as follows:

```javascript
export default {
  "component": "../components/module.jsx!",

  "/subroute": {
    "component": "some/path/to/module.jsx!",
  },

  "/:sugar/for/the/above": "./sugar/module.jsx!"
}
```

Components for a subroute are _optional_. If no component is given, an empty wrapper component will be rendered instead.

Component paths must be given as _JSPM paths_. These can be relative paths, or absolute module paths.

Routes are matched from the shallowest to the deepest route. Rendering then occurs backwards - the deepest route is rendered first, then passed as a child to the next deepest route, all the way back up to the root component. This allows you to specify, for instance, a root page component wrapping all other routes.
