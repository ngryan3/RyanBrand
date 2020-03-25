import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

// Importing the Queue and our simple Home Page
import ProductView from './react-component/ProductView'
import AdminView from './react-component/AdminDashboard'
import Catalogue from './react-component/Catalogue'
import LoginView from './react-component/LoginRegisterView/'
import AdminLogin from './react-component/LoginRegisterView/AdminLogin'
import About from './react-component/About'
import Checkout from './react-component/Checkout'
import Cart from "./react-component/Cart"
import Home from "./react-component/Home"
import {readCookie} from "./actions/user";
import Login from "./react-component/LoginRegisterView/Login";
import Register from "./react-component/LoginRegisterView/Register";

class App extends React.Component {
    constructor(props) {
        super(props);
        // readCookie(this);
    }
    state = {
        currentUser: null
    };

    render() {
        const { currentUser } = this.state;
        return (
            <div>
                <BrowserRouter> 
                    <Switch>
                        {/*Making catalogue as home page for testing*/}
                        <Route exact path='/' render={()=> (<Home/>)}/>
                        <Route exact path='/catalogue' render={()=> (<Catalogue/>)}/>
                        <Route path='/product' render={() => (<ProductView/>)}/>
                        <Route exact path='/admin' render={()=> (<AdminView/>)}/>
                        {/*<Route exact path='/login' render={({ history })=> (<Login history={history} app = {this}/>)}/>*/}
                        <Route exact path='/register' render={() => (<Register />)}/>
                        <Route exact path='/admin-login' render={()=> (<AdminLogin/>)}/>
                        <Route exact path='/about' render={()=> (<About/>)}/>
                        <Route exact path='/checkout' render={() => (<Checkout/>)}/>
                        <Route exact path='/login' render={({ history }) => (<Login history={history} app={this}/>)}/>
                        <Route exact path={['/cart']} render={({ history }) => (
                            <div>
                                {!currentUser ? <Login history={history} app={this}/> : <Cart history={history} app={this}/>}
                            </div>
                            )}
                        />

                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;