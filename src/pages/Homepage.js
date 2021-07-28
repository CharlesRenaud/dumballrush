import React from 'react';
import backgroundImage from '../images/background.png';
import intro from '../images/intro.gif';
import steam from '../images/steam2.png';


import "../styles/homepage.scss";


const Homepage = () => {
    return (
    <div id='background' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div id="trailer">
           
            <iframe width="350" height="360" src="https://www.youtube.com/watch?v=8jjpDWoFMB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <div style={{ backgroundImage: `url(${backgroundImage})` }} id="add-steam"> <a id="link-steam">add to wishlist <img id="steam-logo" src={steam}></img></a></div>
        </div>
    </div>
    );
};

export default Homepage;