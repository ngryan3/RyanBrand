import React from "react";
import './styles.css';
import { withRouter } from 'react-router-dom';


class Quantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quantity: 1 };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleProceedToCheckout = this.handleProceedToCheckout.bind(this);
    }

    increment() {
        this.setState({ quantity: this.state.quantity + 1 });
        console.log(this.state.quantity)
    };

    decrement() {
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1});
        }
        console.log(this.state.quantity)
    };

    handleAddToCart(event) {
        alert(this.state.quantity + ' of the products were added to your cart');
        event.preventDefault();
    }

    handleProceedToCheckout(event) {
        alert('Proceeding to checkout with' + this.state.quantity + ' products');
        this.props.detail['quantity'] = this.state.quantity
        this.props.history.push({
            pathname: '/checkout',
            state: this.props.detail
        });
        event.preventDefault();
    }

    render() {
        console.log(this.props.detail)
        return (
            <div className="quantityContainer">
                <div>
                    <button className="quantityButtonLeft" onClick={ this.decrement }>-</button>
                    <input className="quantityDisplay" value={ this.state.quantity }/>
                    <button className="quantityButtonRight" onClick={ this.increment }>+</button>
                </div>
                    <div className="buttonContainer">
                        <button className="addToCartButton" onClick={ this.handleAddToCart }>Add to Cart</button>
                        <button className="checkoutButton" onClick={ this.handleProceedToCheckout }>Proceed to Checkout</button>
                    </div>

            </div>
        )
    }

}

export default withRouter(Quantity)