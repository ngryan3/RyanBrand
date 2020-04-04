import React from "react";
import "./styles.css";
import { withRouter } from 'react-router-dom';
import NavigationBar from "../NavigationBar";
import ItemList from "./ItemList";
import {getTotal} from "../../actions/cart";


class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        };
        this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
        this.props.history.push("/cart");
    }

    handleCheckoutClick() {
        window.location.href = './checkout'
    }

    componentDidMount() {
        getTotal(this, this.props.app)
    }


    render() {
        const { app } = this.props;
        return (
            <div>
                <NavigationBar app={app}/>
                <div className="productList">
                    <div className="column left">
                        <div className="myCart"> My Cart</div>
                        <ItemList app={app} cart={this}/>
                    </div>
                    <div className="column right">
                        <div className="priceText">Total: {this.state.total}</div>
                        <button onClick={this.handleCheckoutClick}>Proceed To Checkout</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(Cart)