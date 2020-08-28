import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route />
                    <Route />
                    <Route />
                    <Redirect />
                </Switch>
            </div>
            
        );
    }
}

export default ;