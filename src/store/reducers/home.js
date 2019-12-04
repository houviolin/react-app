import {handleActions} from "redux-actions"
import {homeType,homeType2} from "actions/home/actionsTypes"
const defaultState = {
    homelist:[],
    homelist2:[],
    homelist3:[],
    // homelist4:[],
    // homelist5:[],
    // essenctprojectlist:[]
}

export default handleActions({
    [homeType]:(state,action)=>{
        let homeState = JSON.parse(JSON.stringify(state));
        homeState.homelist = action.payload.data.data[1].data.items
        homeState.homelist2 = action.payload.data.data.slice(3,7)
        return homeState
    },
    [homeType2]:(state,action)=>{
        let homeState2 = JSON.parse(JSON.stringify(state));
        homeState2.homelist3 = action.payload.data.data.slice(1,10);
        // console.log(homeState2.homelist3);
        return homeState2
    },
},defaultState)