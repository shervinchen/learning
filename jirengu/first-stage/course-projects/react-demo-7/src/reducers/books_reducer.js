export default {
  setBooks: (state, action) => {
    return { ...state, books: action.books }
  }
}
