import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }
    login(e) {
        e.preventDefault();
    }
    render() {
        return (
            <main className="container">
                <h1>Logged in as {this.props.location.state.userName}</h1>
            </main>
        );
    }
}

export default LandingPage;
