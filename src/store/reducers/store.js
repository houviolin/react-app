import {handleActions} from "redux-actions"
import {storeType} from "../../actions/store/storeActionTypes"
const defaultState ={
    one:[],
    two:[],
    three:[],
    total:[]
}
export default handleActions({
    [storeType]:(state,action)=>{
        let storeState=JSON.parse(JSON.stringify(state))
        storeState.one=action.payload[5].data.items;
        storeState.two=action.payload[7].data.items;
        storeState.three=action.payload[9].data.items;
        storeState.total=action.payload.splice(13,25)
        return storeState
    }
},defaultState)