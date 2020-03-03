import React from 'react';
import './index.css';
import User from "../User/User.js";
import { uid } from "react-uid";


class UserTable extends React.Component {



    render() {
        const {users, component} = this.props;
        return(
        <div>
            <tr>
                <th class="first heade" >User</th>
                <th class="email heade">Email</th>
                <th class="second heade">Date Joined</th>
                <th class="third heade">Remove?</th>
            </tr>
            {users.map(user => (
                <User
                key={uid(
                    user
                  )}
                  user = {user}
                  component = {component}>
                    
                </User>
            ))
            }
        </div>
        )
    }
}

export default UserTable;