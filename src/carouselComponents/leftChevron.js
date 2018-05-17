import React from 'react';

export const LeftChevron = (props) => {

    return (
        <img className="leftChevron" src={require('./images/leftChevron.png')} alt="left chevron" onClick={props.onClickL} />
    )
}