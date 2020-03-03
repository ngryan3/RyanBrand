import React from 'react';

import NavigationBar from "../NavigationBar";
import { withRouter } from 'react-router-dom';

class Checkout extends React.Component {
    render() {
        return(
            <div>
                <NavigationBar />

            </div>

        )
    }
}

export default withRouter(Checkout);