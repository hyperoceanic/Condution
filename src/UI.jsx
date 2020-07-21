import React, { useState } from 'react';
import Menu from './components/Menu.jsx';
import Upcoming from './views/Upcoming.jsx';
import './styles/UI.css';

var $ = require('jquery');
var chrono = require('chrono-node');

function UI(props) {
    let [currentView, setCurrentView] = useState("upcoming");
    let [currentPage, setCurrentPage] = useState("");

    return (
        <div className={props.theme} style={{height: "100%"}}>
            <div id="left-menu">
                <Menu engine={props.engine} firebase={props.firebase} user={props.user} viewLoadCallback={function(view, id) { setCurrentPage(id); setCurrentView(view) }}/>
            </div>
            <div id="content-area" className="scrollable" style={{backgroundColor: "var(--background)"}}>
                {{
                    "upcoming": (
                        <Upcoming engine={props.engine} firebase={props.firebase} user={props.user} />
                    ),
                    default: (
                        <div>not upcoming</div>
                    )
                }[currentView]}
            </div>
        </div>
    )
}

export default UI;
