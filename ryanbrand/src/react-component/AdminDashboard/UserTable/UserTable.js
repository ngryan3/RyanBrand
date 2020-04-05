import React from 'react';
import './index.css';
import User from "../User/User.js";
import { getAllUsers } from "./../../../actions/user";


class UserTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        getAllUsers(this)
    }
    render() {
        const {component} = this.props.component;
        return(
        <div>
            <tr>
                <th class="first heade" >User</th>
                <th class="third heade">Remove?</th>
            </tr>
            {this.state.data.map(user => (
                <User
                    key={user._id}
                    user = {user}
                    component = {this}>
                </User>
            ))
            }
        </div>
        )
    }
}

export default UserTable;