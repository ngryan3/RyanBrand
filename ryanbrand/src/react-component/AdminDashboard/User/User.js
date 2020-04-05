import React from 'react';
import { removeUser } from "./../../../actions/user";

class User extends React.Component {
    
    // fun = () => {
    //     alert("jello") 
    //     //e.preventDefault();

    // }

    // remover = (component, user) => {
    //     const filtere = component.state.users.filter(u => {
    //         return u !== user
    //     })

    //     component.setState({
    //         users: filtere
    //     })
    // }
    
    render() {
        const {user, component} = this.props;
        console.log(user)

        return(
        <div class="roew">
        <tr >
            <td class="first">
                {user.username}
            </td>
            <td class="third">
                <button onClick={() => removeUser(component, user) }>remove</button>
            </td>            
        </tr>
        </div>
        )
    }
}

export default User;