import React from 'react';
import "../styles/game.scss";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";

const Game = () => {

    
    return (
        <Carousel className="carousel-box" showArrows={true} >
                <div className="card">
                    <div className="slider-img" style={{ backgroundImage: `url(${slider1})` }}/>
                    <h2 className="card-title">Title</h2>
                    <p>Content</p>
                </div>
                <div className="card">
                    <div className="slider-img" style={{ backgroundImage: `url(${slider2})` }}/>
                    <h2 className="card-title">Title</h2>
                    <p>Content</p>
                </div>
                <div className="card">
                    <div className="slider-img" style={{ backgroundImage: `url(${slider3})` }}/>
                    <h2 className="card-title">Title</h2>
                    <p>Content</p>
                </div>
            </Carousel>

    );
};

export default Game;