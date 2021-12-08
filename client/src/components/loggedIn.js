import React from 'react';
import { Link } from 'react-router-dom';
import { userService } from './userService';

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
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You Have Successfully Logged In</p>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

export default LoggedInPage;