import {cityApi} from "../api/city/index"

export const CityAction=()=>{

    var getCityAction=(data)=>({
        type:"CITY",
        data
    })
    return async (dispatch)=>{
        let data=await cityApi();
         dispatch(getCityAction(data.data))
    }
}