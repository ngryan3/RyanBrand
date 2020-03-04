import React from "react";
import {Redirect} from 'react-router-dom';
import '../styles.css';
import tempLogo from '../../../images/logo512.png';

const testUsername = "user";
const testPassword = "user";

class Login extends React.Component {
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
                <form className="login-form">
                    <img id="login-logo" src={tempLogo} alt={"tempLogo"} />
                    <h1>Welcome!</h1>
                    <div className="form-block">
                        <label>Username:</label><br />
                        <input type="text" id="fusername" name="fusername" onChange={this.usernameChangeHandler}></input><br />
                    </div>
                    <div className="form-block">
                        <label>Password: </label><br />
                        <input type="text" id="fpassword" name="fpassword" onChange={this.passwordChangeHandler}></input><br />
                    </div>
                    <button id="btn-login" onClick={(event) => this.handleClick(event)}>Submit</button><br />
                    <p>Don't have an account? Click here to signup!</p><br />
                </form>
            </div>
        )
    }
}

export default Login