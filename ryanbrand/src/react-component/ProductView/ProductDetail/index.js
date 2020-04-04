import React from "react";
import './styles.css';
import Quantity from "../Quantity";
import { withRouter } from 'react-router-dom';


class ProductDetail extends React.Component {
    render() {
        const { product, app } = this.props
        return (
            <div className="productDetailContainer">
                <div className="productTitle">
                    {product.name}
                </div>
                <div className="productDescription">
                    {product.description}
                </div>
                <div className="productPrice">
                    {"$" + product.price}
                </div>
                <div className="productDescription">
                    Quantity:
                </div>
                <Quantity detail={ product } app={app}/>
            </div>
        )
    }

}

export default withRouter(ProductDetail);