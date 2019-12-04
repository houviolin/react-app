import {handleActions} from "redux-actions"
import {goodGoodsType,goodCityType} from "actions/good/actionsTypes"
const defaultState = {
    goodlist:[],
    citylist:[],
}
export default handleActions({
    [goodGoodsType]:(state,action)=>{
        let goodState = JSON.parse(JSON.stringify(state));
        goodState.goodlist=[...goodState.goodlist,...action.payload.data.data];
        return goodState;
    },
    [goodCityType]:(state,action)=>{
        let goodcityState = JSON.parse(JSON.stringify(state));
        // console.log(action.payload);
        goodcityState.citylist=[...goodcityState.citylist,...action.payload.data.data];
        return goodcityState;
    }
},defaultState)