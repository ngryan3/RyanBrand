import React from 'react';
import Tab from'./Tab'
import './index.css'
class Tabs extends React.Component {
    
    render() {
        const {
            switcher,
            component
        } = this.props;
        return(
            <div>
                <Tab name="Users" switcher={switcher} component={component} num={0}></Tab>
                <Tab name="Products" switcher={switcher} component={component} num={1}></Tab>
                <Tab name="Stats" switcher={switcher} component={component} num={2}></Tab>
            </div>
        )
    }
}

export default Tabs;