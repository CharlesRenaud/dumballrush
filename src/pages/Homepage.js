import React from 'react';
import backgroundImage from '../images/bg4.png';
import intro from '../images/intro.gif';
import steam from '../images/steam2.png';
import trailer from "../images/trailer.mp4"


import "../styles/homepage.scss";


const Homepage = () => {
    return (
    <div id='background'>
        <div id="trailer">
            <video autoPlay muted controls id="yt-video">
                <source src={trailer}
                        type="video/mp4" />
            </video>
            <div style={{ backgroundImage: `url(${backgroundImage})` }} id="add-steam"> <a id="link-steam">add to wishlist <img id="steam-logo" src={steam}></img></a></div>
        </div>
    </div>
    );
};

export default Homepage;