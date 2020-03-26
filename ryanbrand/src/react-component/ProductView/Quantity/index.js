import React from "react";
import './styles.css';
import { withRouter } from 'react-router-dom';
import { addToCartClick } from "../../../actions/cart";


class Quantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quantity: 1, currentUser: null };

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
        const { detail, app } = this.props;
        console.log(detail, app)
        return (
            <div className="quantityContainer">
                <div>
                    <button className="quantityButtonLeft" onClick={ this.decrement }>-</button>
                    <input className="quantityDisplay" value={ this.state.quantity }/>
                    <button className="quantityButtonRight" onClick={ this.increment }>+</button>
                </div>
                    <div className="buttonContainer">
                        <button className="addToCartButton" onClick={addToCartClick.bind(this, detail,
                            app)}>Add to Cart</button>
                    </div>

            </div>
        )
    }

}

export default withRouter(Quantity)