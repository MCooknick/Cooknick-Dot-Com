import React, { useState } from "react";

import './App.css';
import Home from './containers/home'
import PlusItView from './components/plusitView'
import PlusItInfo from './components/plusitInfo'
import AccutypeView from './components/accutypeView'
import AccutypeInfo from './components/accutypeInfo'
import ThickitView from './components/thickitView'
import ThickitInfo from './components/thickitInfo'

export default function Portfolio() {

    const [Active, setActive] = useState('HOME');

    function changeView(selection){
        setActive(selection);
    }

    return (
        <div className="App">
            <Home activeview={Active} />

            <PlusItView onSelection={() => changeView('PLUSIT')} activeview={Active} />
            <PlusItInfo onSelection={() => changeView('HOME')} activeview={Active} />

            <AccutypeView onSelection={() => changeView('ACCUTYPE')} activeview={Active} />
            <AccutypeInfo onSelection={() => changeView('HOME')} activeview={Active} />

            <ThickitView onSelection={() => changeView('THICKIT')} activeview={Active} />
            <ThickitInfo onSelection={() => changeView('HOME')} activeview={Active} />
        </div>
    );
}
