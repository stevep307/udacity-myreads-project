import React, {Component} from 'react';
import PropTypes from 'prop-types';

import * as BooksAPI from '../BooksAPI'
import BookList from './bookList';

class SearchPage extends Component {
  state = {
    bookList: []
  };

  handleSearch = (event) => {
    const {bookHashMap} = this.props;
    BooksAPI.search(event.target.value)
      .then((books) => {
        const booksWithSelves = books.map(function (book) {
          if (bookHashMap.hasOwnProperty(book.id)) {
            return bookHashMap[book.id];
          }
          return book;
        });
        this.setState({bookList: booksWithSelves});
      })
      .catch(() => this.setState({bookList: []}));
  };

  render() {
    const {bookList} = this.state;
    const {onBookShelfSelect, onCloseSearchPage} = this.props;
    return <div className='search-books'>
      <div className='search-books-bar'>
        <a className='close-search' onClick={onCloseSearchPage}>Close</a>
        <div className='search-books-input-wrapper'>
          <input type='text' placeholder='Search by title or author' onChange={this.handleSearch} />
        </div>
      </div>
      <div className='search-books-results'>
        <BookList bookList={bookList} onBookShelfSelect={onBookShelfSelect}/>
      </div>
    </div>;
  }
}

SearchPage.propTypes = {
  bookHashMap: PropTypes.object.isRequired,
  onBookShelfSelect: PropTypes.func.isRequired,
  onCloseSearchPage: PropTypes.func.isRequired
};

export default SearchPage;
