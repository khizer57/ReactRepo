const INITIAL_STATE = {
  label: "Login Reducer Here",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGINDATA" :
      action.uid = state.loginreducer.uid;
      return state.loginreducer;
    default:
      return state;
  }
};
export default reducer;
