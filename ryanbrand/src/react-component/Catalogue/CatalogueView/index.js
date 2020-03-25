import React from "react";
import './styles.css';
import Tile from '../Tile'
import { getAllProducts } from './../../../actions/product'
const log = console.log


class TileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        getAllProducts(this)
        log(this.state)
    }

    render() {
        let products = []
        if (this.state.isLoaded === true){
            products = this.state.data
        }
        console.log(products)
        return (
            <div className="tileContainer">
                {products.map(product => (
                    <Tile product={product} />
                ))}
            </div>
        )
    }
}
export default TileContainer

