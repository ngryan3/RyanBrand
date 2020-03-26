import React from "react";
import './styles.css';
import { withRouter } from 'react-router-dom';
import productImg from './product_placeholder.png';



class Tile extends React.Component {
    handleClick = () => {
        // displays product view for item
        console.log(this.props);
        this.props.history.push({
            pathname: '/product' + '/' + this.props.product._id,
            state: this.props.product
        })
    };


    render() {
        const { product } = this.props;

        return(
            <div className="tile" onClick={this.handleClick}>
                <div className="tileText">{product.name}</div>
                <img src={productImg} alt={"productImg"}/>
            </div>
        );
    }
}


export default withRouter(Tile) 