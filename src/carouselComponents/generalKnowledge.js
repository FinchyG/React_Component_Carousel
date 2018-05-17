import React from 'react';

export const General_knowledge = (props) => {

    return (
        <div>
            <LeftChevron />
            <h4>General Knowledge</h4>
            <img className="carouselImage" src={require('../images/generalKnowledge.png')} alt="general knowledge icon" />
            <RightChevron />
        </div>
    )
    
}