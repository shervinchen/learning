export default {
  setMovies: (state, action) => {
    return { ...state, movies: action.movies }
  }
}
