import React from 'react';
import './styles.css';
import TileContainer from './CatalogueView/index'
import Sidebar from './Sidebar/index'
import NavigationBar from './../NavigationBar/index'

class Catalogue extends React.Component {

    products = [
        {
            name: "Product1",
            type: "Type1",
            description: "Something Ryan related",
            filename: "product_placeholder.jpg",
            price: 500
        },
        {
            name: "Product2",
            type: "Type2",
            description: "Something Ryan related",
            filename: "product_placeholder.jpg",
            price: 400
        },
        {
            name: "Product2",
            type: "Type3",
            description: "Something Ryan related",
            filename: "product_placeholder.jpg",
            price: 400
        },
        {
            name: "Product2",
            type: "Type4",
            description: "Something Ryan related",
            filename: "product_placeholder.jpg",
            price: 400
        }
        , {
            name: "Product3",
            type: "Type2",
            description: "Something Ryan related",
            filename: "product_placeholder.jpg",
            price: 400
        }
        , {
            name: "Product4",
            type: "Type2",
            description: "Something Ryan related",
            filename: "product_placeholder.jpg",
            price: 400
        }
        , {
            name: "Product5",
            type: "Type2",
            description: "Something Ryan related",
            filename: "product_placeholder.jpg",
            price: 400
        }
    ]

    render() {
        return (
            <div>
                <NavigationBar />
                <div className="columns"> 
                    <div className='column-left'><Sidebar/></div>
                    <div className='column-right'><TileContainer products={this.products} /></div>
                </div>
            </div>
        )
    }
}



export default Catalogue