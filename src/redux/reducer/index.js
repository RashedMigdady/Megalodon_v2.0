import { createStore, combineReducers } from "redux";

import token from "./loginToken";
import cart from "./cart";

const reducers = combineReducers({ token,cart});

const store = createStore(reducers);

export default store;