import { combineReducers, createStore } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({
    reducer
})

const store = createStore(reducers)

export default store

export type State = ReturnType<typeof reducers>