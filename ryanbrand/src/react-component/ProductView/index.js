import React from 'react';
import "./styles.css"
import NavigationBar from "../NavigationBar";
import ProductDetail from "./ProductDetail";
import logo from '../../logo.svg'

class ProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        this.setState({quantity: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        alert(this.state.quantity + ' of the products were added to your cart');
    }


    render() {
        const { items } =this.props;
        return(
            <body>
                <NavigationBar/>
                <div className="product">
                    <div className="column left">
                        <img  src={logo}/>
                    </div>
                    <div className="column right">
                        <ProductDetail/>
                    </div>
                </div>
            </body>

        );
    }
}
export default ProductView;