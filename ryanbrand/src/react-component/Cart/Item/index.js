import React from "react";
import "./styles.css";
import productImg from "../../Catalogue/Tile/product_placeholder.png";
import { removeItem } from "../../../actions/cart";

class Item extends React.Component {
    render() {
        const { item, list, app, cart } = this.props;
        return (
                <tr>
                    <td>
                        <img src={productImg}/>
                    </td>
                    <td className="itemText">
                        {item.name}
                    </td>
                    <td className="itemText">
                        {item.quantity}
                    </td>
                    <td className="itemText">
                        ${item.price}
                    </td>
                    <td className="buttonCenter">
                        <button onClick={() => removeItem(list, item, app, cart)}>remove</button>
                    </td>
                </tr>
        )
    }
}
export default Item