# React Tutorial - Coffee List
we will look on interactivity and dynamic UIs in coffee list sample.
In Here coffee list application will list down coffee list and each will have summary of line about a coffee. It will expand when user click on coffee name. By click on that coffee name or summary it collapse 
By now you know about react [Component and Transferring Props](https://github.com/Madhuka/reactjs-tutorial/tree/master/code/hello#react-tutorial---hello-world)
Properties are passed in just like HTML attributes. You access the children nested in the component on `this.props.children`

###Event Handling and Synthetic Events
With React you simply pass your event handler as a camelCased. React knows how to bubble and capture events according to the spec, and the events passed to your event handler are guaranteed to be consistent with the W3C spec, regardless of which browser you're using.

In here we want to click the summary/coffee name so details/name toggle it's visibility. 

```js
var Coffee = React.createClass({

  handleClick: function(event) {
    console.log('Click');
  },

  render: function() {
    return (
      <div className="Coffee">
        <div onClick={this.handleClick}>
          {this.props.name}
        </div>
      </div>
    );
  }

});
```

###Autobinding and Event Delegation

Autobinding: With React, every method is automatically bound to its component instance. React caches the bound method such that it's extremely CPU and memory efficient. It's also less typing!
Event delegation: When React starts up, it starts listening for all events at the top level using a single event listener. When a component is mounted or unmounted, the event handlers are simply added or removed from an internal mapping. When an event occurs, React knows how to dispatch it using this mapping.

###Components are Just State Machines
React thinks of UIs as simple state machines. By thinking of a UI as being in various states and rendering those states, it's easy to keep your UI consistent. In React, you simply update a component's state, and then render a new UI based on this new state. React takes care of updating the DOM for you in the most efficient way. Every component has a state object and a props `object. State` is set using the `setState` method. Calling setState triggers UI updates.

```js
var Coffee = React.createClass({
    getInitialState: function(){
        return {
            coffeeCount: 5
        }
    },
    render: function(){
        return (
            <p>We have {this.state.coffeeCount} coffees in our shop</p>
        )
    }
});
```
Whenever you change state, your component will re-render. Component won't actually re-render everything to the DOM, but it will re-render to a [virtual DOM](http://madhukaudantha.blogspot.com/2015/04/reactjs-and-virtual-dom.html).

is "always re-render" in React? and is it server-side rendering?
Instead of initializing a view and then observing values as they change over time, in your render method you get to pretend like this is the first and only time you're ever rendering. Rather than observing state over time, we just consider the current state and build up our className. There is no adding or removing, just building. Again, its the same mental model as server rendering. You don't observe fields in the database and then change the HTML a route will render. 

By using `this.setState` we can achieve our toggle UI. 

```js
this.setState({
      showDetails: !this.state.showDetails
});
```

Refs are sort of like element IDs but scoped to the component that owns the ref.
React supports a very special property that you can attach to any component that is output from render(). This special property allows you to refer to the corresponding backing instance of anything returned from render(). It is always guaranteed to be the proper instance, at any point in time. To get at the actual DOM node, you call `getDOMNode()` on a ref. Refs are a great way to send a message to a particular child instance in a way that would be inconvenient to do via streaming Reactive `props` and `state`.

###Running the samples
localhost:8080


### Author
[Madhuka](http://madhukaudantha.blogspot.com/)
