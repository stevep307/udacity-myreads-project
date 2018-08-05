# MyReads: A Book Lending App Project

## Table of Contents

* [Implementation details](#implementation-details)
* [How to run application](#how-to-run-application)
* [Backend Server](#backend-server)
* [Search constraint](#search-constraint)
* [Contributing](#contributing)

## Implementation details

This project written according to the [MyReads project rubric](https://review.udacity.com/#!/rubrics/918/view).

Project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). And created on base of [Udacity start repository](https://github.com/udacity/reactnd-project-myreads-starter).

[Eslint](https://eslint.org/) was added to check new react components. To lint js code run `npm run lint`. 

## How to run application

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only.

## Search constraint
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## Contributing

This folder in the repository is a project in Udacity Front-End Web Developer Nanodegree Program. So I will not accept any pull requests.
