import React from 'react';
class UserForm extends React.Component {


    
    render() {
        const {
            userName,
            handleChange,
            addUser
        } = this.props;

        return(
        <div>
            <input type="text" name="userName" placeholder="Name" value={userName} onChange={handleChange}></input>
            <button onClick={addUser}>Add user</button>
            
        </div>
        )
    }
}

export default UserForm;