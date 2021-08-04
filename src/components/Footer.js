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
            <div className="social" style={{ backgroundImage: `url(${instagram})` }}></div>
            <div className="social" style={{ backgroundImage: `url(${twitter})` }}></div>
            <div className="social" style={{ backgroundImage: `url(${linkedin})` }}></div>
            <div className="social" style={{ backgroundImage: `url(${discord})` }}></div>
            <div className="social" style={{ backgroundImage: `url(${tiktok})` }}></div>
            <div className="social" style={{ backgroundImage: `url(${steam})` }}></div>           
        </div>
    );
};

export default Footer;