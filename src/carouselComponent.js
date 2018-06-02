import React from 'react';
import {LeftChevron} from './leftChevron';
import {RightChevron} from './rightChevron';
import {ComponentCarousel} from './carouselComponents/componentCarousel';
import {TitleHeader} from './titleHeader';

export class CarouselComponent extends React.Component {
    
    constructor(props){

        super(props);

        this.state = {currentImage: 0};

        this.rightImage = this.rightImage.bind(this);
        this.leftImage  = this.leftImage.bind(this);

    }

    leftImage() {

        let current  = this.state.currentImage;
        let left     = current === 0 ? 6 : current - 1;
        
        this.setState({currentImage: left});

    }

    rightImage() {

        let current  = this.state.currentImage;
        let right    = current === 6 ? 0 : current + 1;
        
        this.setState({currentImage: right});

    }

    render() {

            
        return (
            
            <div>
                <TitleHeader />

                <div className="wideDiv">

                    <div className="narrowDiv">
                    <LeftChevron onClick={this.leftImage} />
                    <ComponentCarousel currentImage={this.state.currentImage} />
                    <RightChevron onClick={this.rightImage} />
                    </div>
                    
                </div>
                
            </div>
        )
    }

}