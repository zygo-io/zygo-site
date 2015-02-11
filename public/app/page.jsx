import "./page.css!";
import Page from "zygo-blog/lib/page.jsx!";
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
