import React from 'react';
import UserTable from '../UserTable/UserTable.js';
import UserForm from '../UserForm/'
//import { addUser } from "../test.js";

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
        userName:""
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

    render() {
        return(
        <div>
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
}

export default AdminView;