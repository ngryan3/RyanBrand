import React from "react";
import ProductDetail from "../../ProductView/ProductDetail"
import './styles.css';
import { withRouter } from 'react-router-dom';



class Tile extends React.Component {
    handleClick = () => {
        // displays product view for item
        console.log(this.props.product)
        this.props.history.push({
            pathname: '/product',
            state: this.props.product
        })
    }


    render() {
        const { product } = this.props;

        return(
            <div className="tile" onClick={this.handleClick}>
                {product.name}
            </div>
        );
    }
}


export default withRouter(Tile) 