import axios from "axios"

export const mainlistApi = (pageCount, startNum, recommendId) => axios({
    method: "get",
    url: "/front/discover/new/recDiscovers",
    params: {
        pageCount,
        startNum,
        recommendId
    }
})

export const citylistApi = (cityId,pageCount, startNum, startId) => axios({
    method: "get",
    url: "/front/discover/new/cityDiscovers",
    params: {
        cityId,
        pageCount,
        startNum,
        startId,
    }
})