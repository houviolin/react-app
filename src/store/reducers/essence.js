import {handleActions} from "redux-actions"
import {essenceScrollType,essenceProjectType} from "actions/essence/actionsTypes"
const defaultState = {
    essencescrolllist:[],
    essencescrolllist2:[],
    essencescrolllist3:[],
    essencescrolllist4:[],
    essencescrolllist5:[],
    essenctprojectlist:[]
}

export default handleActions({
    [essenceScrollType]:(state,action)=>{
        let essenceScrollState = JSON.parse(JSON.stringify(state));
        essenceScrollState.essencescrolllist = action.payload.data.data[5].data.items
        essenceScrollState.essencescrolllist2 = action.payload.data.data[6].data.items
        essenceScrollState.essencescrolllist3 = action.payload.data.data[7].data.items
        essenceScrollState.essencescrolllist4 = action.payload.data.data[8].data.items
        essenceScrollState.essencescrolllist5 = action.payload.data.data[9].data.items
        // console.log(essenceScrollState.essencescrolllist2);
        return essenceScrollState
    },
    [essenceProjectType]:(state,action)=>{
        let essenceProjectState = JSON.parse(JSON.stringify(state));
        essenceProjectState.essenctprojectlist = action.payload.data.data
        // console.log(essenceProjectState.essenctprojectlist);
        return essenceProjectState
    }
},defaultState)