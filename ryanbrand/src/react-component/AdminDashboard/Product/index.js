import React, { useState } from 'react';
import '../User/index.css';
import { editProduct } from '../../../actions/product';
import {removeProduct} from "../../../actions/product";


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editor: false, 
            product: this.props.product
        }
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
        console.log(this.state.product)
        editProduct(this.state.product)
        this.toggleEditor()    
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value.trim();
        const name = target.name;

        if (name === "price"){
            if (!Number(value)){
                document.getElementsByName("price").value = this.state.product.price
                return;
            }
        }

        let product = this.state.product
        product[name] = value
        this.setState({product})
        console.log(this.state.product)
    };

    toggleEditor() {
        this.setState({editor : !this.state.editor})
    }

    
    render() {
        const {product, component} = this.props;
        console.log(product, component)

        return(
        <div class="roew">
        <tr>
            <td class="medium product-cell">
                <input class="productInput" name="name" value={this.state.product.name} onChange={this.handleInputChange} disabled={!this.state.editor}/>
            </td>
            <td class="small product-cell">
                <input class="productInput" name="price" value={this.state.product.price} onChange={this.handleInputChange} disabled={!this.state.editor}/>
            </td>
            <td class="big product-cell">
                <input class="productInput" name="description" value={this.state.product.description} onChange={this.handleInputChange} disabled={!this.state.editor}/>
            </td>
            <td class="small product-cell">
                <input class="productInput" name="category" value={this.state.product.category} onChange={this.handleInputChange} disabled={!this.state.editor}/>
            </td>
            <td class="small product-cell">
                <img src={product.image} class="productImage" alt="failed to load image"></img>
            </td>
            <td class="small product-cell">
                <button class="btn-product-cell" onClick={() => this.state.editor ? this.edit() : this.remover.bind(this, component, product)}>{this.state.editor ? 'Submit' : 'Remove'}</button>

            </td>
            <td class="small product-cell">
                <button class="btn-product-cell" onClick={() => this.toggleEditor()}>{this.state.editor ? 'Cancel' : 'Edit'}</button>
            </td>            
        </tr>
        </div>
        )
    }
}


export default Product;