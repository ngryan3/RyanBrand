import React from 'react';
import UserTable from '../UserTable/UserTable.js';
import UserForm from '../UserForm/'
//import { addUser } from "../test.js";
import "./index.css"
import ProductTable from '../ProductTable/'
import ee from "../../images/bag.png" 
import ProductForm from "../ProductForm"

class AdminView extends React.Component {
    constructor(props) {    
        super(props)
        this.k = new Date().toLocaleString()
    }

    state = {
        users: [
            {name: 'kek', joined:new Date().toLocaleString()},
            {name: 'ryan ng', joined:new Date().toLocaleString()}
        ],
        products: [
            {name: "a backpack", price:"20.00", image: ee}
        ],
        userName:"",
        productName:"",
        productPrice:"",
        active: 0
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        //console.log(event.target)
        //console.log(event)
        this.setState({
            [name]:value
        });
    };

    addUser = component => {
        //e.preventDefault();
        const lst = component.state.users;

        const user = {
            name:component.state.userName,
            joined: new Date().toLocaleString()
        }

        lst.push(user)
        component.setState({
            users:lst
        });
    }

    addProduct = component => {
        //e.preventDefault();
        const lst = component.state.products;

        const product = {
            name:component.state.productName,
            price: component.state.productPrice,
            img: null
        }

        lst.push(product)
        component.setState({
            products:lst
        });
    }

    switchTab = (num) => {
        this.setState({
            active: num
        })
        console.log(this.state.active)
    }

    returner =() =>{
        return(
            <div class="lel">
            <UserForm 
                userName={this.state.userName}
                handleChange={this.handleChange}
                addUser={() => this.addUser(this)}></UserForm>
            <table>
                <UserTable users={this.state.users} component={this}></UserTable>
            </table>
            
        </div>
        )
    }

    productse = () => {
        return(
            <div class="lel">
            <ProductForm 
                productName={this.state.productName}
                productPrice={this.state.productPrice}
                handleChange={this.handleChange}
                addUser={() => this.addProduct(this)}></ProductForm>
            <table>
                <ProductTable products={this.state.products} component={this}></ProductTable>
            </table>
            
        </div>
        )
    }
    render() {
        return(
            <div>
                <button onClick={() => this.switchTab(0)}>User List</button>
                <button onClick={() => this.switchTab(1)}>Product List</button>
                {this.state.active ?  this.productse(): this.returner()}
            </div>

        )
    }
}

export default AdminView;