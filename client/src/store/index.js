import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(rootReducer, compose(applyMiddleware(thunk),  composeWithDevTools()));

export default store;
