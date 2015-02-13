import React from 'react';
import BlogPage from 'zygo-blog/views/page.jsx!';

import './zygo-page.css!';

export default React.createClass({
  statics: {
    clientHandler: function(context) {
      context.db_host = '';
    },

    serverHandler: function(context) {
      context.db_host = 'http://localhost:8080';
    }
  },

  render: function() {
    return React.createElement(BlogPage, this.props);
  }
});
