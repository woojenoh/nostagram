import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import user from "redux/modules/user";
import photos from "redux/modules/photos";
import { composeWithDevTools } from "redux-devtools-extension";
import { i18nState } from "redux-i18n";

// 현재 환경을 확인한다.
const env = process.env.NODE_ENV;

const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

// logger는 현재 환경이 개발일 때만 부른다.
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

// 리듀서를 합친다.
const reducer = combineReducers({
  user,
  photos,
  routing: routerReducer,
  i18nState
});

let store;

if (env === "development") {
  store = initialState =>
    createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

export { history };
export default store();
