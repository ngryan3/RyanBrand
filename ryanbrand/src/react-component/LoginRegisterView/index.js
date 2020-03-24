import React from "react";
import './styles.css';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import NavigationBar from "../NavigationBar";


class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { screen: [], isLogin: true, buttonLabel: "Register" };
    }
    componentWillMount() {
        let newScreen = [];
        newScreen.push(<Login parentContext={this} appContext={this.props.parentContext} />);
        this.setState({ screen: newScreen })
    }
    handleClick(event) {
        if (this.state.isLogin) {
            let newScreen = [];
            newScreen.push(<Register parentContext={this} />);
            this.setState({ screen: newScreen, buttonLabel: "Login", isLogin: false })
        } else {
            let newScreen = [];
            newScreen.push(<Login parentContext={this} app={this.props.app}/>);
            this.setState({ screen: newScreen, buttonLabel: "Register", isLogin: true })
        }
    }
    render() {
        return (
            <div>
                <NavigationBar />
            <div className="container-login">
                {this.state.screen}
                <button id="btn-login-register" onClick={(event) => this.handleClick(event)}>{this.state.buttonLabel}</button><br/>
                <Link to="/admin-login">Login as admin</Link>
            </div>
            
            </div>
        )
    }
}

export default LoginView