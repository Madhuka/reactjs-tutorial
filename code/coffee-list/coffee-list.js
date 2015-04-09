/** @jsx React.DOM */

/** @jsx React.DOM */

/*
 * Author: Madhuka Uantha
 * Description: In here you have handleClick() and focus() where user can toggle our coffee list with it's details
 * It is expanding by click on coffee name or details
 * Email: madhukaudantha@gmail.com
 * Version: 0.0.1
 * (C) Copyright 2015 Madhuka Udantha (http://madhukaudantha.blogspot.com/).
 */


var Coffee = React.createClass({

  getInitialState: function() {
    return {
      showDetails: false
    };
  },

  handleClick: function(event) {
    this.setState({
      showDetails: !this.state.showDetails
    }, this.focusAfterClick);
  },

  focusAfterClick: function() {
    if (this.state.showDetails)
      this.refs.details.getDOMNode().focus();
  },

  render: function() {
    var details;
    var summaryClassName = 'Coffee__Name';

    if (this.state.showDetails) {
      details = this.props.children;
      summaryClassName += ' Coffee__Name--open';
    }

    return (
      <div className="Coffee">
        <div
          tabIndex="0"
          onClick={this.handleClick}
          className={summaryClassName}
        >
          {this.props.summary}
        </div>
        <div onClick={this.handleClick} ref="details" tabIndex="-1" className="Coffe__Details">
          {details}
        </div>
      </div>
    );
  }

});