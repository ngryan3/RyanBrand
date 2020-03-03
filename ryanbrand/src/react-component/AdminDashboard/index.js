import React from 'react';
import UserTable from './UserTable/UserTable.js';
import UserForm from './UserForm'
//import { addUser } from "../test.js";
import "./index.css"
import ProductTable from './ProductTable'
import ee from "../../images/bag.png" 
import placeholder from "../../images/placeholder.png"
import ProductForm from "./ProductForm"
import NavigationBar from "../NavigationBar";


class AdminView extends React.Component {
    constructor(props) {    
        super(props)
        this.k = new Date().toLocaleString()
    }

    state = {
        users: [
            {name: 'kek', email:"hello@spam.com", joined:new Date().toLocaleString()},
            {name: 'ryan ng', email:"goodbye@gmail.ce", joined:new Date().toLocaleString()}
        ],
        products: [
            {name: "a backpack", price:"20.00", image: ee}
        ],
        userName:"",
        productName:"",
        productPrice:"",
        userEmail: "",
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

    fune(inp) {
        
        alert(inp +  ", user not added")
    }

    addUser = component => {
        //e.preventDefault();
        
        const lst = component.state.users;
        for (let i = 0; i < lst.length; i++) {
            if (lst[i].email == component.state.userEmail) {
                this.fune("dupe user")
                return
            }
        }

        if(component.state.userName == "" || component.state.userEmail == "") {
            this.fune("empty name or empty email")
            return
        }
        const user = {
            name:component.state.userName,
            email: component.state.userEmail,
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
        for (let i = 0; i < lst.length; i++) {
            if (lst[i].name == component.state.productName) {
                this.fune("dupe product " + lst[i].name)
                return
            }
        }

        if(component.state.productName == "" || component.state.productPrice == "") {
            this.fune("empty name or empty price")
            return
        }

        const product = {
            name:component.state.productName,
            price: component.state.productPrice,
            image: placeholder
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
            <div class="MainTab">
            <UserForm 
                userName={this.state.userName}
                userEmail={this.state.userEmail}
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
            <div class="MainTab">
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
                <NavigationBar/>
                <button class="tabs" onClick={() => this.switchTab(0)}>User List</button>
                <button class="tabs" onClick={() => this.switchTab(1)}>Product List</button>
                {this.state.active ?  this.productse(): this.returner()}
            </div>

        )
    }
}

export default AdminView;