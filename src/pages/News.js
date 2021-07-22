import React, { useState, useEffect } from 'react';
import "../styles/news.scss"
import {Link} from "react-router-dom";

const News = (props) => {
  

    if(props.refresh === true){
        window.location.reload();
        <Link to="/news"/>
    }
    return (
        
        <div id="tweet">
            {props.feed}
        </div>
    );
};

export default News;