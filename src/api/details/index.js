import http from "utils/request"
export const detaillistApi = () => http.get({
    url:'/shopping/store/hotAmong.node',
    data: {
        storeId:1065,
        _:1575441400947
    }
})
