import React from 'react';

import NavigationBar from "../NavigationBar";

class Checkout extends React.Component {
    render() {
        const { items } =this.props;
        return(
            <NavigationBar />

        )
    }
}
export default Checkout;