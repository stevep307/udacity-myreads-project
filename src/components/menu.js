import React from 'react';

function Menu({onShelfSelect}) {

  return <div className="book-shelf-changer">
    <select onChange={(event) => onShelfSelect(event.target.value)}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>;
}

export default Menu;
