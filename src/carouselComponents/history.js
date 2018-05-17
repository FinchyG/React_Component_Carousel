import React from 'react';

export const History = (props) => {

    return (
        <div>
            <LeftChevron />
            <h4>History</h4>
            <img className="carouselImage" src={require('../images/history.png')} alt="history icon" />
            <RightChevron />
        </div>
    )
        
}