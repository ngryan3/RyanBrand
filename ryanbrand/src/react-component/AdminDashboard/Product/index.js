import React, { useState } from 'react';
import '../User/index.css'

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editor: false, 
            product: this.props.product
        }
    }  
    
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

    edit = () => {
        console.log('editing!')    
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            product: {[name]: value}
        });
        console.log(this.state)
    };

    toggleEditor() {
        this.setState({editor : !this.state.editor})
    }

    
    render() {
        const {product, component} = this.props;

        return(
        <div class="roew">
        <tr>
            <td class="first">
                <input class="productInput" value={this.state.product.name} onChange={this.handleInputChange} disabled={!this.state.editor}/>
            </td>
            <td class="second">
                {product.price}
            </td>
            <td class="clicks">
                {product.clicks}
            </td>
            <td class="third">
                <img src={product.image} class="productImage" alt="failed to load image"></img>
            </td>
            <td class="third">
                <button onClick={this.state.editor ? this.edit() : this.remover.bind(this, component, product)}>{this.state.editor ? 'Submit' : 'Remove'}</button>
            </td>
            <td class="third">
                <button onClick={() => this.toggleEditor()}>{this.state.editor ? 'Cancel' : 'Edit'}</button>
            </td>            
        </tr>
        </div>
        )
    }
}

// class ProductEditor extends React.Children {
//     render() {
//         return (
//             <div class="roew">
//         <tr >
//             <td class="first">
//                 {product.name}
//             </td>
//             <td class="second">
//                 {product.price}
//             </td>
//             <td class="clicks">
//                 {product.description}
//             </td>
//             <td class="third">
//                 <img src={product.image} class="productImage" alt="failed to load image"></img>
//             </td>
//             <td class="third">
//                 <button onClick={this.remover.bind(this, component, product)}>Cancel</button>
//             </td>
//             <td class="third">
//                 <button onClick={() => this.enableEditor()}>Submit</button>
//             </td>            
//         </tr>
//         </div>
//         )
//     }
// }

export default Product;