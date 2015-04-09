/** @jsx React.DOM */

/** @jsx React.DOM */

/*
 * Author: Madhuka Uantha
 * Description: In React, your top-level App component and contain the coffe list data
 * Email: madhukaudantha@gmail.com
 * Version: 0.0.1
 * (C) Copyright 2015 Madhuka Udantha (http://madhukaudantha.blogspot.com/).
 */

var App = React.createClass({
  render: function() {
    return (
      <div className="App">
        <h1>Coffee List</h1>
		    <Coffee summary="Cappuccino">
  			   <p>Cappuccino is a coffee-based drink prepared 
           with espresso, hot milk, and steamed milk foam.</p>
		    </Coffee>
		    <Coffee summary="Latte">
  			   <p>A latte is an espresso and steamed milk, generally 
           in a 1:3 to 1:5 ratio of espresso to milk, with a little foam on top.</p>
		    </Coffee>
        <Coffee summary="Espressino">
           <p>An espressino is made from espresso, steamed milk, 
           and cocoa powder, similar to the Marocchino.</p>
        </Coffee>
        <Coffee summary="Café bombón">
           <p>Café bombón was made popular in Valencia, Spain, 
           and spread gradually to the rest of the country.</p>
        </Coffee>
        <Coffee summary="Galão">
           <p>Galão is a hot drink from Portugal made of espresso and foamed milk.</p>
        </Coffee>

      </div>
    );
  }
});

React.renderComponent(<App/>, document.body);

