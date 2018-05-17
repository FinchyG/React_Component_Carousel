import React from 'react';

export const ScienceAndNature = (props) => {

    return (
        <div>
            <LeftChevron />
            <h4>Science and Nature</h4>
            <img className="carouselImage" src={require('../images/scienceAndNature.png')} alt="science and nature icon" />
            <RightChevron />
        </div>
    )
    
}