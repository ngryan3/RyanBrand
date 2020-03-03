import React from 'react';
import NavigationBar from '../NavigationBar'
import Title from "../AdminDashboard/Title"
import './index.css'
import ryan from "../../images/ryan.png"

class About extends React.Component {   

    render() {
        const para = "Hey all, thanks for visiting my Site! I'm Ryan, a 23 year old computer science major at UofT. Right now I'm looking to expand my sphere with an online shop! I have various social media which you can access below. Make sure to follow me on twitter for my latest life updates."
        return(
            <div>
                <NavigationBar></NavigationBar>
                <div class="headerAbout">
                    <Title title="Hey guys Ryan here!"></Title>
                </div>
                <div class="paraAbout">

                <div class="paraText">{para}</div>

                </div>
                <img class="ryan" src={ryan} alt="fuck"></img>
                <br></br>
            </div>

        )
    }
}

export default About;