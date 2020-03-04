import React from "react";
import "./styles.css";
import { withRouter } from 'react-router-dom';
import NavigationBar from "../NavigationBar";
import ItemList from "./ItemList";


class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 50,
            cart: [
                { name: "Product 1", quantity: 1, price: 10 },
                { name: "Product 2", quantity: 3, price: 10},
                { name: "Product 3", quantity: 2, price: 20 },
                { name: "Product 4", quantity: 1, price: 10 },
            ]
        };
        this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    }


    handleCheckoutClick() {
        window.location.href = './checkout'
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="productList">
                    <div className="column left">
                        <div className="myCart"> My Cart</div>
                        <ItemList cart={this.state.cart} cartComponent={this}/>
                    </div>
                    <div className="column right">
                        <div className="priceText">Total: ${this.state.total}</div>
                        <button onClick={this.handleCheckoutClick}>Proceed To Checkout</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(Cart)