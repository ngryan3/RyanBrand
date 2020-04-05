import React from "react";
import './styles.css';
import { withRouter } from 'react-router-dom';
import productImg from './product_placeholder.png';
import { getImages } from "../../../actions/image";


class Tile extends React.Component {
    state = {
        image_url: "",
        isLoaded: false
    };

    handleClick = () => {
        // displays product view for item
        console.log(this.props);
        this.props.history.push({
            pathname: '/product' + '/' + this.props.product._id,
            state: this.props.product
        })
    };

    componentDidMount() {
       getImages(this, this.props.product);
    }


    render() {
        const { product } = this.props;
        let image = []
        if (this.state.isLoaded === true){
            image = this.state.image_url
        }
        console.log(this.state.image_url)
        return(
            <div className="tile" onClick={this.handleClick}>
                <div className="tileText">{product.name}</div>
                <img src={this.state.image_url}  alt={"productImg"}/>
            </div>
        );
    }
}


export default withRouter(Tile) 