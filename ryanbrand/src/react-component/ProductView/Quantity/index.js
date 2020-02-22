import React from "react";
import './styles.css';


class Quantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quantity: 1 };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event){
        alert(this.state.quantity + ' of the products were added to your cart');
        event.preventDefault();
    }

    render() {
        return (
            <div className="quantityContainer">
                <div>
                    <button className="quantityButtonLeft" onClick={ this.decrement }>-</button>
                    <input className="quantityDisplay" value={ this.state.quantity }/>
                    <button className="quantityButtonRight" onClick={ this.increment }>+</button>
                </div>
                <form onSubmit={ this.handleSubmit }>
                    <div className="buttonContainer">
                        <button className="addToCartButton" type="submit">Add to Cart</button>
                        <button className="checkoutButton" type="submit">Proceed to Checkout</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default Quantity;