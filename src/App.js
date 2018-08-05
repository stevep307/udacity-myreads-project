import React from 'react'

import './App.css'
import * as BooksAPI from './BooksAPI'
import ShelvesPage from './components/shelvesPage';
import SearchPage from './components/searchPage';
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    searchString: '',
    bookHashMap: {},
    searchBookList: [],
    shelvesList: {
      'currentlyReading': { bookList: [], shelfTitle: 'Currently Reading' },
      'wantToRead': { bookList: [], shelfTitle: 'Want to Read' },
      'read': { bookList: [], shelfTitle: 'Read' }
    }
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

  onSearch = (searchString) => {
    const {bookHashMap} = this.state;
    this.setState({searchString});
    BooksAPI.search(searchString)
      .then((books) => {
        const booksWithSelves = books.map(function (book) {
          if (bookHashMap.hasOwnProperty(book.id)) {
            return bookHashMap[book.id];
          }
          return book;
        });
        this.setState({searchBookList: booksWithSelves});
      })
    .catch(() => this.setState({searchBookList: []}));
  };

  onCloseSearch = () => this.setState({searchString: '', searchBookList: []});

  render() {
    const {searchString, bookHashMap, shelvesList, searchBookList} = this.state;

    return (
      <div className='app'>
        <Route path='/search' component={() =>
          <SearchPage searchString={searchString} bookList={searchBookList} onBookShelfSelect={this.onBookShelfSelect} onSearch={this.onSearch} onCloseSearch={this.onCloseSearch}/>
        }/>
        <Route path='/' exact component={() =>
          <ShelvesPage bookHashMap={bookHashMap} shelvesList={shelvesList} onBookShelfSelect={this.onBookShelfSelect} />
        }/>
      </div>
    )
  }
}

export default BooksApp
