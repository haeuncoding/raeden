// action constants and corresponding action creators
export const RECEIVE_BOOKS = "categories/RECEIVE_BOOKS"
export const RECEIVE_BOOK = "categories/RECEIVE_BOOK"
export const REMOVE_BOOK = "books/REMOVE_BOOK"

export const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books
})

export const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  book
})

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId
})

// getModels that grabs all the models in the store
// getModel that takes in a model id and returns the specified model from the store

export const getBooks = (store) => {
  if (store.books) { 
    // console.log('store categories here!')
    // console.log(Object.values(store.categories).flat(1))
    return Object.values(store.books)
  } else {
  return [];
  }
}

export const getBook = (bookId) => (store) => {
  if (store.books && store.books[bookId]) {
    return store.books[bookId]
  } else {
    return null;
  }
}

// thunk action creators


export const fetchBooks = () => async (dispatch) => {
  const response = await fetch(`/api/books`);
  if (response.ok) {

    const books = await response.json();
    dispatch(receiveBooks(books))
  }
}

export const fetchBook = (bookId) => async (dispatch) => {
  const response = await fetch(`/api/books/${bookId}`)
  if (response.ok) {
    const book = await response.json()
    dispatch(receiveBook(book))
  }
}

export const scanBook = (isbnData) => async (dispatch) => {
  const response = await fetch(`https://openlibrary.org/api/books/${isbnData}`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "lhttps://localhost:3000",
      "Content-Type": "application/json",
      "Content-Type": "text/plain",
      "Accept": "application/json"
    }
  })
  console.log(response)
  if (response.ok) {
    const book = await response.json()
    dispatch(receiveBook(book))
  }
}

export const createBook = (book) => async (dispatch) => {
  const response = await fetch(`/api/books`, {
    method: "POST",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  if (response.ok) {
    const newBook = await response.json()
    dispatch(receiveBook(newBook))
  }
}


export const updateBook = (book) => async (dispatch) => {
  const response = await fetch(`/api/books/${book.id}`, {
    method: "PATCH",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  if (response.ok) {
    const updatedBook = await response.json()
    dispatch(receiveBook(updatedBook))
  }
}

export const deleteBook = (bookId) => async (dispatch) => {
  const response = await fetch(`/api/books/${bookId}`, {
    method: "DELETE"
  })
  if (response.ok) {
    dispatch(removeBook(bookId))
  }
}

const booksReducer = (state = {}, action) => {
    let newState = { ...state };
  switch (action.type) {
    case RECEIVE_BOOKS:
      return { ...newState, ...action.books };
    case RECEIVE_BOOK:
      return { ...newState, [action.book.id]: action.book };
    case REMOVE_BOOK:
      delete newState[action.bookId];
      return newState;
    default:
      return state;
  }
}

export default booksReducer;