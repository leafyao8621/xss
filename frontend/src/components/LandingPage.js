import React, { Component } from "react";
import axios from "axios";
import moment from "moment-timezone"

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        this._isMounted = true;
        this.refreshData();
    }
    refreshData() {
        axios
            .get("/api/entries/get_entries/")
            .then((res) => {
                if (this._isMounted) {
                    this.setState({data: res.data.result});
                }
            }).catch((err) => {
                console.log(err);
            });
    }
    renderData() {
        return (
            this.state.data.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{moment(item.created).local().format("LLL")}</td>
                        <td>{item.sender}</td>
                        <td>{item.content}</td>
                    </tr>
                )
            })
        )
    }
    render() {
        return (
            <main className="container">
                <h1>Logged in as {this.props.location.state.userName}</h1>
                <div className="container">
                        <div className="row">
                            <div className="col-12"></div>
                            <table className="table table-image">
                                <thead>
                                    <tr>
                                        <th scope="col">Time</th>
                                        <th scope="col">Sender</th>
                                        <th scope="col">Content</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { this.renderData() }
                                </tbody>
                            </table>
                        </div>
                    </div>
            </main>
        );
    }
}

export default LandingPage;
