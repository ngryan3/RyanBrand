import React from "react";
import '../styles.css';
import tempLogo from '../../../images/logo512.png';
import { addUser } from "../../../actions/user";
import NavigationBar from "../../NavigationBar";
import {Link} from "react-router-dom";


class Register extends React.Component {
    state = {
        username: "",
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

    handleOnClick = event => {
        window.location.href = "/login"
    }


    render() {
        return (
            <div>
                <NavigationBar />
                <div className="container-login">
                    <div>
                        <div className="login-form">
                            <img className="login-logo" src={tempLogo} alt={"tempLogo"} />
                            <h1>Welcome!</h1>
                            <div className="form-block">
                                {/* <label>Username:</label><br /> */}
                                <input type="text" name="username" onChange={this.handleInputChange}/><br />
                            </div>
                            <div className="form-block">
                                {/* <label>Password: </label><br /> */}
                                <input type="text" name="password" onChange={this.handleInputChange} /><br />
                            </div>
                            <button id="btn-login" onClick={() => addUser(this)}>Submit</button><br />
                            <p>Already have an account? Click here to login!</p><br />
                        </div>
                    </div>
                    <button id="btn-login-register" onClick={this.handleOnClick}>Login</button><br/>
                    <Link to="/admin-login">Login as admin</Link>
                </div>

            </div>

        )
    }
}

export default Register