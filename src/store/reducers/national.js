import {handleActions} from "redux-actions"
import {nationalType,nationalType2} from "actions/national/actionsTypes"
const defaultState = {
    nationallist:[],
    nationallist2:[],
    nationallist3:[],
    // nationallist4:[],
    // nationallist5:[],
    // essenctprojectlist:[]
}

export default handleActions({
    [nationalType]:(state,action)=>{
        let nationalState = JSON.parse(JSON.stringify(state));
        nationalState.nationallist = action.payload.data.data[1].data.items
        nationalState.nationallist2 = action.payload.data.data[3]
        return nationalState
    },
    [nationalType2]:(state,action)=>{
        let nationalState2 = JSON.parse(JSON.stringify(state));
        nationalState2.nationallist3 = action.payload.data.data.slice(1,10);
        // console.log(nationalState2.nationallist3);
        return nationalState2
    },
},defaultState)