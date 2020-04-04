import React from "react";
import './styles.css';
import { withRouter } from 'react-router-dom';
import { addToCartClick } from "../../../actions/cart";
import { Rating } from "@material-ui/lab"
import { addProductRating } from "../../../actions/product";


class Quantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quantity: 1, currentUser: null, rating: 0 };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    increment() {
        this.setState({ quantity: this.state.quantity + 1 });
    };

    decrement() {
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1});
        }
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;

        this.setState({
            ["rating"]: value
        });
        addProductRating(this.props.detail, this)
    };


    render() {
        const { detail, app } = this.props;
        console.log(detail)
        return (
            <div className="quantityContainer">
                <div>
                    <button className="quantityButtonLeft" onClick={ this.decrement }>-</button>
                    <input className="quantityDisplay" value={ this.state.quantity }/>
                    <button className="quantityButtonRight" onClick={ this.increment }>+</button>
                </div>
                <div>
                    <Rating value={this.state.rating} onChange={this.handleInputChange} />
                </div>
                    <div className="buttonContainer">
                        <button className="addToCartButton" onClick={() => addToCartClick(detail, this.state.quantity, app)}>Add to Cart</button>
                    </div>
            </div>
        )
    }

}

export default withRouter(Quantity)