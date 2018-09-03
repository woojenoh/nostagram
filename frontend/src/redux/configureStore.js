import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import users from "redux/modules/users";

const middlewares = [thunk];

// 리듀서를 합친다.
const reducer = combineReducers({
  users
});

let store = initialState =>
  createStore(reducer, applyMiddleware(...middlewares));

export default store();
