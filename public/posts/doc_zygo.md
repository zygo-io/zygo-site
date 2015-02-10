---
title: Zygo.json
thumb: The Zygo.json configuration file API.
id: doc-zygo
category: docs
---

`zygo.json` is the zygo server configuration file. It supports the following properties, square brackets representing defaults:

- `packageJSON` [`'./package.json'`]  
Path to the project's `package.json`.

- `routes`  
JSPM path to the project's `routes.js`, a routing configuration file. See routes.js.

- `template` [template.hb]  
Path to the project's `template.hb`, a handlebars page template. See template.hb.

- `env` [`development`]  
Environment the zygo server runs in. Running in production enables bundling and other optimisations.

- `bundlesJSON`  
Location of the projects `bundle.json`, a file containing bundling data populated by zygo. Automatically filled in when `zygo.bundle()` is run, one shouldn't have to use this manually.

- `port` [`8080`]  
Port the server listens on.

- `middleware` [`[]`]  
A string or array of strings listing middleware modules to be used by zygo-server. See middleware.

- `anchors` [`true`]  
Whether the zygo client should wrap anchor tags as route changes rather than page refreshes. You probably want this.

- `buildDir`  
The directory zygo builds bundles into on `zygo.bundle()` call.

- `defaultOptimization` [`tlo`]
Bundling optimization function to use by default. Options are `tlo` for a three-layered bundling system, or `slo` for a single-bundle system. See issue51 for a discussion of this in SystemJS.

- `defaultContext`
A JSON object listing context options that are set by default. Useful as a shortcut for configuring components via context. See context.
