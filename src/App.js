import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Landing from './components/Landing';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp'
import RequireAuth from './components/RequireAuth';
import Recipes from './components/Recipes';
import Menus from './components/Menus';
import Lists from './components/Lists';
import Settings from './components/Settings';
import About from "./components/About";
import './styles/App.css';

const App = () => {
    const [auth, setAuth] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setAuth(true);
    }
    
    return (
        <div className="App">
            <Home auth={auth}>
            <Switch>
                <Route exact path="/"
                render={() => auth ? <Redirect to='/menus'/> : <Landing setAuth={setAuth} /> } />
                <Route exact path="/login"
                    render={() => auth ? <Redirect to='/menus'/> : <Login handleClick={handleClick} /> }/>
                <Route exact path="/signup"
                    render={() => auth ? <Redirect to='/menus'/> : <SignUp handleClick={handleClick}/> }/>
                <Route exact path="/about"
                    render={() => <About/>}/>
                <RequireAuth auth={auth}>
                    <Route exact path="/recipes"
                        render={() => <Recipes /> }/>
                    <Route exact path="/menus"
                        render={() => <Menus/>}/>
                    <Route exact path="/lists"
                        render={() => <Lists/>}/>
                    <Route exact path="/settings"
                        render={() => <Settings/>}/>
                </RequireAuth>
            </Switch>
            </Home>
        </div>
    );
}

export default App;
