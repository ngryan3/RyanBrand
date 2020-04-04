import React from 'react';
import '../UserTable/index.css';
import Product from "../Product";
import { uid } from "react-uid";
import { getAllProducts } from "./../../../actions/product"
const log = console.log

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        getAllProducts(this)
        log(this.state)
    }

    render() {
        let products = []
        if (this.state.isLoaded === true){
            products = this.state.data
        }
        return(
        <div>
            <tr>
                <th class="medium heade">Product Name</th>
                <th class="small heade">Price</th>
                <th class="big heade">Description</th>
                <th class="small heade">Category</th>
                <th class="small heade">Image</th>
                <th class="edit-header heade">Edit</th>


            </tr>
            {products.map(product => (
                <Product
                  product = {product}
                  list = {this}>
                </Product>
            ))
            }
        </div>
        )
    }
}

export default ProductTable;