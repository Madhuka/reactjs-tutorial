/** @jsx React.DOM */

/*
 * Author: Madhuka Uantha
 * Description: In React, your top-level App component and small UI controls are all components. 
 * There is no distinction between components, controllers, views, directives, etc.
 * Email: madhukaudantha@gmail.com
 * Version: 0.0.1
 * (C) Copyright 2015 Madhuka Udantha (http://madhukaudantha.blogspot.com/).
 */


// fake
var taskid = 0;

var ToDoForm = React.createClass({

  propTypes: {
    onCreate: React.PropTypes.func.isRequired
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var name = this.refs.name.getDOMNode();

    this.props.onCreate({
      id: ++taskid,
      name: name.value,
      completed: false
    });

    this.getDOMNode().reset();
    name.focus();
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="name">Task Name</label><br/>
          <input id="name" ref="name"/>
        </p>       
        <p>
          <button type="submit">Add</button>
        </p>
      </form>
    );
  }
});

