import React from 'react';
import "./styles.css"
import { withRouter } from 'react-router-dom';
import { checkFields } from "../../../actions/checkout";

class CheckoutForm extends React.Component {
    render() {
        const {
            fullName,
            email,
            address,
            city,
            postalCode,
            nameOnCard,
            cardNum,
            expMonth,
            expYear,
            cvv,
            handleInputChange,
            checkoutComponent
        } = this.props;
        return(
            <div>
                <div className="checkoutContainer">
                    <div className="column">
                        <h3>Billing Address</h3>
                        <label> Full Name:</label>
                        <input name="fullName" value={fullName} onChange={handleInputChange}/>
                        <label> Email:</label>
                        <input name="email" value={email} onChange={handleInputChange}/>
                        <label> Address:</label>
                        <input name="address" value={address} onChange={handleInputChange}/>
                        <label> City:</label>
                        <input name="city" value={city} onChange={handleInputChange}/>
                        <label> Postal Code:</label>
                        <input name="postalCode" value={postalCode} onChange={handleInputChange}/>
                    </div>
                    <div className="column">
                        <h3>Payment</h3>
                        <label> Name on Card:</label>
                        <input name="nameOnCard" value={nameOnCard} onChange={handleInputChange}/>
                        <label> Credit Card Number:</label>
                        <input name="cardNum" value={cardNum} onChange={handleInputChange}/>
                        <label> Exp Month:</label>
                        <input name="expMonth" value={expMonth} onChange={handleInputChange}/>
                        <label> Exp Year:</label>
                        <input name="expYear" value={expYear} onChange={handleInputChange}/>
                        <label> CVV:</label>
                        <input name="cvv" value={cvv} onChange={handleInputChange}/>
                    </div>
                    <button onClick={checkFields.bind(this, checkoutComponent)}>Confirm</button>
                </div>

            </div>

        )
    }
}

export default withRouter(CheckoutForm);