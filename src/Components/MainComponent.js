import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Start from "./StartComponent";

class Main extends Component {

    render() {

        const HomePage = () => {
            return(
                <Start />
            );
        }

        return (
            <div>
                <p />
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route />
                    <Route />
                    <Redirect />
                </Switch>
            </div>
            
        );
    }
}

export default Main;