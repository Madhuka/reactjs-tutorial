/** @jsx React.DOM */

/*
 * Author: Madhuka Uantha
 * Description: hello react sample, first component and render it to the page
 * Email: madhukaudantha@gmail.com
 * Version: 0.0.1
 * (C) Copyright 2015 Madhuka Udantha (http://madhukaudantha.blogspot.com/).
 */


var App = React.createClass({
  getInitialState: function() {
    return {
      tasks: []
    };
  },

  addTask: function(task) {
    var newTasks = this.state.tasks.concat([task]);
    this.setState({ tasks: newTasks});
  },

  render: function() {
    return (
      <div>
        <h1>To Do List</h1>
        <ToDoForm onCreate={this.addTask}/>
        <ToDoList tasks={this.state.tasks}/>
      </div>
    );
  }
});

React.renderComponent(<App/>, document.body);