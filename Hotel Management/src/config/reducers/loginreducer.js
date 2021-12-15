const INITIAL_STATE = {
  user: null
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGINDATA" :
      state.user = action.payload;
      return state
    default:
      return state;
  }
};
export default reducer;
