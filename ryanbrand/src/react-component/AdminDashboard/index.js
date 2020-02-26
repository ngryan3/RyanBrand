import React from 'react';
import UserTable from '../UserTable/UserTable.js';
class AdminView extends React.Component {
    constructor(props) {
        super(props)
        this.k = new Date().toLocaleString()
        this.state = {
            users: [
                {name: 'kek', joined:this.k.toLocaleString()},
                {name: 'ryan ng', joined:this.k.toLocaleString()}
            ]
        }
    }

    render() {
        return(
        <div>
            <table>
                <UserTable users={this.state.users} component={this}></UserTable>
            </table>
            
        </div>
        )
    }
}

export default AdminView;