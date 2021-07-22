import React, { useState, useEffect } from 'react';
import "../styles/news.scss"
import {Link} from "react-router-dom";

const News = (props) => {
  
    return (
        
        <div id="tweet">
            {props.feed}
        </div>
    );
};

export default News;