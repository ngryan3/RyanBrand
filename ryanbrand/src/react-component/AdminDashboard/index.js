import React from 'react';
import UserTable from '../UserTable/UserTable.js';
import UserForm from '../UserForm/'
//import { addUser } from "../test.js";
import "./index.css"
import ProductTable from '../ProductTable/'
import ee from "../../images/bag.png" 

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