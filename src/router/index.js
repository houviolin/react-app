import {Store,TimeLimit,SpecilaCounuter,Goodgoods,Zhekou,Search,City,Shopping,Worldwide,Member,Login,Register,SelectStore,Discount,Essence,Active,Makeup,Home,Healthcare,Infant,National,} from "../pages"

export const TabBarRoute = [
    {
        path:"/store",
        component:Store,
        meta:{
            flag:true,
        },
        text:"逛商场",
        icon:"\ue612",
        children:[
            {
                path:"/store/selectStore",
                component:SelectStore,
                meta:{
                    flag:false
                },
            }
        ],

    },
    {
        path:"/goodgoods",
        component:Goodgoods,
        meta:{
            flag:true,
        },
        text:"好物圈",
        icon:"\ue761",
    },
    {
        path:"/shopping",
        component:Shopping,
        meta:{
            flag:true,
        },
        text:"购物",
        icon:"\ue784",
    },
    {
        path:"/worldwide",
        component:Worldwide,
        meta:{
            flag:true,
        },
        text:"海外购",
        icon:"\ue624",
        children:[
            {
                path:"/worldwide/essence",
                component:Essence,
                text:"精选",
                meta:{
                    flag:true,
                }
            },
            {
                path:"/worldwide/active",
                component:Active,
                text:"活动",
                meta:{
                    flag:true,
                }
            },
            {
                path:"/worldwide/makeup",
                component:Makeup,
                text:"美妆",
                meta:{
                    flag:true,
                }
            },
            {
                path:"/worldwide/home",
                component:Home,
                text:"居家",
                meta:{
                    flag:true,
                }
            },
            {
                path:"/worldwide/healthcare",
                component:Healthcare,
                text:"保健",
                meta:{
                    flag:true,
                }
            },
            {
                path:"/worldwide/infant",
                component:Infant,
                text:"母婴",
                meta:{
                    flag:true,
                }
            },
            {
                path:"/worldwide/national",
                component:National,
                text:"国家馆",
                meta:{
                    flag:true,
                }
            },
        ],
    },
    {
        path:"/member",
        component:Member,
        meta:{
            flag:true,
            requiredAuth:true,
        },
        text:"我的",
        icon:"\ue635",
    }
]

export const NotTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{
            flag:false,
            requiredAuth:false,
        }
    },
    {
        path:"/register",
        component:Register,
        meta:{
            flag:false,
            requiredAuth:false,
        }
    },
    {
        path:"/discount",
        component:Discount,
        text:"好物满减",
        meta:{
            flag:true,
        }
    },
    {
        path:"/city",
        component:City,
        meta:{
            requiredAuth:false
        }
      
    },
    {
        path:"/search",
        component:Search,
        meta:{
            requiredAuth:false
        }
      
    },
    {
        path:"/zhekou",
        component:Zhekou,
        meta:{
            requiredAuth:false
        }
      
    },
    {
        path:"/specicounter",
        component:SpecilaCounuter,
        meta:{
            requiredAuth:false
        }
    },
    {
        // pageType: 82id: 2573_: 1575341971279
        path:"/timeLimit/:itemId/:pageType/:id/:_",
        component:TimeLimit,
        meta:{
            requiredAuth:false
        }
    },
]

export const configRoute = TabBarRoute.concat(NotTabBarRoute);