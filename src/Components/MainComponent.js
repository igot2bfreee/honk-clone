import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Start from "./StartComponent";
import Help from "./HelpComponent";

class Main extends Component {

    render() {

        const StartPage = () => {
            return(
                <Start />
            );
        }

        return (
            <div>
                <Switch>
                    <Route path='/' component={StartPage} />
                    <Route exact path='/help' render={() => <Help /> } />
                    <Redirect to='/home' />
                </Switch>
            </div>
            
        );
    }
}

export default Main;