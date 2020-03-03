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