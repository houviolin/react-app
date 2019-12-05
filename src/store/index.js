import {createStore,combineReducers,applyMiddleware} from "redux"

import city from "./reducers/city";
import good from "./reducers/goodgoods"
import essence from "./reducers/essence"
import details from "./reducers/details"
import makeup from "./reducers/makeup"
import home from "./reducers/home"
import healthcare from "./reducers/healthcare"
import infant from "./reducers/infant"
import national from "./reducers/national"
import storein from "./reducers/store"
import shoppingstore from "./reducers/shopping"
import timeliststore from "./reducers/timelist"
import detaillist from "./reducers/detaillist"
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
const reducers=combineReducers({
    city,
    good,
    essence,
    details,
    makeup,
    home,
    healthcare,
    infant,
    national,storein,shoppingstore,timeliststore,detaillist

})
const store=createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))
export default store