import React, { Component } from 'react';
import Header from './BRHeader';
import Banner from './BRBanner';
import Questions from './BRQuestions';
import Button from './BRButton';

class BRMain extends Component {
    render() {
        return(
            <div>
                <Header />
                <Banner />
                <Questions />
                <Button />
            </div>
        );
    }
}

export default BRMain;