import React from 'react';

import NavigationBar from "../NavigationBar";
import CheckoutForm from "./CheckoutForm";
import "./styles.css"

import { withRouter } from 'react-router-dom';

class Checkout extends React.Component {
    state = {
        fullName: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
        nameOnCard: "",
        cardNum: "",
        expMonth: "",
        expYear: "",
        cvv: ""
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        return(
            <div>
                <NavigationBar />
                <CheckoutForm
                    fullName={this.state.fullName}
                    email={this.state.email}
                    address={this.state.address}
                    city={this.state.city}
                    zip={this.state.postalCode}
                    nameOnCard={this.state.nameOnCard}
                    cardNum={this.state.cardNum}
                    expMonth={this.state.expMonth}
                    expYear={this.state.expYear}
                    cvv={this.state.cvv}
                    handleInputChange={this.handleInputChange}
                    checkoutComponent={this.state}
                />
            </div>
        )
    }
}

export default withRouter(Checkout);