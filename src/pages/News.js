import React, { useState, useEffect } from 'react';
import "../styles/news.scss"

const News = (props) => {
  

    if(props.refresh === true){
        window.location.reload();
    }
    return (
        
        <div id="tweet">
            {props.feed}
        </div>
    );
};

export default News;