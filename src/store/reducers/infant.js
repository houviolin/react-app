import {handleActions} from "redux-actions"
import {infantType,infantType2} from "actions/infant/actionsTypes"
const defaultState = {
    infantlist:[],
    infantlist2:[],
    infantlist3:[],
    // infantlist4:[],
    // infantlist5:[],
    // essenctprojectlist:[]
}

export default handleActions({
    [infantType]:(state,action)=>{
        let infantState = JSON.parse(JSON.stringify(state));
        infantState.infantlist = action.payload.data.data[1].data.items
        infantState.infantlist2 = action.payload.data.data[3]
        // console.log(action.payload.data.data[3]);
        return infantState
    },
    [infantType2]:(state,action)=>{
        let infantState2 = JSON.parse(JSON.stringify(state));
        infantState2.infantlist3 = action.payload.data.data.slice(1,10);
        // console.log(infantState2.infantlist3);
        // console.log(action.payload.data);
        return infantState2
    },
},defaultState)