import React from 'react';
import '../UserTable/index.css';
import Product from "../Product";
import { uid } from "react-uid";


class ProductTable extends React.Component {



    render() {
        const {products, component} = this.props;
        return(
        <div>
            <tr>
                <th class="first">Product Name</th>
                <th class="second">Price</th>
                <th class="third">image</th>
                <th class="third">Remove?</th>
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