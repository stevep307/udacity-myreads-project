import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import BookList from './bookList';

class SearchPage extends Component {
  componentDidMount() {
    this.searchInput.focus();
  }

  render() {
    let {searchString, bookList, onBookShelfSelect, onSearch, onCloseSearch} = this.props;
    return <div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/' onClick={onCloseSearch}>Close</Link>
        <div className='search-books-input-wrapper'>
          <input value={searchString} type='text' placeholder='Search by title or author' ref={(input) => { this.searchInput = input; }} onChange={(event) => onSearch(event.target.value)} />
        </div>
      </div>
      <div className='search-books-results'>
        <BookList bookList={bookList} onBookShelfSelect={onBookShelfSelect} />
      </div>
    </div>;
  }
}

SearchPage.propTypes = {
  searchString: PropTypes.string.isRequired,
  bookList: PropTypes.array.isRequired,
  onBookShelfSelect: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onCloseSearch: PropTypes.func.isRequired
};

export default SearchPage;
