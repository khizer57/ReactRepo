  const INITIAL_STATE = {   
    userName: 'Basit',
    age: 12,
    apData:[]
  }
  
  const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);

  if(action.type === 'DATAFROMAPI'){
    state.apData = action.apData
    return { ...state, ...action};
  }
};


export default reducer;