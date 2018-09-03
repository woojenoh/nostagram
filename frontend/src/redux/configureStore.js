import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import users from "redux/modules/users";

// 현재 환경을 확인한다.
const env = process.env.NODE_ENV;

const middlewares = [thunk];

// logger는 현재 환경이 개발일 때만 부른다.
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

// 리듀서를 합친다.
const reducer = combineReducers({
  users
});

let store = initialState =>
  createStore(reducer, applyMiddleware(...middlewares));

export default store();
