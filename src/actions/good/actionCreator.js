import {goodGoodsType,goodCityType} from "./actionsTypes";
import {createAction} from "redux-actions";
import {goodlistApi,citylistApi} from "api/goodgoods"
export const goodAsyncAction = (pageCount, startNum, recommendId)=>{

    let goodAction = createAction(goodGoodsType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await goodlistApi(pageCount, startNum, recommendId);
        // console.log(data);
        dispatch(goodAction(data));
    }
}

export const goodcityAsycnAction = (cityId, pageCount, startNum, startId)=>{
    let goodcityAction = createAction(goodCityType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await citylistApi(cityId, pageCount, startNum, startId);
        console.log(data);
        dispatch(goodcityAction(data))
    }
}