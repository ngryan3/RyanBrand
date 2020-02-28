import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

// Importing the Queue and our simple Home Page
import ProductView from './react-component/ProductView'
import AdminView from './react-component/AdminDashboard'
import Catalogue from './react-component/Catalogue'
import Checkout  from "./react-component/Checkout";

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter> 
                    <Switch>
                        {/*Making catalogue as home page for testing*/}
                        <Route exact path='/' render={()=> (<Catalogue/>)}/>
                        <Route path='/product' render={() => (<ProductView/>)}/>
                        <Route exact path='/admin' render={()=> (<AdminView/>)}/>
                        <Route exact path='/checkout' render={() => (<Checkout/>)}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;