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
        const {component} = this.props;
        return(
        <div>
            <tr>
                <th class="first heade">Product Name</th>
                <th class="second heade">Price</th>
                <th class="clicks heade">Clicks</th>
                <th class="third heade">image</th>
                <th class="third heade">Remove?</th>
            </tr>
            {products.map(product => (
                <Product
                key={uid(
                    product
                  )}
                  product = {product}
                  component = {component}>
                    
                </Product>
            ))
            }
        </div>
        )
    }
}

export default ProductTable;