import React from 'react';
import NavigationBar from '../NavigationBar'
import Title from "../AdminDashboard/Title"
import './index.css'
import ryan from "../../images/ryan.png"
import twitter from "../../images/twitter.png"
import twitch from "../../images/twitch.png"
import facebook from "../../images/facebook.png"

class About extends React.Component {   

    render() {
        const para = "Hey all, thanks for visiting my Site! I'm Ryan, a 23 year old computer science major at UofT. Right now I'm looking to expand my sphere with an online shop! I have various social media which you can access below. Make sure to follow me on twitter for my latest life updates."
        const { app } = this.props
        return(
            <div>
                <NavigationBar app={app}/>
                <div class="headerAbout">
                    <Title title="Hey guys Ryan here!"></Title>
                </div>
                <div class="paraAbout">

                <div class="paraText">{para}</div>
                <a href="https://twitter.com"><img class="logoT" src={twitter}></img></a> 
                <a href="https://facebook.com"><img class="logoF" src={facebook}></img></a> 
                <a href="https://twitch.tv"><img class="logoCh" src={twitch}></img></a> 
                </div>
                <img class="ryan" src={ryan} alt="a picture of ryan"></img>
                <br></br>
            </div>

        )
    }
}

export default About;