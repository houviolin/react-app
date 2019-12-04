import http from "utils/request"
export const storeApi=(cityId,storeId,_)=>http.get({
    url:'/shopping/market/initNew.node',
    data:{
        cityId:storeId,storeId:storeId,_:_
    }
})
// https://midway.51tiangou.com/shopping/market/initNew.node
// https://midway.51tiangou.com/shopping/market/initNew.node?cityId=2554&storeId=1065&_=1575113898840