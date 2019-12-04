import http from "utils/request";

export const scrollhandleApi = (cityId, selected, pid, cid, index, _,) => http.get({
    url: "/overseas/main/tab.node",
    data: {
        cityId,
        selected,
        pid, cid,
        index,
        _,
    }
})

export const projectApi = (cityId,selected,pid,cid,index,tabIndex,childIndex,currentView,_) => http.get({
    url: "/overseas/main/tab.node",
    data: {
        cityId,
        selected,
        pid,
        cid,
        index,
        tabIndex,
        childIndex,
        currentView,
        _
    }
})