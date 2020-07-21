import React, { useState } from 'react';
import Menu from './components/Menu.jsx';
import './styles/UI.css';

var $ = require('jquery');
var chrono = require('chrono-node');

function UI(props) {
    let [currentView, setCurrentView] = useState("upcoming");
    let [currentPage, setCurrentPage] = useState("");

    return (
        <div className={props.theme}>
            <div id="left-menu">
                <Menu engine={props.engine} firebase={props.firebase} user={props.user} viewLoadCallback={function(view, id) {
                    setCurrentPage(id);
                    setCurrentView(view);
                }}/>
            </div>
            { /* <input title="Add a task on enter" id="quickadd" type="text" autocomplete="off" value="" placeholder="Add something to the inbox?" /> */}
            <div id="content-area" className="scrollable">
                <span>content</span>
                {/*Each of the views + pagination*/}
            </div>
        </div>
    )
}

export default UI;
