import React from 'react';
import { Link } from 'react-router-dom';
import { userService } from './userService';
import './loggedIn.css'
class LoggedInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: []
        };
    }

    componentDidMount() {
        this.setState({ 
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { user, users } = this.state;
        return (
            <div class="w3-container">

<div className="col-md-6 col-md-offset-3">

               <p></p>

               <h1 align="center">Hi {user.firstName}!</h1>
                <p align="center">You Have Successfully Logged In</p>
                <ul>
                <li><Link to="/login">Logout</Link> </li>
                <p></p>
                 <li><a href="/usertranslations">Admin All Translations</a></li>
                 <p></p>

                 <li><a href="/create">Add Translations</a></li>

                 </ul>
            </div>
            </div>

        );
    }
}

export default LoggedInPage;