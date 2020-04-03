import React from "react";
import {Redirect, Link} from 'react-router-dom';
import '../styles.css';
import tempLogo from '../../../images/logo512.png';
import NavigationBar from '../../NavigationBar';
import { adminLogin } from "../../../actions/admin";


class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
        this.props.history.push("/admin-login")
    }

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

    render() {
        const { app } = this.props;
        return (
            <div>
                <NavigationBar app={app}/>
                <div className="container-login">
                    <div className="login-form">
                        <img className="login-logo" src={tempLogo} alt={"tempLogo"} />
                        <h1>Administrator</h1>
                        <div className="form-block">
                            <input type="text" name="username" placeholder="Username" onChange={this.handleInputChange}/><br />
                        </div>
                        <div className="form-block">
                            <input type="text" name="password" placeholder="Password" onChange={this.handleInputChange}/><br />
                        </div>
                        <button className="btn-login" onClick={() => adminLogin(this, app)}>Submit</button><br />
                        <Link to="/login">Login as user</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminLogin