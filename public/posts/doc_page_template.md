---
title: Page Template
thumb: Customizing the zygo page template.
id: doc-page-template
category: docs
date: 11 Feb 2015 14:00
---

Zygo uses a Handlebars template to render your app on the server. The default template can be found [here](https://github.com/zygo-io/zygo-server/blob/master/defaults/template.hb) - if you wish to customise it, I'd recommend you use this as a base to avoid headache.

The template essentially loads `system.js`, loads your package's `config.js`, creates a div for the app to be rendered into (`__zygo-body-container__`) and finally initialises the zygo client. The following properties are passed into the template by the zygo server:

* `cssTrace`: A list of paths to css files required by the rendered component.
* `bundles`: The `bundles.json` data, if the server is running in a production environment.
* `component`: The HTML of the rendered component.
* `routes`: The `routes.json` data.
* `context`: The global context object populated by the matched routes' handlers.
* `path`: The path of the matched route.
* `baseURL`: The url System.baseURL should be set to in order to find packages.
* `meta`: Alias for `context.meta` - metadata populated by the handlers, such as `meta.title`.
* `addLinkHandlers`: Alias for the `anchors` property in `zygo.json`. Whether to wrap anchor tags as route changes.
