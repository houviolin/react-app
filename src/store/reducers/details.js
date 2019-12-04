import {handleActions} from "redux-actions"
import {detailsTypes} from "actions/details/actionsTypes"
const defaultState = {
    productlist1:[],
    productlist2:[],
    productlist3:[],
}

export default handleActions({
    [detailsTypes]:(state,action)=>{
        let detailsState = JSON.parse(JSON.stringify(state));
        detailsState.productlist1 =action.payload.data.data[1].data;
        detailsState.productlist2 =action.payload.data.data[2].data;
        detailsState.productlist3 =action.payload.data.data[10].data.items;
        // console.log(action.payload.data.data[10].data.items);
        return detailsState;
    }
},defaultState)
