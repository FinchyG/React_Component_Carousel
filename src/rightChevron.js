import React from 'react';

export const RightChevron = (props) => {

    return (
        <img className="rightChevron" src={require('./images/rightChevron.png')} alt="rightChevron" onClick={props.onClick} />
    )
}