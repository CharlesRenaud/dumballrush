import React from 'react';
import backgroundImage from '../images/background.png';
import intro from '../images/intro.gif';
import steam from '../images/steam2.png'

import "../styles/homepage.scss";


const Homepage = () => {
    return (
    <div id='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div id="trailer">
            <img id="trailer-img" src={intro} ></img>
            <div style={{ backgroundImage: `url(${backgroundImage})` }} id="add-steam"> <a id="link-steam">add to wishlist <img id="steam-logo" src={steam}></img></a></div>
        </div>
    </div>
    );
};

export default Homepage;