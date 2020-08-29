import React, { Component } from 'react';
import { QUESTIONS } from '../shared/questions';

function RenderBanner() {
    return (
        <div className="col-md-5 m-1">
            <p>{QUESTIONS[0].text}</p>
        </div>
    );
}


class QuestionsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="Banner">
                <RenderBanner />
            </div>
        );
    }
}

export default QuestionsComponent;