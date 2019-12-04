import {handleActions} from "redux-actions"
import {timeListType,timeList2Type} from "actions/timelist/timelistTypes"
const defaultState={
    timeliststate:[],
    timelistagianstate:[]
}
export default handleActions({
    [timeListType]:(state,action)=>{
        let timelistState=JSON.parse(JSON.stringify(state));
        timelistState.timeliststate=action.payload;
        return timelistState
    },
    [timeList2Type]:(state,action)=>{
        let timelistliststate=JSON.parse(JSON.stringify(state));
        let add=action.payload.splice(-1,1)
         timelistliststate.timelistagianstate=action.payload;
        return timelistliststate
    }
},defaultState)