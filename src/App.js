import React from "react";
import { HashRouter,Redirect,Switch} from "react-router-dom";
import routeEach from "./utils/routeEach"
import {configRoute} from "./router"

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Redirect from="/" to="/store" exact/>
                    {routeEach(configRoute)}
                </Switch>
            </HashRouter>
        )
    }
}


export default App;

