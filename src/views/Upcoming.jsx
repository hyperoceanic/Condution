import React, { Component } from 'react';
import '../styles/Upcoming.css';
var $ = require('jquery');
var moment = require('moment-timezone');

// TODO! TODO! TODO! Recover password is broken.

class Upcoming extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <div style={{margin: 1}}>
            <div class="sandwich"><i class="fas fa-bars"></i></div>
            <div class="perspective-title"><i class="fas fa-chevron-circle-right"></i><t class="perspective-titleword">Upcoming</t></div>
            <div style={{padding: "0 0 7px 0"}}>
                <hr class="perspective-divider"/>
                <div id="upcoming-header"><t id="greeting"></t><t id="greeting-name"></t>&middot;<t id="greeting-date"></t></div>
            </div>
            <div id="upcoming-daterow">
                <div id="upcoming-daterow-0" class="upcoming-daterow-item upcoming-daterow-active">
                    <div class="upcoming-daterow-t" id="upcoming-daterow-t0"></div>
                    <div style={{transform: "translateY(-2px)"}}>
                        <div class="upcoming-daterow-d" id="upcoming-daterow-d0"></div>
                        <div class="upcoming-daterow-w" id="upcoming-daterow-w0"></div>
                    </div>
                </div>
                <div id="upcoming-daterow-1" class="upcoming-daterow-item upcoming-daterow-normal">
                    <div class="upcoming-daterow-t" id="upcoming-daterow-t1"></div>
                    <div style={{transform: "translateY(-2px);"}}>
                        <div class="upcoming-daterow-d" id="upcoming-daterow-d1"></div>
                        <div class="upcoming-daterow-w" id="upcoming-daterow-w1"></div>
                    </div>
                </div>
                <div id="upcoming-daterow-2" class="upcoming-daterow-item upcoming-daterow-normal">
                    <div class="upcoming-daterow-t" id="upcoming-daterow-t2"></div>
                    <div style={{transform: "translateY(-2px);"}}>
                        <div class="upcoming-daterow-d" id="upcoming-daterow-d2"></div>
                        <div class="upcoming-daterow-w" id="upcoming-daterow-w2"></div>
                    </div>
                </div>
                <div id="upcoming-daterow-3" class="upcoming-daterow-item upcoming-daterow-normal">
                    <div class="upcoming-daterow-t" id="upcoming-daterow-t3"></div>
                    <div style={{transform: "translateY(-2px);"}}>
                        <div class="upcoming-daterow-d" id="upcoming-daterow-d3"></div>
                        <div class="upcoming-daterow-w" id="upcoming-daterow-w3"></div>
                    </div>
                </div>
                <div id="upcoming-daterow-4" class="upcoming-daterow-item upcoming-daterow-normal">
                    <div class="upcoming-daterow-t" id="upcoming-daterow-t4"></div>
                    <div style={{transform: "translateY(-2px);"}}>
                        <div class="upcoming-daterow-d" id="upcoming-daterow-d4"></div>
                        <div class="upcoming-daterow-w" id="upcoming-daterow-w4"></div>
                    </div>
                </div>
                <div id="upcoming-daterow-5" class="upcoming-daterow-item upcoming-daterow-normal">
                    <div class="upcoming-daterow-t" id="upcoming-daterow-t5"></div>
                    <div style={{transform: "translateY(-2px);"}}>
                        <div class="upcoming-daterow-d" id="upcoming-daterow-d5"></div>
                        <div class="upcoming-daterow-w" id="upcoming-daterow-w5"></div>
                    </div>
                </div>
                <div id="upcoming-daterow-6" class="upcoming-daterow-item upcoming-daterow-normal">
                    <div class="upcoming-daterow-t" id="upcoming-daterow-t6"></div>
                    <div style={{transform: "translateY(-2px);"}}>
                        <div class="upcoming-daterow-d" id="upcoming-daterow-d6"></div>
                        <div class="upcoming-daterow-w" id="upcoming-daterow-w6"></div>
                    </div>
                </div>
                <div id="upcoming-daterow-7" class="upcoming-daterow-item upcoming-daterow-normal">
                    <div class="upcoming-daterow-t" id="upcoming-daterow-t7"></div>
                    <div style={{transform: "translateY(-2px);"}}>
                        <div class="upcoming-daterow-d" id="upcoming-daterow-d7"></div>
                        <div class="upcoming-daterow-w" id="upcoming-daterow-w7"></div>
                    </div>
                </div>
            </div>
            <hr class="perspective-divider"/>
            <div id="inbox-subhead" class="perspective-subhead">
                Unsorted <div id="unsorted-badge" class="badge" style={{transform: "translate(3px, -2px)"}}></div>
            </div>
            <div id="inbox" class="upcoming-section"> </div>
            <div id="ds-subhead" class="perspective-subhead">
                <t id="ds-text">Due Soon</t> <div id="duesoon-badge" class="badge" style={{transform: "translate(3px, -2px)"}}>0</div> <div id="ds-daterowfield" style={{display:"none", transform: "translateY(-1px)"}}><div style={{fontWeight: 600, display: "inline-block", fontSize: "10px"}}>@</div> <div id="duesoon-ondate"></div> </div>
            </div>
            <div id="due-soon" class="upcoming-section"> </div>

        </div>
        );
    }
}

export default Upcoming;
