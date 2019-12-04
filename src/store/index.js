import {createStore,combineReducers,applyMiddleware} from "redux"
import storein from "./reducers/store"
import shoppingstore from "./reducers/shopping"
import timeliststore from "./reducers/timelist"
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
const reducers=combineReducers({
    storein,shoppingstore,timeliststore
})
const store=createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))
export default store