import React from 'react';

export const FlagsQuizzes = (props) => {

    return (
        <div>
            <LeftChevron />
            <h4>Flags Quizzes</h4>
            <img className="carouselImage" src={require('../images/flagsQuiz.png')} alt="flags icon" />
            <RightChevron />
        </div>
    )
    
}