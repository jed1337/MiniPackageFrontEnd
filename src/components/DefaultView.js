import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import PackageView from "./pickup/PackageView";
import PickupView from "./pickup/PickupView";

function DefaultView() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/newPackage"}>newPackage</Link></li>
                    <li><Link to={"/newPickup"}>newPickup</Link></li>
                </ul>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/newPackage">
                        <PackageView/>
                    </Route>
                    <Route path="/newPickup">
                        <PickupView/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

export default DefaultView;