import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/login";

function App() {
    return (
        <HashRouter>
            <div>
                <Switch>
                    <Route exact strict path="/" component={Login}/>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
