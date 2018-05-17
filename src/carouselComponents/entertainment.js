import React from 'react';

export const Entertainment = (props) => {

    return (
        <div>
            <LeftChevron />
            <h4>Entertainment</h4>
            <img className="carouselImage" src={require('../images/entertainment.png')} alt="entertainment icon" />
            <RightChevron />
        </div>
    )
    
}