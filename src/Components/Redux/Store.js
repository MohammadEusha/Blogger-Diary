import { combineReducers, createStore } from "redux";
import blogsReducer from "./Reducer/bloogsReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const combinedReducer = combineReducers({
    blogs: blogsReducer,
})
export const store = createStore(combinedReducer, composeWithDevTools())