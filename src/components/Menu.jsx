import React, { Component } from 'react';
import '../styles/Menu.css';
var $ = require('jquery');
var chrono = require('chrono-node');


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {perspectives: [], projects: [], currentMenu: "upcoming"};
    }

    async componentDidMount() {
        let tlps = (await this.props.engine.db.getTopLevelProjects(this.props.user));
        let psps = (await this.props.engine.db.getPerspectives(this.props.user));
        this.setState({perspectives: psps[2], projects: tlps[2]});
    }

    render() {
        return (
            <div className="menu-area">
                    <div>
                        <div id="today" className={"today "+(this.state.currentMenu==="upcoming" ? "today-highlighted" : "")} onClick={()=>{this.props.viewLoadCallback("upcoming"); this.setState({currentMenu: "upcoming"})}}><i className="fas fa-chevron-circle-right"></i><t style={{paddingLeft:8}}>Upcoming</t></div>
                        <div id="completed" className={"today "+(this.state.currentMenu==="completed" ? "today-highlighted" : "")} onClick={()=>{this.props.viewLoadCallback("completed"); this.setState({currentMenu: "completed"})}}><i className="fas fa-check-circle"></i><t style={{paddingLeft:8}}>Completed</t></div>
                    </div>
                    <t className="menu-label">
                        Perspectives <div className="menu-subicon" id="perspective-add" style={{float: "right", display: "inline-block"}}><i className="fas fa-plus"></i></div>
                    </t>
                    <div className="perspectives menu-portion scrollable">
                        {this.state.perspectives.map(function(psp) {
                        return (<div key={psp.id} id={"perspective-"+psp.id} className={"menuitem perspective mihov "+(this.state.currentMenu===psp.id ? "menuitem-selected" : "")} onClick={()=>{this.props.viewLoadCallback("perspective", psp.id); this.setState({currentMenu: psp.id})}}><i className="fa fa-layer-group"></i><t style={{paddingLeft:8}}>{psp.name}</t></div>)
                        }, this)}
                    </div>
                    <t className="menu-label">
                        Projects <div className="menu-subicon" id="project-add-toplevel" style={{float: "right", display: "inline-block"}}><i className="fas fa-plus"></i></div>
                    </t>
                    <div className="projects menu-portion scrollable">
                        {this.state.projects.map(function(proj) {
                            return (<div key={proj.id} id={"project-"+proj.id} className={"menuitem project mihov "+(this.state.currentMenu===proj.id ? "menuitem-selected" : "")} onClick={()=>{this.props.viewLoadCallback("project", proj.id); this.setState({currentMenu: proj.id})}}><i className="fas fa-project-diagram"></i><t style={{paddingLeft: 8, textOverflow: "ellipsis", overflow: "hidden"}}>{proj.name}</t></div>)
                        }, this)}

                    </div>
                        <div id="logout" onClick={()=>this.props.firebase.auth().signOut()}><i className="fas fa-snowboarding" style={{paddingRight: 5}}></i>Logout</div>
            </div>
        );
    }
}

export default Menu;
