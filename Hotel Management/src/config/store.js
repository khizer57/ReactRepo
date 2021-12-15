import { createStore, applyMiddleware } from "redux";
import loginreducer from "./reducers/loginreducer";
import signupreducer from "./reducers/signupreducer";
import hotelformreducer from "./reducers/hotelformreducer"
import paymentformreducer from "./reducers/paymentreducer"
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const reducer = combineReducers({
  paymentformreducer,
  hotelformreducer,
  loginreducer,
  signupreducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
