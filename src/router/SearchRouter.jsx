import { SearchCursesScreen } from "../components/search/SearchCursesScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { SearchWizzardScreen } from "../components/search/SearchWizzardScreen";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


export const SearchRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path= '/search/curses' component={SearchCursesScreen} />
                    <Route exact path= '/search/wizzard' component={SearchWizzardScreen} />
                    <Route exact path= '/search' component={SearchScreen} />

                </Switch>
            </div>
        </Router>
    )
}
