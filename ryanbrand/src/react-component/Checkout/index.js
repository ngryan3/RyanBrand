import React from 'react';

import NavigationBar from "../NavigationBar";
import { withRouter } from 'react-router-dom';

class Checkout extends React.Component {
    render() {
        console.log(this.props.history)
        return(
            <NavigationBar />

        )
    }
}

export default withRouter(Checkout);