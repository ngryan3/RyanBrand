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
                <th class="first heade">Product Name</th>
                <th class="second heade">Price</th>
                <th class="third heade">image</th>
                <th class="third heade">Remove?</th>
                <th className="third heade">Edit?</th>

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