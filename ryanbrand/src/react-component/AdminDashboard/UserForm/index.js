import React from 'react';
import { addUser } from '../../../actions/user';
class UserForm extends React.Component {
    state = {
        username: "",
        password: ""
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        return(
        <div>
            <input type="text" name="username" placeholder="Username" onChange={this.handleInputChange}></input>
            <input type="text" name="password" placeholder="Password" onChange={this.handleInputChange}></input>
            <button onClick={() => addUser(this)}>Add user</button>
        </div>
        )
    }
}

export default UserForm;