import { createStore } from "redux";
import { UserReducers } from "./Reducers/UserReducer";
import { CartReducers } from "./Reducers/CartReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    user: UserReducers,
    cart: CartReducers
})
export const store = createStore(reducers);
