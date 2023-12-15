
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { AuthReducer } from "./reducer/user/auth/authReducer";

const rootReducer = combineReducers({ 
    AuthReducer 
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))