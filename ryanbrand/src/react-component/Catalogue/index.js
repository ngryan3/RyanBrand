import React from 'react';
import './styles.css';
import TileContainer from './CatalogueView/index'

class Catalogue extends React.Component{
    state = {
        products: [
        { "name": "Product1",
        "type": "Type1",
        "description": "Something Ryan related",
        "filename": "1.jpg",
        "price": 500},
        {
            "name": "Product2",
            "type": "Type2",
            "description": "Something Ryan related",
            "filename": "2.jpg",
            "price": 400
        }
        ]
    };
    render (){
        return (
            <TileContainer products={this.state.products}/>
            // <div className="tileContainer">
            //     <div className="tile">
            //         <p>Product 1</p>
            //     </div>
            //     <div className="tile">
            //         <p>Product 2</p>
            //     </div>
            //     <div className="tile">
            //         <p>Product 3</p>
            //     </div>
            //     <div className="tile">
            //         <p>Product 4</p>
            //     </div>
            //     <div className="tile">
            //         <p>Product 5</p>
            //     </div>
            //     <div className="tile">
            //         <p>Product 6</p>
            //     </div>
            //     <div className="tile">
            //         <p>Product 7</p>
            //     </div>
            //     <div className="tile">
            //         <p>Product 8</p>
            //     </div>
            //     <div className="tile">
            //         <p>Product 5</p>
            //     </div>
            //     <div className="tile">
            //         <p>Product 6</p>
            //     </div>
            //     <div className="tile">
            //         <p>Product 7</p>
            //     </div>
            //     <div className="tile">
            //         <p>Product 8</p>
            //     </div>
            //     <div className="tile">
            //         <p>Product 5</p>
            //     </div>
            //     <div className="tile">
            //         <p>Product 6</p>
            //     </div>
            //     <div className="tile">
            //         <p>Product 7</p>
            //     </div>
            //     <div className="tile">
            //         <p>Product 8</p>
            //     </div>
            // </div>
        )
    }
}



export default Catalogue