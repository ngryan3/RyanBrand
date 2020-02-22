import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

// Importing the Queue and our simple Home Page
import ProductView from './react-component/ProductView'

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' render={()=> (<ProductView/>)}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;