import React from "react";
import '../styles.css';
import tempLogo from '../../../images/logo512.png';
import { login } from "../../../actions/user";
import NavigationBar from "../../NavigationBar";
import {Link} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

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

    handleOnClick = event => {
        window.location.href = "/register"
    };

    render() {
        return (
            <div>
                <NavigationBar />
                <div className="container-login">
                    <div>
                        <form className="login-form">
                            <img className="login-logo" src={tempLogo} alt={"tempLogo"} />
                            <h1>Welcome!</h1>
                            <div className="form-block">
                                <input type="text" name="email" placeholder="Username" onChange={this.handleInputChange}/><br />
                            </div>
                            <div className="form-block">
                                <input type="text" name="password" placeholder="Password" onChange={this.handleInputChange}/><br />
                            </div>
                            <button className="btn-login" onClick={() => login(this, this.props.app)}>Submit</button><br />
                            <p>Don't have an account? Click here to signup!</p><br />
                        </form>
                    </div>
                    <button id="btn-login-register" onClick={this.handleOnClick}>Register</button><br/>
                    <Link to="/admin-login">Login as admin</Link>
                </div>

            </div>

        )
    }
}

export default Login