import React, { useState } from 'react';
import '../User/index.css';
import { editProduct } from '../../../actions/product';
import {removeProduct} from "../../../actions/product";
import { getImages } from "../../../actions/image";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editor: false, 
            product: this.props.product,
            image_url: ""
        }
    }  

    edit = () => {
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

    componentDidMount() {
        getImages(this, this.state.product);
     }
    
    render() {
        // console.log(product, component)
        const list  = this.props.list
        return(
        <div class="roew">
        <tr>
            <td class="medium product-cell">
                <input class="productInput" name="name" value={this.state.product.name} onChange={this.handleInputChange} disabled={true}/>
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
                <img src={this.state.image_url} class="productImage" alt="failed to load image"/>
            </td>
            <td class="small product-cell">
                <button class="btn-product-cell" onClick={() => this.state.editor ? this.edit() : removeProduct(list, this.state.product)}>{this.state.editor ? 'Submit' : 'Remove'}</button>

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