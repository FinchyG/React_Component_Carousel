import React from 'react';

export const Sport = (props) => {

    return (
        <div>
            <LeftChevron />
            <h4>Sport</h4>
            <img className="carouselImage" src={require('../images/sport.png')} alt="sport icon" />
            <RightChevron />
        </div>
    )
        
}