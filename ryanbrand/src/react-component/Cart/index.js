import React from "react";
import "./styles.css";
import { withRouter } from 'react-router-dom';
import NavigationBar from "../NavigationBar";
import ItemList from "./ItemList";


class Cart extends React.Component {
    state = {
      cart: [
          { name: "Product 1", quantity: 1, price: 10 },
          { name: "Product 2", quantity: 3, price: 10},
          { name: "Product 3", quantity: 2, price: 20 },
          { name: "Product 4", quantity: 1, price: 10 },
      ]  
    };
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
                        <div className="priceText">Total: $50</div>
                        <button>Proceed To Checkout</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(Cart)