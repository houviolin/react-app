import {createStore,combineReducers,applyMiddleware} from "redux"
import city from "./city/dispatcher"
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
const reducers=combineReducers({
    city
})
const store=createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))
export default store