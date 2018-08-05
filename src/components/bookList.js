import React from 'react';
import PropTypes from 'prop-types';

import Book from './book';

function BookList({bookList = [], onBookShelfSelect}) {
  return <ol className='books-grid'>
    {bookList.map((book) =>
      <li key={book.id}>
        <Book book={book} onBookShelfSelect={onBookShelfSelect} />
      </li>
    )}
  </ol>;
}
BookList.propTypes = {
  bookList: PropTypes.array.isRequired,
  onBookShelfSelect: PropTypes.func.isRequired
};

export default BookList;
