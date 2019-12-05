import {handleActions} from "redux-actions"
import {detaillistType} from "actions/detaillist/actionTypes"
const defaultState={
   detaillisttotal:[]
}
export default handleActions({
    [detaillistType]:(state,action)=>{
        let detailStatelist=JSON.parse(JSON.stringify(state));
        let datatemp=action.payload.data.splice(10,11)
        detailStatelist.detaillisttotal=action.payload.data;
        console.log(detailStatelist)
        return detailStatelist
    }
},defaultState)