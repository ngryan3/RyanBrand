import React from 'react';

class User extends React.Component {
    
    fun = () => {
        alert("jello") 
        //e.preventDefault();

    }

    remover = (component, user) => {
        const filtere = component.state.users.filter(u => {
            return u !== user
        })

        component.setState({
            users: filtere
        })
    }
    
    render() {
        const {user, component} = this.props;

        return(
        <div class="roew">
        <tr >
            <td class="first">
                {user.name}
            </td>
            <td class="second">
                {user.joined}
            </td>
            <td class="third">
                <button onClick={this.remover.bind(this, component, user)}>remove</button>
            </td>            
        </tr>
        </div>
        )
    }
}

export default User;