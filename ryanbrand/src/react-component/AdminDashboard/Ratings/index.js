import React from 'react';
import './index.css'
import Title from "../Title"
class Ratings extends React.Component {



    render() {
        //wasnt able to get json file to work
        const fake = {five:3, four:2, three: 3, two:1, one:0};


        return(
        <div>
            <Title title="Product Ratings"></Title>
            <table class='displayTable tableRow'>
                <tr class='tableRow'>
                    <th class='cell'>Rating</th>
                    <th>Quantity</th>
                </tr>
                <tr class='tableRow'>
                    <td class='cell'>5</td>
                    <td>{fake.five}</td>
                </tr>
                <tr class='tableRow'>
                    <td class='cell' >4-4.99</td>
                    <td>{fake.four}</td>
                </tr>
                <tr class='tableRow'>
                    <td class='cell'>3-3.99</td>
                    <td>{fake.three}</td>
                </tr>
                <tr class='tableRow'>
                    <td class='cell'>2-2.99</td>
                    <td>{fake.two}</td>
                </tr>
                <tr class='tableRow'>
                    <td class='cell'>1-1.99</td>
                    <td>{fake.one}</td>
                </tr>
            </table>
        </div>
        )
    }
}

export default Ratings;