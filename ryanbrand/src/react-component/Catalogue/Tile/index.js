import React from "react";
import './styles.css';


class Tile extends React.Component {
    displayProduct() {
        // displays product view for item
    }
    render() {
        const tile = this.props
        console.log(tile)
        console.log(tile.product)
        return(
            <div className="tile">
                {tile.product.name}
            </div>
        );
    }
}

export default Tile