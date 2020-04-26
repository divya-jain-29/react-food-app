import React, { Component } from 'react';
import * as api from '../Api/api';
import Spinner from "../common/Spinner";
import Container from './container';
import "../custom.css";
class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: true
        };
    }

    componentDidMount() {
        api.getAllItems()
        .then((response) => {
            this.setState({
                items: response.data.menu.items,
                loading: false
            });
            console.log("items", this.state.items);
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            this.state.loading ? 
                <div className="jumbotron spinner text-center"><Spinner/></div>
            :
            <Container items= {this.state.items}/>
        
        );
    }
}
export default Dashboard;
