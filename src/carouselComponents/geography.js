import React from 'react';

export const Geography = (props) => {

    return (
        <div>
            <LeftChevron />
            <h4>Geography</h4>
            <img className="carouselImage" src={require('../images/geography.png')} alt="geography icon" />
            <RightChevron />
        </div>
    )
    
}