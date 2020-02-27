import React from "react";
import './styles.css';
import Quantity from "../Quantity";
import { withRouter } from 'react-router-dom';


class ProductDetail extends React.Component {
    render() {
        console.log(this.state)
        const product = this.props.history.location.state
        return (
            <div className="productDetailContainer">
                <div className="productTitle">
                    {product.name}
                </div>
                <div className="productDescription">
                    {product.description}
                </div>
                <div className="productPrice">
                    {product.price}
                </div>
                <div className="productDescription">
                    Quantity:
                </div>
                <Quantity/>
            </div>
        )
    }

}

export default withRouter(ProductDetail);