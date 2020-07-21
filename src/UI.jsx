import React, { useState } from 'react';
import './styles/UI.css';
var $ = require('jquery');
var chrono = require('chrono-node');

function UI(props) {
    let currentView = useState("upcoming");
    let currentPage = useState("");

    return (
        <div className={props.theme}>
            <div id="left-menu">
                {/*Put the menu here*/}
                <div>
                    menu!
                </div>
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
