import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import Shelf from './shelf';

function ShelvesPage({bookHashMap, shelvesList, onBookShelfSelect}) {
  return <div className='list-books'>
    <div className='list-books-title'>
      <h1>MyReads</h1>
    </div>
    <div className='list-books-content'>
      <div>
        {
          Object.values(shelvesList).map((shelf) => <Shelf shelf={shelf} bookHashMap={bookHashMap} onBookShelfSelect={onBookShelfSelect} key={shelf.shelfTitle} />)
        }
      </div>
    </div>
    <div className='open-search'>
      <Link to='/search'>Add a book</Link>
    </div>
  </div>;
}

ShelvesPage.propTypes = {
  bookHashMap: PropTypes.object.isRequired,
  shelvesList: PropTypes.object.isRequired,
  onBookShelfSelect: PropTypes.func.isRequired
};

export default ShelvesPage;
