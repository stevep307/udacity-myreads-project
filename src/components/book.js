import React from 'react';
import PropTypes from 'prop-types';

import Menu from 'menu';

function Book({book, onBookShelfSelect}) {
  const { id, cover, title, author } = book;
  const { w, h, image } = cover;
  const handleShelfSelect = (shelf) => onBookShelfSelect(id, shelf);

  const style = {
    width: w,
    height: h,
    backgroundImage: `url('${image}')`
  };

  return <div className='book'>
    <div className='book-top'>
      <div className='book-cover' style={style} />
      <Menu onShelfSelect={handleShelfSelect} />
    </div>
    <div className='book-title'>{title}</div>
    <div className='book-authors'>{author}</div>
  </div>;
}

Book.propTypes = {
  book: PropTypes.object.required,
  onBookShelfSelect: PropTypes.func
};

export default Book;
