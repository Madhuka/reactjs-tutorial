/** @jsx React.DOM */

var App = React.createClass({
  render: function() {
    return (
      <div className="App">
        <h1>Hello React!!</h1>
      </div>
    );
  }
});

React.renderComponent(<App/>, document.body);

