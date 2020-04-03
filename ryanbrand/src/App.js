import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

// Importing the Queue and our simple Home Page
import ProductView from './react-component/ProductView'
import AdminView from './react-component/AdminDashboard'
import Catalogue from './react-component/Catalogue'
import AdminLogin from './react-component/LoginRegisterView/AdminLogin'
import About from './react-component/About'
import Checkout from './react-component/Checkout'
import Cart from "./react-component/Cart"
import Home from "./react-component/Home"
import {readStorage} from "./actions/user";
import {readCookie} from "./actions/user";
import Login from "./react-component/LoginRegisterView/Login";
import Register from "./react-component/LoginRegisterView/Register";

class App extends React.Component {
    constructor(props) {
        super(props);
        // readStorage(this);
        readCookie(this);
    }
    state = {
        currentUser: null
    };

    render() {
        const { currentUser } = this.state;
        console.log(currentUser);
        return (
            <div>
                <BrowserRouter> 
                    <Switch>
                        {/*Making catalogue as home page for testing*/}
                        <Route exact path='/' render={()=> (<Home app={this}/>)}/>
                        <Route exact path='/catalogue' render={()=> (<Catalogue app={this}/>)}/>
                        <Route path='/product/:id' render={(matchProps) => (<ProductView {...matchProps} app={this}/>)}/>
                        {/*<Route exact path='/login' render={({ history })=> (<Login history={history} app = {this}/>)}/>*/}
                        <Route exact path='/register' render={() => (<Register app={this}/>)}/>
                        <Route
                            exact path={['/admin', '/admin-login']}
                            render={({ history }) => (
                                <div className="app">
                                    {!currentUser ? <AdminLogin history={history} app={this}/> : <AdminView history={history} app={this}/>}
                                </div>
                            )}
                        />
                        <Route exact path='/about' render={()=> (<About app={this}/>)}/>
                        <Route exact path='/checkout' render={() => (<Checkout app={this}/>)}/>
                        <Route
                            exact path={['/login', '/cart']}
                            render={({ history }) => (
                                <div className="app">
                                    {!currentUser ? <Login history={history} app={this}/> : <Cart history={history} app={this}/>}
                                </div>
                            )}
                        />
                        <Route render={() => <div>404 Not Found</div>}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;