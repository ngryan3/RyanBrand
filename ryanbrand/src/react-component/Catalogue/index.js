import React from 'react';
import './styles.css';

class Catalogue extends React.Component{
    render (){
        return (
            <div className="tileContainer">
                <div className="tile">
                    <p>Product 1</p>
                </div>
                <div className="tile">
                    <p>Product 2</p>
                </div>
            </div>
        )
    }
}



export default Catalogue