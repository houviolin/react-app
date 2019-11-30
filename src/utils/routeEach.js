import React, { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import Layout from "layout"

export default (routes) => {
    function isLayout(route){
        if(route.meta.flag){
            return(
                <Layout path={route.path}>
                    <route.component />
                </Layout>
            )
        }else{
            return <route.component />
        }
    }

    function isLogin(route){
        if(route.path !== "./login" && route.meta.requiredAuth){
            if(Cookies.get("token")){
                return isLayout
            }else{
                return <Redirect to={{pathname:"/login",paramss :{from :route.path}}} />
            }
        }else{
            return isLayout(route)
        }
    }

    function childrenMap(childNodes) {
        return (
            <Route path={childNodes.path} key={childNodes.path} render={() => {
                return (
                    <Fragment>
                        <Route component={childNodes.component} />
                        <Switch>
                            {
                                childNodes.children.map(child => {
                                    return <Route path={child.path} key={child.path} render={() => {
                                        if (child.children) {
                                            return childrenMap(child)
                                        } else {
                                            return isLogin(child)
                                        }
                                    }} />
                                })
                            }
                            <Redirect from={childNodes.path} to={childNodes.children[0].path} />
                        </Switch>
                    </Fragment>
                )
            }} />
        )
    }

    return routes.map(route => {
        if (route.children) {
            return childrenMap(route);
        } else {
            return <Route path={route.path} key={route.path} render={() => {
                return isLayout(route)
            }} />
        }
    })
}

{/* <Route path="/home" render={() => {
    return (
        <Fragment>
            <Route path="/home" component={Home} />
            <Switch>
                <Route path="/home/one" component={HomeOne} />
                <Route path="/home/two" component={HomeTwo} />
            </Switch>
        </Fragment>
    )
}} /> */}