import React from 'react';

import {Route, Switch} from "react-router-dom";
import MainPage from "./conntainers/MainPage/MainPage";
import Albums from "./conntainers/Albums/Albums";
import Header from "./Componets/Header/Header";
import Tracks from "./conntainers/Tracks/Tracks";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/albums/:id" component={Albums}/>
                <Route exact path="/tracks/:id" component={Tracks}/>
            </Switch>
        </div>
    );
}

export default App;
