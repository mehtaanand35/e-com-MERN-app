import { createStore, applyMiddleware } from "redux";
import { Reducers } from "./Reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// export const Store = createStore(
//   Reducers,
//   {},
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const intialState = {};
const middleware = [thunk];
export const Store = createStore(
  Reducers,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
