import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages 
import TodoPage from '../pages/TodoPage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import Home from '../pages/Home'
function Navigation() {
    return (
        <Router>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/login">
                    <LoginPage />
                </Route>

                <Route  path="/todos">
                    <TodoPage />
                </Route>

                <Route path="/signup">
                    <SignupPage />
                </Route>

            </Switch>
        </Router>
    );
}

export default Navigation
