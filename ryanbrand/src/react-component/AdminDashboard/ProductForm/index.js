import React from 'react';
import { addProduct } from "../../../actions/product";

class ProductForm extends React.Component {
    state = {
        name: "",
        price: 0,
        description: "",
        category: ""
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        return(
        <div>
            <input type="text" name="name" placeholder="Name" onChange={this.handleInputChange}/>
            <input type="text" name="price" placeholder="Price" onChange={this.handleInputChange}/>
            <input type="text" name="description" placeholder="Description"  onChange={this.handleInputChange}/>
            <input type="text" name="category" placeholder="Category" onChange={this.handleInputChange}/>
            <button onClick={() => addProduct(this)}>Add product</button>
            
        </div>
        )
    }
}

export default ProductForm;