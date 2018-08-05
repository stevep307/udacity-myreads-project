import React from 'react';
import PropTypes from 'prop-types';

import Shelf from './shelf';

function ShelvesPage({shelvesList, onBookShelfSelect, onOpenSearchPage}) {
  return <div className='list-books'>
    <div className='list-books-title'>
      <h1>MyReads</h1>
    </div>
    <div className='list-books-content'>
      <div>
        {
          Object.values(shelvesList).map((shelf) => <Shelf shelf={shelf} onBookShelfSelect={onBookShelfSelect} key={shelf.shelfTitle} />)
        }
      </div>
    </div>
    <div className='open-search'>
      <a onClick={onOpenSearchPage}>Add a book</a>
    </div>
  </div>;
}

ShelvesPage.propTypes = {
  shelvesList: PropTypes.object.isRequired,
  onBookShelfSelect: PropTypes.func.isRequired,
  onOpenSearchPage: PropTypes.func.isRequired
};

export default ShelvesPage;
