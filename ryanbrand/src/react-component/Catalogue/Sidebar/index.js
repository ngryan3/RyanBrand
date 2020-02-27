import React from "react"
import { Link } from "react-router-dom"
import './styles.css'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <h1 className>Categories</h1>
                <li>
                    <Link className="link">Ryan's Recs</Link>
                </li>
                <li>
                    <Link className="link">Food</Link>
                </li>
                <li>
                    <Link className="link">Weights</Link>
                </li>
                <li>
                    <Link className="link">Services</Link>
                </li>
            </div>
        )
    }
}

export default Sidebar