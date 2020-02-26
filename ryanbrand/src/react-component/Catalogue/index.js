import React from 'react';
import './styles.css';
import TileContainer from './CatalogueView/index'

class Catalogue extends React.Component{
    
        products = [
        { name: "Product1",
        type: "Type1",
        description: "Something Ryan related",
        filename: "1.jpg",
        price: 500},
        {
            name: "Product2",
            type: "Type2",
            description: "Something Ryan related",
            filename: "2.jpg",
            price: 400
        }
        ]
    
    render (){
        return (
            <TileContainer products={this.products}/>
         
        )
    }
}



export default Catalogue