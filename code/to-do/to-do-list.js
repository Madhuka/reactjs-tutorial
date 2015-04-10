/** @jsx React.DOM */

/*
 * Author: Madhuka Uantha
 * Description: In React, your top-level App component and small UI controls are all components. 
 * There is no distinction between components, controllers, views, directives, etc.
 * Email: madhukaudantha@gmail.com
 * Version: 0.0.1
 * (C) Copyright 2015 Madhuka Udantha (http://madhukaudantha.blogspot.com/).
 */

var ToDoList = React.createClass({
  render: function() {
    var tasks = this.props.tasks.map(function(task) {
      return <li key={task.id}>{task.name} </li>;
    });
    return (
      <ul>
        {tasks}
      </ul>
    );
  }
});