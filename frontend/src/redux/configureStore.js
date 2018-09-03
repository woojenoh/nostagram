import { createStore, combineReducers } from "redux";
import users from "redux/modules/users";

// 리듀서를 합친다.
const reducer = combineReducers({
  users
});

let store = initialState => createStore(reducer);

export default store();
