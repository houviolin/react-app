import {handleActions} from "redux-actions"
import {makeupType,makeupType2} from "actions/makeup/actionsTypes"
const defaultState = {
    makeuplist:[],
    makeuplist2:[],
    makeuplist3:[],
    // makeuplist4:[],
    // makeuplist5:[],
    // essenctprojectlist:[]
}

export default handleActions({
    [makeupType]:(state,action)=>{
        let makeupState = JSON.parse(JSON.stringify(state));
        makeupState.makeuplist = action.payload.data.data[1].data.items
        makeupState.makeuplist2 = action.payload.data.data.slice(3,7)
        return makeupState
    },
    [makeupType2]:(state,action)=>{
        let makeupState2 = JSON.parse(JSON.stringify(state));
        makeupState2.makeuplist3 = action.payload.data.data.slice(1,10);
        // console.log(makeupState2.makeuplist3);
        return makeupState2
    },
},defaultState)