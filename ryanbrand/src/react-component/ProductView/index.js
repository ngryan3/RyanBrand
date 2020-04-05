import React from 'react';
import "./styles.css"
import NavigationBar from "../NavigationBar";
import ProductDetail from "./ProductDetail";
import logo from '../../logo.svg';
import {getSpecificProduct} from "../../actions/product";
import { getImages } from "../../actions/image";

class ProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            id: this.props.match.params.id,
            name: "",
            price: 0,
            description: "",
            image_url: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        getSpecificProduct(this)
        getImages(this, this.props.location.state);
        console.log(this.state)
    }

    handleInputChange(event) {
        this.setState({quantity: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        alert(this.state.quantity + ' of the products were added to your cart');
    }


    render() {
        const { app } = this.props;
        return(
            <body>
                <NavigationBar app={app}/>
                <div className="product">
                    <div className="column left">
                        <img  src={this.state.image_url}/>
                    </div>
                    <div className="column right">
                        <ProductDetail product={this.state} app={app}/>
                    </div>
                </div>
            </body>

        );
    }
}
export default ProductView;