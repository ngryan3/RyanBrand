import React from "react";
import "./styles.css";
import productImg from "../../Catalogue/Tile/product_placeholder.png";
import { removeItem } from "../../../actions/cart";

class Item extends React.Component {
    render() {
        const { item, cartComponent } = this.props;
        return (
            <div className="item">
                <img src={productImg} />
                <div className="itemText">{item.name}</div>
                <div className="itemText">Quantity: {item.quantity}</div>
                <div className="itemText">Price: ${item.price}</div>
                <button onClick={removeItem.bind(this, cartComponent, item)}>Remove</button>
            </div>
        )
    }
}

export default Item