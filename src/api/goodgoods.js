import http from "utils/request";
// export const mainlistApi = (pageCount, startNum, recommendId) => axios({
//     method: "get",
//     url: "/front/discover/new/recDiscovers",
//     params: {
//         pageCount,
//         startNum,
//         recommendId
//     }
// })

// export const citylistApi = (cityId,pageCount, startNum, startId) => axios({
//     method: "get",
//     url: "/front/discover/new/cityDiscovers",
//     params: {
//         cityId,
//         pageCount,
//         startNum,
//         startId,
//     }
// })

export const goodlistApi = (pageCount, startNum, recommendId)=>http.get({
    url:"/front/discover/new/recDiscovers",
    data:{
        pageCount,
        startNum,
        recommendId
    }
})

export const citylistApi = (cityId, pageCount, startNum, startId)=>http.get({
    method:"get",
    url:"/front/discover/new/cityDiscovers",
    data:{
        cityId,
        pageCount,
        startNum,
        startId,
    }
})