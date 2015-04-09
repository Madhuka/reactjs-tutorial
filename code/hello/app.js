/** @jsx React.DOM */

/*
 * Author: Madhuka Uantha
 * Description: hello react sample, first component and render it to the page
 * Email: madhukaudantha@gmail.com
 * Version: 0.0.1
 * (C) Copyright 2015 Madhuka Udantha (http://madhukaudantha.blogspot.com/).
 */

var App = React.createClass({
  render: function() {
    return (
      <div className="App">
        <h1>Hello React!!</h1>
        <Detail name="Udantha"
        		blog="http://madhukaudantha.blogspot.com/"
        />
      </div>
    );
  }
});

React.renderComponent(<App/>, document.body);

