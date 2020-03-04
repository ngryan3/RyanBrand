import React from "react";
import {Redirect, Link} from 'react-router-dom';
import '../styles.css';
import tempLogo from '../../../images/logo512.png';
import NavigationBar from '../../NavigationBar';

const testUsername = "admin";
const testPassword = "admin";

class AdminLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: "", password: "", isLoggedIn: false};
    }

    usernameChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    passwordChangeHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    handleClick(event) {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);
        if (testUsername === this.state.username && testPassword === this.state.password) {
            this.setState({isLoggedIn: true});

        } else {
            alert("Username and password do not match!");
        }
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to={"/admin"}/>
        }
        return (
            <div>
                <NavigationBar/>
                <div className="container-login">
                <form className="login-form">
                    <img className="login-logo" src={tempLogo} alt={"tempLogo"} />
                    <h1>Administrator</h1>
                    <div className="form-block">
                        <label>Username:</label><br />
                        <input type="text" name="fusername" placeholder="Username" onChange={this.usernameChangeHandler}></input><br />
                    </div>
                    <div className="form-block">
                        <input type="text" name="fpassword" placeholder="Password" onChange={this.passwordChangeHandler}></input><br />
                    </div>
                    <button className="btn-login" onClick={(event) => this.handleClick(event)}>Submit</button><br />
                    <Link to="/login">Login as user</Link>

                </form>
                </div>
            </div>
        )
    }
}

export default AdminLogin