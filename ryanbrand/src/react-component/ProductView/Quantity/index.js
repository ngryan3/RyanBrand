import React from "react";
import './styles.css';
import { withRouter } from 'react-router-dom';
import { addToCart } from "../../../actions/cart";


class Quantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quantity: 1 };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
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


    render() {
        console.log(this.props);
        return (
            <div className="quantityContainer">
                <div>
                    <button className="quantityButtonLeft" onClick={ this.decrement }>-</button>
                    <input className="quantityDisplay" value={ this.state.quantity }/>
                    <button className="quantityButtonRight" onClick={ this.increment }>+</button>
                </div>
                    <div className="buttonContainer">
                        <button className="addToCartButton" onClick={ () => addToCart(this) }>Add to Cart</button>
                    </div>

            </div>
        )
    }

}

export default withRouter(Quantity)