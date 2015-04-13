# React Tutorial : Book Store
In this sample we will be covering react
  - Composable components
  - Component structure
  - Using props
  - Component Properties
  - Data model
  
###Composable components
React is all about modular, composable components.
Instances of a React Component are created internally in React when rendering. These instances are reused in subsequent renders, and can be accessed in your component methods as `this`
The only way to get a handle to a React Component instance outside of React is by storing the return value of 
```js
React.render()
```

When `render()` is called, it should examine `this.props` and `this.state` and return a single child element. This child element can be either a virtual representation of a native DOM component (such as `<div />` or `React.DOM.div()`) or another composite component that you've defined yourself.

`null` or `false` indicates that you don't want anything rendered. There for `React.findDOMNode(this)` will return `null`. 'render()' function should be pure (it does not modify component state)

###Component structure
For our book store example, we'll have the following component structure:


```sh

-BookStore

  - BookList

    - Book

```

You can find this structure in `book-store\app.js`

```js
var BookStore = React.createClass({
  //to-do for book store functions
});

var BookList = React.createClass({
  //to-do book listing
});

var Book = React.createClass({
 //to-do showing book 
});
```

Let's build skeletons for `BookList` 

```js
var BookList = React.createClass({
  render: function() {
    return (
      <div className="bookList">
        Hello, I am a bookList.
      </div>
    );
  }
});
```

Then we update `BookStore` component to use these new component

```js
var BookStore = React.createClass({
  render: function() {
    return (
      <div className="bookStore">
        <h1>Books</h1>
        <BookList/>
      </div>
    );
  }
});
```
###Using props

Let's create the Book component, which will depend on data passed in from its parent. Data passed in from a parent component is available as a 'property' on the child component. These 'properties' are accessed through `this.props` and any nested elements as `this.props.children`. Using props we will be able to read the data passed to the Book from the BookList. 

```js
var Book = React.createClass({
  render: function() {
    return (
      <div className="book">
        <h2 className="title">
          {this.props.title}
        </h2>
        {this.props.children}
      </div>
    );
  }
});
```

###Component Properties

Now that we have defined the BooK component, we will want to pass it the book title and book text/children.
```js
var BookList = React.createClass({
  render: function() {
    return (
      <div className="bookList">
        <Comment title="The Storied Life of A.J. Fikry">by Gabrielle Zevin</Comment>
        <Comment title="A Man Called Ove">by Fredrik Backman</Comment>
      </div>
    );
  }
});
```

###Data model

We've been inserting the books directly in the source code till now. Let try to make, JSON data into the book list. Eventually this will come from the server/ web services, but for now, write it in your source in `data.js` with  using /** @jsx React.DOM */ 

```js
var data = [
  {
     author: "Gabrielle Zevin", 
     title: "The Storied Life of A.J. Fikry",
  },
  {
     author: "Fredrik Backman ", 
     title: "A Man Called Ove"
  }
  ]
```

Then added the data.js file to html page by

```html
<script type="text/jsx" src="data.js"></script>
```

We need to get this data into BookList in a modular way. Modify BookStore and the React.render() call to pass this data into the BookList via props:

```js
var BookStore = React.createClass({
  render: function() {
    return (
      <div className="bookStore">
        <BookList data={this.props.data} />
      </div>
    );
  }
});

React.render(
  <BookStore data={data} />,
  document.getElementById('book_content')
);

```
Now you have app on running let do some adding template make more nice looking. you can find me styling in `book_store_style.css`


###Sample Screen-Shoot 

![https://www.dropbox.com/s/1j9wqyzy68nr2ch/book-store.png?dl=0](https://dl-web.dropbox.com/get/gitRepo/book-store.png?_subject_uid=276653591&w=AAAnKo4uXGHHfLBsSx-oetd6DbLRFUpdFd8e2nh_t045UQ)

###Running the samples
[http://localhost:8080/code/book-store/index.html](http://localhost:8080/code/book-store/index.html)

### Author
[Madhuka](http://madhukaudantha.blogspot.com/)
