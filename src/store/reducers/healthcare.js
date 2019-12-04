import {handleActions} from "redux-actions"
import {healthcareType,healthcareType2} from "actions/healthcare/actionsTypes"
const defaultState = {
    healthcarelist:[],
    healthcarelist2:[],
    healthcarelist3:[],
    // healthcarelist4:[],
    // healthcarelist5:[],
    // essenctprojectlist:[]
}

export default handleActions({
    [healthcareType]:(state,action)=>{
        let healthcareState = JSON.parse(JSON.stringify(state));
        healthcareState.healthcarelist = action.payload.data.data[1].data.items
        healthcareState.healthcarelist2 = action.payload.data.data.slice(3,7)
        return healthcareState
    },
    [healthcareType2]:(state,action)=>{
        let healthcareState2 = JSON.parse(JSON.stringify(state));
        healthcareState2.healthcarelist3 = action.payload.data.data.slice(1,10);
        // console.log(healthcareState2.healthcarelist3);
        return healthcareState2
    },
},defaultState)