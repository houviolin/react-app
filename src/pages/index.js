import Loadable from "react-loadable";
import Loading from "common/loading"

export const Store = Loadable({
    loader:()=>import("./store"),
    loading:Loading
})

export const Goodgoods = Loadable({
    loader:()=>import("./goodgoods"),
    loading:Loading
})

export const Shopping = Loadable({
    loader:()=>import("./shopping"),
    loading:Loading
})
export const SpecilaCounuter = Loadable({
    loader:()=>import("./specialcounter"),
    loading:Loading
})
export const Worldwide = Loadable({
    loader:()=>import("./worldwide"),
    loading:Loading
})

export const Member = Loadable({
    loader:()=>import("./member"),
    loading:Loading
})

export const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

export const Register = Loadable({
    loader:()=>import("./register"),
    loading:Loading
})

export const SelectStore = Loadable({
    loader:()=>import("./selectstore"),
    loading:Loading
})

export const Discount = Loadable({
    loader:()=>import("./discount"),
    loading:Loading
})

export const Essence = Loadable({
    loader:()=>import("./essence"),
    loading:Loading
})

export const Active = Loadable({
    loader:()=>import("./active"),
    loading:Loading
})

export const Makeup = Loadable({
    loader:()=>import("./makeup"),
    loading:Loading
})

export const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

export const Healthcare = Loadable({
    loader:()=>import("./healthcare"),
    loading:Loading
})

export const Infant = Loadable({
    loader:()=>import("./infant"),
    loading:Loading
})

export const National = Loadable({
    loader:()=>import("./national"),
    loading:Loading
})
// 没引入
export const City = Loadable({
    loader:()=>import("./city"),
    loading:Loading
})
export const Search =Loadable({
    loader:()=>import("./search"),
    loading:Loading
})
export const Zhekou =Loadable({
    loader:()=>import("./zhekou"),
    loading:Loading
})
export const Details = Loadable({
    loader:()=>import("./details"),
    loading:Loading
})
export const Cart = Loadable({
    loader:()=>import("./cart"),
    loading:Loading
})
export const TimeLimit =Loadable({
    loader:()=>import("./timeLimit"),
    loading:Loading
})
