const INITIAL_STATE = {
    data: null
  };
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "HOTELFORMDATA" :
        state = action.payload;
        console.log(state);
        return state;
      default:
        return state;
    }
  };
  export default reducer;
  