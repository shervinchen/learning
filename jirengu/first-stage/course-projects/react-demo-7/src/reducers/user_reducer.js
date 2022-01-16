export default {
  setUser: (state, action) => {
    return { ...state, user: action.user }
  }
}
