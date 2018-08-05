import React from 'react'

import './App.css'
import * as BooksAPI from './BooksAPI'
import ShelvesPage from './components/shelvesPage';
import SearchPage from './components/searchPage';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    bookHashMap: {},
    shelvesList: {
      'currentlyReading': { bookList: [], shelfTitle: 'Currently Reading' },
      'wantToRead': { bookList: [], shelfTitle: 'Want to Read' },
      'read': { bookList: [], shelfTitle: 'Read' }
    },
    showSearchPage: false
  };

  componentDidMount() {
    const {shelvesList, bookHashMap} = this.state;
    BooksAPI.getAll()
      .then((books) => {
        for (const book of books) {
          bookHashMap[book.id] = book;
          shelvesList[book.shelf].bookList.push(book.id);
        }
        this.setState({shelvesList, bookHashMap});
      });
  }

  onOpenSearchPage = () => this.setState({ showSearchPage: true });
  onCloseSearchPage = () => this.setState({ showSearchPage: false });

  onBookShelfSelect = (book, selectedShelf) => {
    BooksAPI.update(book, selectedShelf)
      .then((res) => {
        const {id, shelf} = book;
        const {bookHashMap, shelvesList} = this.state;

        if(!bookHashMap.hasOwnProperty(id)) {
          bookHashMap[id] = book;
        }
        if(shelf) {
          shelvesList[shelf].bookList = res[shelf];
        }
        if (selectedShelf && selectedShelf !== 'none'){
          shelvesList[selectedShelf].bookList = res[selectedShelf];
        }
        bookHashMap[id].shelf = selectedShelf === 'none' ? 'none' : selectedShelf;
        this.setState({shelvesList, bookHashMap});
      });
  };

  render() {
    const {bookHashMap, shelvesList, showSearchPage} = this.state;

    return (
      <div className="app">
        {showSearchPage ? (
          <SearchPage bookHashMap={bookHashMap} onBookShelfSelect={this.onBookShelfSelect} onCloseSearchPage={this.onCloseSearchPage} />
        ) : (
          <ShelvesPage bookHashMap={bookHashMap} shelvesList={shelvesList} onBookShelfSelect={this.onBookShelfSelect} onOpenSearchPage={this.onOpenSearchPage} />
        )}
      </div>
    )
  }
}

export default BooksApp
