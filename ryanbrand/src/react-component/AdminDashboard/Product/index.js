import React from 'react';
import '../User/index.css'
import {removeProduct} from "../../../actions/product";

class Product extends React.Component {
    
    fun = () => {
        alert("jello") 
        //e.preventDefault();

    }

    
    render() {
        const {product, list} = this.props;
        console.log(product, list)

        return(
        <div class="roew">
        <tr >
            <td class="first">
                {product.name}
            </td>
            <td class="second">
                {product.price}
            </td>
            <td class="third">
                <img src={product.image} class="productImage" alt="failed to load image"/>
            </td>
            <td class="third">
                <button onClick={() => removeProduct(list, product)}>remove</button>
            </td>
            <td class="third">
                <button onClick={() => this.fun()}>edit</button>
            </td>            
        </tr>
        </div>
        )
    }
}

export default Product;