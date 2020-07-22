import React, { Component } from 'react';
import '../styles/Task.css';
var $ = require('jquery');
var jQuery = require('jquery');
var chrono = require('chrono-node');
require('bootstrap-tagsinput');
require('select2')();
var moment = require('moment-timezone');
//var { Plugins, HapticsImpactStyle, HapticsNotificationType } = require('@capacitor/core');
//var { Haptics, Network, Browser } = Plugins;



class Task extends Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
    }

    render() {
        <div id={"task-"+this.props.id} class="task thov"> 
            <div id={"task-display-"+this.props.id} class="task-display" style="display:block">
                <input type="checkbox" id={"task-check-"+this.props.id} class="task-check" />
                <label class="task-pseudocheck" id={"task-pseudocheck-"+this.props.id} for={"task-check-"+this.props.id} style="font-family: 'Inter', sans-serif;">&zwnj;</label>
                    <input class="task-name" id={"task-name-"+this.props.id} type="text" autocomplete="off" value="${name}" />
                <div class="task-trash task-subicon" id={"task-trash-"+this.props.id} style="float: right; display: none;"><i class="fas fa-trash"></i></div>
                <div class="task-repeat task-subicon" id={"task-repeat-"+this.props.id} style="float: right; display: none;"><i class="fas fa-redo-alt"></i></div>
            </div> 
        <div id={"task-edit-"+this.props.id} class="task-edit" style="display:none">
            <textarea class="task-desc" id={"task-desc-"+this.props.id} type="text" autocomplete="off" placeholder="Description">${desc}</textarea>
            <div class="task-tools task-tools-top" style="margin-bottom: 9px">
                <div class="task-tools-sub task-tools-toggles"> 
                    <div class="label"><i class="fas fa-flag"></i></div>
                    <div class="btn-group btn-group-toggle task-flagged" id={"task-flagged-"+this.props.id} data-toggle="buttons" style="margin-right: 20px !important"> 
                        <label class="btn task-flagged" id={"task-flagged-no-"+this.props.id}> <input type="radio" name="task-flagged" class="task-flagged-no" /> <i class="far fa-circle" style="transform:translateY(-4px)"></i> </label>
                            <label class="btn task-flagged" id={"task-flagged-yes-"+this.props.id}> <input type="radio" name="task-flagged" class="task-flagged-yes" /> <i class="fas fa-circle" style="transform:translateY(-4px)"></i> </label> 
                    </div> 
                    <div class="label"><i class="fas fa-globe-americas"></i></div>
                    <div class="btn-group btn-group-toggle task-floating" id={"task-floating-"+this.props.id} data-toggle="buttons" style="margin-right: 14px !important">
                        <label class="btn task-floating" id={"task-floating-no-"+this.props.id}> <input type="radio" name="task-floating" /> <i class="far fa-circle" style="transform:translateY(-4px)"></i> </label>
                            <label class="btn task-floating" id={"task-floating-yes-"+this.props.id}> <input type="radio" name="task-floating" /> <i class="fas fa-circle" style="transform:translateY(-4px)"></i> </label>
                    </div> 
                </div> 
            <div class="task-tools-sub task-tools-date">
                <div class="label"><i class="far fa-play-circle"></i></div>
                    <input class="task-defer textbox datebox" id={"task-defer-"+this.props.id} type="text" autocomplete="off" style="margin-right: 10px" ${disableTB} /> 
                <i class="fas fa-caret-right" style="color:${rightCarrotColor}; font-size:13px; margin-right: 5px"></i> 
                <div class="label"><i class="far fa-stop-circle"></i></div> 
                    <input class="task-due textbox datebox" id={"task-due-"+this.props.id} type="text" autocomplete="off" style="margin-right: 20px" ${disableTB} /> 
            </div> 
        </div> 
        <div class="task-tools task-tools-bottom"> 
            <div class="task-tools-sub task-tools-project">
                <div class="label"><i class="fas fa-tasks"></i></div>
                <select class="task-project textbox" id={"task-project-"+this.props.id} style="margin-right: 14px">
                    ${projectSelects}
                </select>
            </div> 
            <div class="task-tools-sub task-tools-tags"><div class="label"><i class="fas fa-tags"></i></div> 
                <input class="task-tag textbox" id={"task-tag-"+this.props.id} type="text" value="" onkeypress="this.style.width = ((this.value.length + 5) * 8) + 'px';" data-role="tagsinput" /> 
            </div> 
        </div>
    </div>
</div>
    }
}

export default Task;
