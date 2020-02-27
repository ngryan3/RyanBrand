import React from 'react';
class ProductForm extends React.Component {


    
    render() {
        const {
            productName,
            productPrice,
            handleChange,
            addUser
        } = this.props;

        return(
        <div>
            <input type="text" name="productName" placeholder="Name" value={productName} onChange={handleChange}></input>
            <input type="text" name="productPrice" placeholder="Price" value={productPrice} onChange={handleChange}></input>
            <button onClick={addUser}>Add product</button>
            
        </div>
        )
    }
}

export default ProductForm;