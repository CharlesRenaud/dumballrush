import React, { useState, useEffect } from 'react';
import "../styles/news.scss"
import { TwitterTimelineEmbed} from 'react-twitter-embed';

const News = () => {
  
    
    return (
        
        <div id="tweet">
             <TwitterTimelineEmbed
                sourceType="dumballrush"
                screenName="dumballrush"
            />
        </div>
    );
};

export default News;