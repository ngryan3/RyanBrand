import React from "react";
import '../styles.css';
import tempLogo from '../../../images/logo512.png';

const testUsername = "user";
const testPassword = "user";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: "", password: "" };
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
            alert("You are now logged in.")

        } else {
            alert("Username and password do not match!");
        }
    }

    render() {
        return (
            <div>
                <form className="login-form">
                    <img className="login-logo" src={tempLogo} alt={"tempLogo"} />
                    <h1>Welcome!</h1>
                    <div className="form-block">
                        <input type="text" name="fusername" placeholder="Username" onChange={this.usernameChangeHandler}></input><br />
                    </div>
                    <div className="form-block">
                        <input type="text" name="fpassword" placeholder="Password" onChange={this.passwordChangeHandler}></input><br />
                    </div>
                    <button className="btn-login" onClick={(event) => this.handleClick(event)}>Submit</button><br />
                    <p>Don't have an account? Click here to signup!</p><br />
                </form>
            </div>
        )
    }
}

export default Login