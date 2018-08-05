import React from 'react';
import PropTypes from 'prop-types';

import BookList from './bookList';

function Shelf({shelf, bookHashMap, onBookShelfSelect}) {
  const bookObjectList = [];
  const { shelfTitle, bookList } = shelf;

  for (const id of bookList) {
    bookObjectList.push(bookHashMap[id]);
  }

  return <div className='bookshelf'>
    <h2 className='bookshelf-title'>{shelfTitle}</h2>
    <div className='bookshelf-books'>
      <BookList bookList={bookObjectList} onBookShelfSelect={onBookShelfSelect} />
    </div>
  </div>;
}
Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  bookHashMap: PropTypes.object.isRequired,
  onBookShelfSelect: PropTypes.func.isRequired
};

export default Shelf;
