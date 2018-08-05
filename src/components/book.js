import React from 'react';
import PropTypes from 'prop-types';

import Menu from './menu';

function Book({book, onBookShelfSelect}) {
  const style = { width: 128, height: 192 };
  const handleShelfSelect = (shelf) => onBookShelfSelect(book, shelf);
  const { title = 'no title', authors = ['no authors'], shelf } = book;
  const { thumbnail } = book.imageLinks || {};
  if (thumbnail) {
    style.backgroundImage = `url('${thumbnail}')`;
  }

  return <div className='book'>
    <div className='book-top'>
      <div className='book-cover' style={style} />
      <Menu selectedShelf={shelf} onShelfSelect={handleShelfSelect} />
    </div>
    <div className='book-title'>{title}</div>
    <div className='book-authors'>
      { authors.map((author) => <div key={author}>{author}</div>) }
    </div>
  </div>;
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onBookShelfSelect: PropTypes.func.isRequired
};

export default Book;
