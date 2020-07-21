import React, { Component } from 'react';
import './styles/Auth.css';
var $ = require('jquery');


class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {name: "", email: "", password: "", authState: "login"};
        this.handleAuth = this.handleAuth.bind(this);
        this.toggleAuthState = this.toggleAuthState.bind(this);
    }

    handleAuth() {
        if (this.state.authState == "login") {
            this.props.firebase.auth().signInWithEmailAndPassword($("#email").val(), $("#password").val()).then(function() {
                if (this.props.firebase.auth().currentUser.emailVerified){
                    $("#auth-content-wrapper").fadeOut();
                }
            }).catch(function() {
                // Handle Errors here.
                $(".auth-upf").addClass("wrong");
            });
        } else{
        }
    }

    toggleAuthState() {
        if (this.state.authState == "login") {
            this.setState({authState: "newuser"});
        } else {
            this.setState({authState: "login"});
        }
    }

    render() {
        return (
            <div id="auth-content-wrapper" className="condutiontheme-default-light" style={{height:"100%"}}>
                <div id="auth-left-menu">
                    <div className="menu-area" style={{height:"100%"}}>
                        <div className="auth-component"></div>
                        <div className="auth-component"></div>
                        <span id="auth-image-credit">Image by <span style={{fontWeight: "500"}}>Tobias Keller/Paweł Czerwiński</span></span>
                    </div>
                </div>
                <div id="authwall">
                    <h1 id="greeting-auth" style={{display: "inline-block", paddingRight: "10px"}}>Hello</h1><span style={{color: "var(--content-normal-alt)"}}>Welcome to Condution.</span>
                    <h3 className="greeting-auth-subtitle" id="greeting-auth-normal">{this.state.authState === "login" ? `Let's authenticate. Otherwise this may not be useful...`:`By signing up, you agree to our Privacy Policy & Terms.`}</h3>
                    <input className="auth-upf" id="name" type="text" autoComplete="off" defaultValue="" onChange={(e)=>this.setState({name:e.target.value})} placeholder="What should we call you?" style={{display: this.state.authState === "login" ? "none" : "block" }}/>
                    <input className="auth-upf" id="email" type="email" autoComplete="off" defaultValue="" onChange={(e)=>this.setState({email:e.target.value})} placeholder="Email" />
                    <input className="auth-upf" id="password" type="password" autoComplete="off" onChange={(e)=>this.setState({password:e.target.value})} defaultValue="" placeholder="Password" />
                    <br />
                    <span id="need-verify">Check your inbox. A lovely email is awaiting you.</span>
                    <span id="recover-password">Recover Password</span>
                    <div id="auth-actiongroup">
                        <div id="newuser" onClick={this.toggleAuthState} style={{cursor: "pointer"}}>{this.state.authState === "login" ? "Make an account" : "Log in"}</div>
                        <div id="login" onClick={this.handleAuth}><i className="fas fa-snowboarding" style={{paddingRight: 5}}></i>Let's Do This!</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;
