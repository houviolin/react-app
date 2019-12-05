const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/front",proxy({
        target:"https://discover.51tiangou.com",
        changeOrigin:true,
    })),
    app.use("/overseas",proxy({
        target:"https://midway.51tiangou.com",
        changeOrigin:true,
    })),
    app.use("/product",proxy({
        target:"https://midway.51tiangou.com",
        changeOrigin:true,
    })),
    app.use("/publics",proxy({
        target:"https://orderserver.51tiangou.com",
        changeOrigin:true,
    })),
    app.use("/shopping",proxy({
        target:" https://midway.51tiangou.com",
        changeOrigin:true,
    }))

    // https://coupon.51tiangou.com/publics/tgAd/bestModule?pageType=48&cityId=2554&storeId=1065
    app.use("/publics",proxy({
        target:" https://coupon.51tiangou.com",
        changeOrigin:true,
    }))
    // https://coupon.51tiangou.com/publics/activity/item/hot
    // https://coupon.51tiangou.com/publics/activity/item/hot
}


