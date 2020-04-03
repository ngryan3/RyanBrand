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
import MostPopular from "./MostPopular"
import Ratings from "./Ratings"
import Title from "./Title"
import Tabs from "./Tabs"

class AdminView extends React.Component {
    constructor(props) {    
        super(props)
        this.k = new Date().toLocaleString()
        this.props.history.push("/admin")
    }

    state = {
        users: [
            {name: 'kek', email:"hello@spam.com", joined:new Date().toLocaleString()},
            {name: 'ryan ng', email:"goodbye@gmail.ce", joined:new Date().toLocaleString()}
        ],
        products: [
            {name: "a backpack", price:"20.00", clicks:0, image: ee}
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
            if (lst[i].email === component.state.userEmail) {
                this.fune("dupe user")
                return
            }
        }

        if(component.state.userName === "" || component.state.userEmail === "") {
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
            if (lst[i].name === component.state.productName) {
                this.fune("dupe product " + lst[i].name)
                return
            }
        }

        if(component.state.productName === "" || component.state.productPrice === "") {
            this.fune("empty name or empty price")
            return
        }

        const product = {
            name:component.state.productName,
            price: component.state.productPrice,
            image: placeholder,
            clicks: 0
        }

        lst.push(product)
        component.setState({
            products:lst
        });
    }

    switchTab = (num, component) => {
        component.setState({
            active: num
        })
        console.log(component.state.active)
    }

    returner =() =>{
        return(
            <div class="MainTab">
            <Title title="User List"/>
            <UserForm 
                userName={this.state.userName}
                userEmail={this.state.userEmail}
                handleChange={this.handleChange}
                addUser={() => this.addUser(this)}/>
            <table class = "displayTable">
                <UserTable users={this.state.users} component={this}/>
            </table>
            
        </div>
        )
    }

    productse = () => {
        return(
            <div class="MainTab">
            <Title title="Products List"/>
            <ProductForm/>
            <table class = "displayTable">
                <ProductTable products={this.state.products}/>
            </table>
            
        </div>
        )
    }

    stats = () => {
        return(
            <div class="MainTab">
                <MostPopular component={this}/>
                <Ratings/>
            </div>
        )
    }
    render() {
        const { app } = this.props;
        return(
            <div>
                <NavigationBar app={app}/>
                <Tabs switcher={this.switchTab} component={this}/>

                {this.state.active === 1 ?  this.productse(): this.state.active === 2? this.stats():this.returner()}
            </div>

        )
    }
}

export default AdminView;