# React Tutorial - Hello World
When designing interfaces, break down the common design elements (buttons, form fields, layout components, etc) into reusable components with well-defined interfaces. That way, the next time you need to build some UI you can write much less code. As your app grows it's helpful to ensure that your components are used correctly.Here you have some [React Components](http://react-components.com/). The main benefits of React are
 - Decoupling and increased cohesion using a component model
 - Abstraction, Composition and Expressivity
 - (Virtual DOM)[http://madhukaudantha.blogspot.com/2015/04/reactjs-and-virtual-dom.html] & Synthetic events 

React is just a view layer. Everything in React is about (component and powered with virtual DOM)[http://madhukaudantha.blogspot.com/2015/04/reactjs-and-virtual-dom.html]

###Rendering 

In react we can render a div into the document body. Components are functions

```js
React.renderComponent(<div>Hello World!</div>, document.body);
```

First component and render it to the html page

```js
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
```

It must return a root element from the render method.

### Transferring Props

In react `props` is a common pattern in React to wrap a component in an abstraction. The outer component exposes a simple property to do something that might have more complex implementation details. When you are working with multiple components, in a hierarchy, there may be occasion for sending properties down the structural tree. This has the benefit of reducing code duplication.

Let's create the `Detail` component, which will depend on data passed in from its parent. Data passed in from a parent component is available as a 'property' on the child component. These 'properties' are accessed through `this.props`. Using props we will be able to read the data passed to the Detail from the App. 

```js
var Detail = React.createClass({

  render: function() {
    return (
      <div className="detail_view">
        <div className="name">{this.props.name}</div>
        </div>
      </div>
    );
  }

});
```

Now we will want to pass it the name and `Detail`. This allows us to reuse the same code. Now let's called our Detail component.

```js
var App = React.createClass({
  render: function() {
    return (
      <div className="App">
        <h1>Hello React!!</h1>
        <Detail name="Madhuka Udantha"/>
      </div>
    );
  }
});

React.renderComponent(<App/>, document.body);
```

It is the hellow world for react and Here is some tips that will help you to make you code more standard.  
####style 
You can only use camelCase for your own attributes. It’s simply a design decision which allows for `this.props.*` access.
The style attribute doesn’t accept strings. You can specify a JavaScript object with keys that correspond to the camelCase CSS property names. 
Events can be assigned (following the W3C specification) using attributes like onClick and onChange.

####Validating Properties
In here I will not going to talk about it but make sure you know there is some thing like this for now.

```js
var InterfaceComponent = React.createClass({
  propTypes: {
    name    : React.PropTypes.string,
    visible : React.PropTypes.bool.isRequired,
    before  : function(props, propName, componentName) {
      if (!(propName in props)) {
        throw new Error("before must be set.");
      }

      var now = new Date();

      if (now.getTime() >= props[propName].getTime()) {
        throw new Error("before must be set to a later date.");
      }
    }
  },
  render : function() {
    return <div>hello {this.props.name}!</div>;
  }
});
```
###Running the samples URL
[http://localhost:8080/code/hello/](http://localhost:8080/code/hello/)


### Author
[Madhuka](http://madhukaudantha.blogspot.com/)
