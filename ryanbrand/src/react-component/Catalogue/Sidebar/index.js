import React from "react"
import { Link } from "react-router-dom"
import { getProductByCategory, getAllProducts } from './../../../actions/product'
import './styles.css'

class Sidebar extends React.Component {

    render() {
        const list = this.props.list
        return (
            <div className="sidebar">
                <h1 className>Categories</h1>
                <li>
                    <Link className="link" onClick={() => getProductByCategory(list, "Ryan's Recs")}>Ryan's Recs</Link>
                </li>
                <li>
                    <Link className="link" onClick={() => getAllProducts(list)}>All Products</Link>
                </li>
                <li>
                    <Link className="link" onClick={() => getProductByCategory(list, "Food")}>Food</Link>
                </li>
                <li>
                    <Link className="link" onClick={() => getProductByCategory(list, "Fitness")}>Fitness</Link>
                </li>
                <li>
                    <Link className="link" onClick={() => getProductByCategory(list, "Games")}>Games</Link>
                </li>
            </div>
        )
    }
}
export default Sidebar