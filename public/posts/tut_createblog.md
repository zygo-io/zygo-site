---
title: Creating a blog with zygo blog
subtitle: A simple use-case of the example "blogging platform".
thumb: In this tutorial we set up a project with zygo-blog, a basic blogging platform written with zygo.
category: tutorial
id: create-blog
date: 10 Feb 2015 13:49
back_img: /assets/tutorial_bg.jpg
---

In this tutorial we are going to create a simple blog using the [example blogging framework](https://github.com/zygo-io/zygo-blog) written with zygo. Like the previous tutorial, let's set up a simple project with the dependencies we need:

```
mkdir blog; cd blog
jspm init
jspm install react jsx css zygo zygo-blog
```

We are just installing React, useful JSPM plugins and both the zygo client and the zygo "blogging platform". To get a blog working, there are a few things we need to set up. First, let's create a `zygo.json` config file in the base directory:

```json
{
  "routes": "zygo-blog",
  "middleware": "./database",

  "defaultContext": {
    "logo": "/logo.png",

    "menu": {
      "Posts": "/category/posts",
      "About": "/post/about"
    }
  }
}
```

The `zygo-blog` module exports a routes file, which we are going to use directly. This creates routes for posts (`/post/post_id`) and categories (`/category/cat_id/post/post_id`). It also sets the base route to point to the `/post/index` route.

Next we add a middleware function to the zygo server. This is what we are going to use to serve post data - the `database.js` module that we will create shortly is going to bootstrap a RESTful API onto `/db/...` in the style of express middleware.

Finally, we set default context options. Context is the global state passed between components at render time - `zygo-blog` uses this to determine how to render your navbar. `zygo-blog` recognizes two options, `logo` being a path to a logo image, and `menu` being an object mapping nav-text to URLs.

Let's create the `database.js` that was mentioned earlier:

```javascript
import getMiddleware from "zygo-blog/database";
export var middleware = getMiddleware("posts");
```

`zygo-blog` exposes a database middleware generator that takes in a directory to read posts from. Since we have yet to create an index post, let's go ahead and sort that out. Create the `posts` directory and create the file `posts/index.md`.

```
---
date: 10 May 1356 23:32
title: Welcome to the index page.
subtitle: Another welcome message to make you feel better.
id: index
back_img: /background.jpg
---

Whatever content you would like to put in your index page. Note that this is markdown, so _things_ __like__ __*this*__ still work. Also note that this post was written just before midnight. In the fourteenth century.
```

The `back_img` is what displays behind the title and subtitle text on the post page. Unless the listed file is present, it isn't likely to show, for obvious reasons.

For the sake of completeness, let's also create the about page we wrote in the `zygo.json` above. Create the file `posts/about.md`:

```
---
date: 10 May 1756 23:32
title: About
subtitle: To be or not the be.
id: about
category: posts
back_img: /another-background.jps
---

Some things about you. Maybe you like peanut-butter and jam. Or tea. Or maybe you prefer crackers and cheese. I don't know. I'm not judging. Perhaps you're even one of those vegan types. _Those_ guys. Who knows?
```

Note that this post has a category corresponding to the `Posts` nav item in the `zygo.json`. This means that when a user navigates to this category it will automatically be listed, ready for them to click and read.

Serve the application with `zygo --serve` and point your browser to `localhost:8080` to see the magic! For more details on the api, see the [github page](https://github.com/zygo-io/zygo-blog). Just bear in mind that this module was designed as an example zygo application, and is _not_ suitable for production right now.
