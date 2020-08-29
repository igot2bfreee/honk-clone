import React, { Component } from 'react';
import { QUESTIONS } from '../shared/questions';

function RenderBanner() {
    const renderQuestions = QUESTIONS.map((item) => (<li>{item.text}</li>));
    return {QUESTIONS} ? (
        <div className="col-md-5 m-1">
            <p>{QUESTIONS[0].text}</p>
            <ul>{renderQuestions}</ul>
        </div>
    ) : (
        <p>Questions Data Not Available</p>
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