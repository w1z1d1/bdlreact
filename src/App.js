import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Register from "./pages/register";
import Buy from "./pages/buy";
function App() {
    return (
        <HashRouter>
            <div>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route exact strict path="/" component={Home} />
                    <Route path='/register' component={Register}/>
                    <Route path='/buy' component={Buy}/>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
