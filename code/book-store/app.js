/** @jsx React.DOM */

/*
 * Author: Madhuka Uantha
 * Description: hello react sample, first component and render it to the page
 * Email: madhukaudantha@gmail.com
 * Version: 0.0.1
 * (C) Copyright 2015 Madhuka Udantha (http://madhukaudantha.blogspot.com/).
 */

var BookStore = React.createClass({
  render: function() {
    return (   
        <BookList data={this.props.data} />
    )
  }
});

var BookList = React.createClass({
  render: function() {
    var bookNodes = this.props.data.map(function (book) {
      return (
        <Book author={book.author} tite={book.text} coverPage={book.cover}>
          {book.description}
          <p>Page count: {book.pages}</p>
        </Book>
      );
    });
    return (
      <div className="templatemo_product_box">
        {bookNodes}
      </div>
    );
  }
});

var Book = React.createClass({
 handleClick: function(event) {
    console.log('Clicked.');
    console.log(event);    
  },

  render: function() {
    return (
          <div class="templatemo_product_book">
            <h1><span>{this.props.tite}</span></h1>
            <img src={this.props.coverPage} alt="image" />
            <div class="book_info">                 
               <h3>by {this.props.author}</h3>
                   {this.props.children}
            </div>
            <div class="cleaner">&nbsp;</div>
          </div>

    );
  }
});



React.renderComponent(
  <BookStore data={data} />,
  document.getElementById('templatemo_content_right')
);