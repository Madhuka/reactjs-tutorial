/** @jsx React.DOM */

/*
 * Author: Madhuka Uantha
 * Description: In React, your top-level App component and small UI controls are all components. 
 * There is no distinction between components, controllers, views, directives, etc.
 * Email: madhukaudantha@gmail.com
 * Version: 0.0.1
 * (C) Copyright 2015 Madhuka Udantha (http://madhukaudantha.blogspot.com/).
 */

var Detail = React.createClass({

  render: function() {
    return (
      <div className="detail_view">
        <div className="name">{this.props.name}</div>
        <div className="blog">
          <a href={this.props.blog}>{this.props.blog}</a>
        </div>
      </div>
    );
  }

});