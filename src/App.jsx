import React, { Component } from 'react';
import UI from './UI.jsx';
import Auth from './Auth.jsx';
import './styles/App.css';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var E = require("./backend/CondutionEngine");

E.start(firebase);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { authState: "8" };
    }

 
    componentWillMount() {
        let app = this;
        //firebase.auth().signOut();
        firebase.auth().onAuthStateChanged(async function(user) {
            if (user) {
                if (user.emailVerified) {
                    app.setState({authState:"2"});
                } else {
                    app.setState({authState:"1"});
                }
            } else {
                app.setState({authState:"0"});
            }
        });
    }

    render() {
        // wait a little
        switch (this.state.authState) {
            case "0":
            case "1":
                return <Auth engine={E} firebase={firebase} flushCallback={()=>this.setState({authState: "2"})} />;
            case "2":
                return <UI />;
            case "8":
                return <div>Quick and dirty loader</div>;
        }
    }
}

/*function App() {*/
  //return (
    //<div className="App">
        //I am app!
    //</div>
  //);
/*}*/

export default App;
