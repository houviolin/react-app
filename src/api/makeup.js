import http from "utils/request";

export const makeupApi = (cityId,pid,cid,index,_) => http.get({
    url: "/overseas/main/tab.node",
    data: {
        cityId,pid,cid,index,_
    }
})
export const makeupApi2 = (cityId, pid, cid,index,time,tabIndex,childIndex,currentView) => http.get({
    url: "/overseas/main/tab.node",
    data: {
        cityId, pid, cid,index,time,tabIndex,childIndex,currentView
    }
})

