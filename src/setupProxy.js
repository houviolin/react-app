const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/ajax",proxy({
        target:"https://api.ricebook.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    })),
    app.use("/shopping",proxy({
        target:" https://midway.51tiangou.com",
        changeOrigin:true,
    }))
    // https://midway.51tiangou.com/shopping/market/initNew.node?cityId=2554&storeId=1065&_=157511389884
    //midway.51tiangou.com/shopping/home/init.node

}