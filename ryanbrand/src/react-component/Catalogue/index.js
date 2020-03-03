import React from 'react';
import './styles.css';
import TileContainer from './CatalogueView/index'
import Sidebar from './Sidebar/index'
import NavigationBar from './../NavigationBar/index'

class Catalogue extends React.Component {
    state = {
        userName: "",
        userType: "",
        userCart: [],
        products: [
            {
                name: "Product1",
                id: 1,
                type: "Type1",
                description: "Something Ryan related",
                filename: "product_placeholder.jpg",
                price: 500
            },
            {
                name: "Product2",
                id: 2,
                type: "Type2",
                description: "Something Ryan related",
                filename: "product_placeholder.jpg",
                price: 400
            },
            {
                name: "Product2",
                id: 3,
                type: "Type3",
                description: "Something Ryan related",
                filename: "product_placeholder.jpg",
                price: 400
            },
            {
                name: "Product2",
                id: 4,
                type: "Type4",
                description: "Something Ryan related",
                filename: "product_placeholder.jpg",
                price: 400
            }
            , {
                name: "Product3",
                id: 5,
                type: "Type2",
                description: "Something Ryan related",
                filename: "product_placeholder.jpg",
                price: 400
            }
            , {
                name: "Product4",
                id: 6,
                type: "Type2",
                description: "Something Ryan related",
                filename: "product_placeholder.jpg",
                price: 400
            }
            , {
                name: "Product5",
                id: 7,
                type: "Type2",
                description: "Something Ryan related",
                filename: "product_placeholder.jpg",
                price: 400
            }
        ]

    };

    render() {
        return (
            <div>
                <NavigationBar />
                <div className="columns"> 
                    <div className='column-left'><Sidebar/></div>
                    <div className='column-right'><TileContainer products={this.state.products}/></div>
                </div>
            </div>
        )
    }
}



export default Catalogue