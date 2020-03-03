import React from 'react';
import '../MostPopular/index.css'
class Ratings extends React.Component {



    render() {
        //wasnt able to get json file to work
        const fake = {five:3, four:2, three: 3, two:1, one:0};


        return(
        <div>
            <span class='tite'>Product Ratings</span>
            <table>
                <tr>
                    <th>Rating</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>5</td>
                    <td>{fake.five}</td>
                </tr>
                <tr>
                    <td>4-4.99</td>
                    <td>{fake.four}</td>
                </tr>
                <tr>
                    <td>3-3.99</td>
                    <td>{fake.three}</td>
                </tr>
                <tr>
                    <td>2-2.99</td>
                    <td>{fake.two}</td>
                </tr>
                <tr>
                    <td>1-1.99</td>
                    <td>{fake.one}</td>
                </tr>
            </table>
        </div>
        )
    }
}

export default Ratings;