import React from "react";
import './styles.css';
import NavigationBar from "../NavigationBar";
import { Link } from "react-router-dom";
import tempLogo from '../../images/logo512.png';

const testUsername = "username"
const testPassword = "password"

class LoginView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {username: "", password: ""}
    }
    handleClick(event) {
        event.preventDefault();
        console.log(this.state.username)
        console.log(this.state.password)
        if (testUsername === this.state.username && testPassword === this.state.password) {
            alert("You are now logged in.")

        } else {
            alert("Username and password do not match!");
        }
    }
    render() {
        return (
            <div>
                <NavigationBar />
                <div id="container-login">
                    <form className="login-form">
                            <img id="login-logo" src={tempLogo} alt={"tempLogo"} />
                        <h1>Welcome!</h1>
                        <div className="form-block">
                            <label>Username:</label><br />
                            <input type="text" id="fusername" name="fusername" onChange= {(event, newValue) => this.setState({username:newValue})}></input><br />
                        </div>
                        <div className="form-block">
                            <label>Password: </label><br />
                            <input type="text" id="fpassword" name="fpassword" onChange= {(event, newValue) => this.setState({password:newValue})}></input><br />
                        </div>
                        <Link id="goSignup">Don't have an account? Click here to signup!</Link><br />
                        <button id="btn-login" onClick={(event) => this.handleClick(event)}>Login</button><br />
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginView