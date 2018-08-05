import React from 'react';
import PropTypes from 'prop-types';

function Menu({selectedShelf, onShelfSelect}) {
  return <div className='book-shelf-changer'>
    <select value={selectedShelf} onChange={(event) => onShelfSelect(event.target.value)}>
      <option value='move' disabled>Move to...</option>
      <option value='currentlyReading'>Currently Reading</option>
      <option value='wantToRead'>Want to Read</option>
      <option value='read'>Read</option>
      <option value='none'>None</option>
    </select>
  </div>;
}

Menu.propTypes = {
  selectedShelf: PropTypes.string,
  onShelfSelect: PropTypes.func.isRequired
};

Menu.defaultProps = {
  selectedShelf: 'move'
};

export default Menu;
