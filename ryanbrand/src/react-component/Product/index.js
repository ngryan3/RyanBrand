import React from 'react';
import '../User/index.css'

class Product extends React.Component {
    
    fun = () => {
        alert("jello") 
        //e.preventDefault();

    }

    remover = (component, product) => {
        const filtere = component.state.products.filter(p => {
            return p !== product
        })

        component.setState({
            products: filtere
        })
    }
    
    render() {
        const {product, component} = this.props;

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
                <img src={product.image} class="productImage"></img>
            </td>
            <td class="third">
                <button onClick={this.remover.bind(this, component, product)}>remove</button>
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