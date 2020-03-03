import React from 'react';
import ProductTable from "../ProductTable"

class MostPopular extends React.Component {



    render() {
        //wasnt able to get json file to work
        const fake = [{name:"a postbox",price:"200.00", clicks:421},
        {name:"some corn",price:"2.10", clicks:212}];
        const stringed = JSON.stringify(fake);
        const parsed = JSON.parse(stringed)
        console.log(parsed)

        return(
        <div>
            <h1>List of most Popular Items</h1>
            <ProductTable products={parsed} component={this}></ProductTable>
        </div>
        )
    }
}

export default MostPopular;