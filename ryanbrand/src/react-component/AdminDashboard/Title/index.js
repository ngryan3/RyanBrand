import React from 'react';
import './index.css'
class Title extends React.Component {
    
    render() {
        const {
            title
        } = this.props;
        return(
        <div class="titleAdmin">
            {title}
        </div>
        )
    }
}

export default Title;