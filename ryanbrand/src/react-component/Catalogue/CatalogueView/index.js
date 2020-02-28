import React from "react";
import './styles.css';
import Tile from '../Tile'

class TileContainer extends React.Component {

    render() {
        const { products, userCart } = this.props;
        console.log(this.props)
        return (
            <div className="tileContainer">
                {products.map(product => (
                    <Tile product={product} userCart={userCart} />
                ))}
            </div>
        )
    }
}
export default TileContainer

