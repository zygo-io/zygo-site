//Import css overrides.
import "./article-header.css!";
import "./article-list.css!";
import "./article-listing.css!";
import "./article-view.css!";
import "./read-next.css!";
import "./author-thumbnail.css!";
import "./post-thumbnail.css!";
import "./navbar.css!";
import "./page.css!";

import Page from "zygo-blog/app/page.jsx!";
import React from "react";

export default React.createClass({
  statics: {
    clientHandler: "zygo-blog/handlers/client-page",
    serverHandler: "zygo-blog/handlers/server-page"
  },

  render: function() {
    //wrap the page element.
    return React.createElement(Page, this.props);
  }
})
