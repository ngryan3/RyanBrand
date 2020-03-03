import React from 'react';
import ProductTable from "../ProductTable"
import './index.css'
import Title from '../Title'
class MostPopular extends React.Component {



    render() {
        //wasnt able to get json file to work
        const fake = [{name:"a postbox",price:"200.00", clicks:421},
        {name:"some corn",price:"2.10", clicks:212}];
        const stringed = JSON.stringify(fake);
        const parsed = JSON.parse(stringed)
        console.log(parsed)

        const {
            component
        } = this.props;

        return(
        <div>
            <Title title="List of Most Popular Items"></Title>
            <table class="displayTable"> 
                <ProductTable products={parsed} component={component}></ProductTable>
            </table>
            
        </div>
        )
    }
}

export default MostPopular;