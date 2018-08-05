import React from 'react';
import PropTypes from 'prop-types';

import BookList from './bookList';

function Shelf({shelf, onBookShelfSelect}) {
  const { shelfTitle, bookList } = shelf;

  return <div className='bookshelf'>
    <h2 className='bookshelf-title'>{shelfTitle}</h2>
    <div className='bookshelf-books'>
      <BookList bookList={bookList} onBookShelfSelect={onBookShelfSelect} />
    </div>
  </div>;
}
Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  onBookShelfSelect: PropTypes.func.isRequired
};

export default Shelf;
