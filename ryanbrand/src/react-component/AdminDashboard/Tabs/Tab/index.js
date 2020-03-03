import React from 'react';
class Tab extends React.Component {
    
    render() {
        const {
            name,
            switcher,
            num,
            component
        } = this.props;
        console.log("hellO " + name)
        return(
        <button class="tabs" onClick={() => switcher(num, component)}>{name}</button>
        )
    }
}

export default Tab;