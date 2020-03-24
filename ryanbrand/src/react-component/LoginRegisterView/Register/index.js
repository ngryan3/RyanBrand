import React from "react";
import '../styles.css';
import tempLogo from '../../../images/logo512.png';
import { addUser } from "../../../actions/user";


const usernames = ["username"]

class Register extends React.Component {
    state = {
        email: "",
        password: ""
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleClick(event) {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);
        if (this.state.username === "") {
            alert("Please enter a username.");
        }
        else if (this.state.password === "") {
            alert("Please enter a password");
        }
        else if (usernames.includes(this.state.username)) {
            alert("User is already registered!")

        } else {
            usernames.push(this.state.username)
            alert("You are now registered.");
        }
    }

    render() {
        return (
            <div>
                <div className="login-form">
                    <img className="login-logo" src={tempLogo} alt={"tempLogo"} />
                    <h1>Welcome!</h1>
                    <div className="form-block">
                        {/* <label>Username:</label><br /> */}
                        <input type="text" name="email" onChange={this.handleInputChange}/><br />
                    </div>
                    <div className="form-block">
                        {/* <label>Password: </label><br /> */}
                        <input type="text" name="password" onChange={this.handleInputChange} /><br />
                    </div>
                    <button id="btn-login" onClick={() => addUser(this)}>Submit</button><br />
                    <p>Already have an account? Click here to login!</p><br />
                </div>
            </div>
        )
    }
}

export default Register