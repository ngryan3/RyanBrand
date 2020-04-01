import React from "react";
import "./styles.css";
import Item from "../Item";
import { viewCart } from "../../../actions/cart";

const log = console.log;

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        viewCart(this, this.props.app);
    }

    render() {
        let cartList = [];
        if (this.state.isLoaded === true){
            cartList = this.state.data
        }
        const { app, cart } = this.props;
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove?</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartList.map(item => (
                        <Item item={item} list={this} app={app} cart={cart}/>)
                    )}
                    </tbody>
                </table>
            </div>

        )
    }
}

export default ItemList;