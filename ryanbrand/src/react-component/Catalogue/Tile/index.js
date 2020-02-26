import React from "react";
import './styles.css';


class Tile extends React.Component {
    render() {
        const product = this.props
        return(
            <div className="tile">
                {product.name}
            </div>
        );
    }
}

export default Tile