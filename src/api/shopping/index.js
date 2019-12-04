import http from "utils/request"
export const shoppingApi=(cityId,storeId,_)=>http.get({
    url:'/shopping/home/init.node',
    data:{
        cityId:storeId,storeId:storeId,_:_
    }
})
export const shoppingAgianApi=(currentView)=>http.get({
    url:'/shopping/home/init.node',
    data:{
        storeId: 1065,
        cityId: 2554,
        _: 1575297309426,
        source: 1,
        id: 1065,
        name: "%E7%BE%8E%E9%A3%9F1%E5%8F%B7%E7%B2%BE%E5%93%81%E8%B6%85%E5%B8%82",
        cityName:" %E5%A4%A7%E8%BF%9E%E5%B8%82",
        storeName:" %E7%BE%8E%E9%A3%9F1%E5%8F%B7%E7%B2%BE%E5%93%81%E8%B6%85%E5%B8%82",
        marketType: 1,
        tabIndex: 0,
        childIndex: 0,
        currentView: currentView, 
    }
})



// https://midway.51tiangou.com/shopping/home/init.node?storeId=1065&cityId=2554&_=1575268202287
