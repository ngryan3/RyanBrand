import React from "react";
import logo from '../../images/ryan-logo-white.png';
import './styles.css'
import { NavLink } from "react-router-dom";
import { logout } from "../../actions/user";


class NavigationBar extends React.Component {
    render() {
        const { app } = this.props;
        return (
            <header>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
                <div className='container'>
                    <nav className='navigation'>
                        {/* <div className='logo'>LOGO</div> */}
                        <img src={logo} id="navbar-logo"/>
                        <div className='title'> RyanBrand </div>
                        <div className='spacer'> </div>
                        <div className='navItems'>
                            <ul>
                                <li><a href='/'>Home</a></li>
                                <li><a href='/catalogue'>Catalogue</a></li>
                                <li><a href='/about'>About</a></li>
                                {!app.state.currentUser ? <li><a href='/login'>Login/Register</a></li> :
                                    <li><a href='/' onClick={() => logout(app)}>Logout</a></li>}
                                {/*Making catalogue as home page for testing*/}
                                {/* <li><a href='/catalogue'>Catalogue</a></li> */}
                                <li><a href='/cart'><i className="fa fa-shopping-cart"></i> Cart</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

        );
    }
}

export default NavigationBar;