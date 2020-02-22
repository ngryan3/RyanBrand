import React from "react";
import './styles.css';
import Quantity from "../Quantity";


class ProductDetail extends React.Component {
    render() {
        return (
            <div className="productDetailContainer">
                <div className="productTitle">
                Product Title
                </div>
                <div className="productDescription">
                    Product description goes here
                </div>
                <div className="productPrice">
                    $199.99
                </div>
                <div className="productDescription">
                    Quantity:
                </div>
                <Quantity/>
            </div>
        )
    }

}

export default ProductDetail;