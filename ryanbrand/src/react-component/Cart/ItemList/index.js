import React from "react";
import "./styles.css";
import Item from "../Item";


class ItemList extends React.Component {
    render() {
        const { cart, cartComponent } = this.props;
        console.log(cart);
        return (
            <div className="itemContainer">
                {cart.map(item => (
                    <Item item={item} cartComponent={cartComponent}/>
                ))}
            </div>
        )
    }
}

export default ItemList;