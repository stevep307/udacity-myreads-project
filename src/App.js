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
    shelvesList: {
      'currentlyReading': { bookList: [], shelfTitle: 'Currently Reading' },
      'wantToRead': { bookList: [], shelfTitle: 'Want to Read' },
      'read': { bookList: [], shelfTitle: 'Read' }
    },
    showSearchPage: false
  };

  componentDidMount() {
    const {shelvesList} = this.state;
    BooksAPI.getAll().then((books) => {
      for (const book of books) {
        shelvesList[book.shelf].bookList.push(book)
      }
      this.setState({ shelvesList })
    });
  }

  onOpenSearchPage = () => this.setState({ showSearchPage: true });
  onCloseSearchPage = () => this.setState({ showSearchPage: false });
  onBookShelfSelect = () => {};

  render() {
    const {shelvesList, showSearchPage} = this.state;

    return (
      <div className="app">
        {showSearchPage ? (
          <SearchPage onBookShelfSelect={this.onBookShelfSelect} onCloseSearchPage={this.onCloseSearchPage} />
        ) : (
          <ShelvesPage shelvesList={shelvesList} onBookShelfSelect={this.onBookShelfSelect} onOpenSearchPage={this.onOpenSearchPage} />
        )}
      </div>
    )
  }
}

export default BooksApp
