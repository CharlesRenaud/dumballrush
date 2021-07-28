import React from 'react';
import discord from "../images/discord.jpg";
import steam from "../images/steam3.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.jpg";
import tiktok from "../images/tiktok.png";
import twitter from "../images/twitter.jpg";
import "../styles/footer.scss";


const Footer = () => {
    return (
        <div className="footer">
            <div id="social-box">
                <img className="social" src={instagram} />
                <img className="social" src={twitter} />
                <img className="social" src={linkedin} />
                <img className="social" src={discord} />
                <img className="social" src={tiktok} />
                <img className="social" src={steam} />
            </div>
            <div id="logo">

            </div>            
        </div>
    );
};

export default Footer;