import React from 'react';
import "../styles/header.scss";
import {Link} from "react-router-dom";
import headerLogo from "../images/header-logo.png";
import headerBackground from "../images/header-background.png";
import { Parallax } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faGamepad, faNewspaper, faUsers, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'


let toogle = false;

const toogleMenu = () => {
        console.log("menu toogle", toogle)
    if(toogle === false){
        document.getElementById("Menu").style.display = "flex";
        window.scrollTo(0, 0)
        toogle = true;
    }else{
        document.getElementById("Menu").style.display = "none";
        toogle = false;
    }
}
  


const Header = (props) => {
    function refreshPage() {
        props.setRefresh(true)
      }
    return (
        <div id="header">
            <div id="header-search">
                <div className="burger" onClick={()=> toogleMenu()}>
                    <span className="burger-line"/>
                    <span className="burger-line"/>
                    <span className="burger-line"/>
                </div>
                <p>Explore</p>
                <div id="Menu">
                    <Link  onClick={()=> toogleMenu()} className="link" to="/"> <FontAwesomeIcon icon={faHome} /> Home</Link>
                    <Link  onClick={()=> toogleMenu()} className="link"  to="/game"> <FontAwesomeIcon icon={faGamepad} /> Game</Link>
                    <Link  onClick={()=>{toogleMenu(); refreshPage()}} className="link" to="/news"> <FontAwesomeIcon icon={faNewspaper} />  News</Link>
                    <Link  onClick={()=> toogleMenu()} className="link" to="/studio"> <FontAwesomeIcon icon={faUsers} /> The studio</Link>
                    <Link  onClick={()=> toogleMenu()} className="link" to="/contact">  <FontAwesomeIcon icon={faEnvelopeOpen} /> Contact</Link>
                </div>
            </div>
            <div id="space"></div>
            <Parallax bgImage={headerBackground} strength={400} id="parallax">
                <div id="header-image" style={{height:250}} >
                    <img alt='header-logo' src={headerLogo} id='header-logo'></img>
                    <div id="black-hover"></div>   
                </div>
            </Parallax>
            
        </div>
        

    );
};

export default Header;