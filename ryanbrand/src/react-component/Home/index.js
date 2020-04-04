import React from 'react';

import NavigationBar from "../NavigationBar";
import "./styles.css"

import { withRouter } from 'react-router-dom';

class Home extends React.Component {
    render() {
        const { app } = this.props;
        return (
            <div>
                <NavigationBar app={app}/>
                <div className='section'>
                    <h1> WELCOME TO THE RYAN STORE</h1>
                    <a className='viewProduct' href='/catalogue'>View Products</a>
                </div>
                <div className='section'>
                    <h1>MINI-GAMES ARE COMING SOON!!!!</h1>
                    <button disabled className='gameButton'>COMING SOON</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Home)