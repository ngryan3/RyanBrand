import React from 'react';
import './styles.css';
import TileContainer from './CatalogueView/index'
import Sidebar from './Sidebar/index'
import NavigationBar from './../NavigationBar/index'

class Catalogue extends React.Component {
    render() {
        const { app } = this.props;
        return (
            <div>
                <NavigationBar app={app}/>
                <div className="columns"> 
                    <div className='column-left'><Sidebar/></div>
                    <div className='column-right'><TileContainer/></div>
                </div>
            </div>
        )
    }
}



export default Catalogue