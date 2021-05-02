import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { CurseListScreen } from "../components/curses/CurseListScreen";
import { Navbar } from "../components/navbar/Navbar";
import { WizzardListScreen } from "../components/wizzards/WizzardListScreen";
import { WizzardScreen } from "../components/wizzards/WizzardScreen";
import { SearchRouter } from "./SearchRouter";

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path= '/' component={WizzardListScreen} />
                <Route exact path= '/wizzards/:uid' component={WizzardScreen} />
                <Route exact path= '/curse' component={CurseListScreen} />

                <Route exact path='/search' component={SearchRouter} />
                <Redirect to='/' />
            </Switch>



        </Router>
    )
}
