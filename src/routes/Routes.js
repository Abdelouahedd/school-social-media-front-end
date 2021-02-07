import React, {lazy} from "react";
import {Route, Switch} from "react-router-dom";


const Index = lazy(() => import("../components/index/Index"));


const Routes = () => (
    <Switch>
        <Route path='/' component={Index} exact/>
    </Switch>
);
export default Routes;