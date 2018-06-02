import React from 'react';
import { Sport } from './sport';
import { General_knowledge } from './generalKnowledge';
import { Entertainment } from './entertainment';
import { ScienceAndNature } from './scienceAndNature';
import { Geography } from './geography';
import { History } from './history';
import { FlagsQuiz } from './flagsQuiz';

export const ComponentCarousel = (props) => {

    switch(props.currentImage){
        case 0:
        return <General_knowledge />;
        break;

        case 1:
        return <Sport />;
        break;

        case 2:
        return <Entertainment />;
        break;

        case 3:
        return <ScienceAndNature />;
        break;

        case 4:
        return <Geography />;
        break;

        case 5:
        return <History />;
        break;

        case 6:
        return <FlagsQuiz />;
        break;

    }
    
}