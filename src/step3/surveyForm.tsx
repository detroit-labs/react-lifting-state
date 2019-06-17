import React from 'react';
import { TextFieldStep3 as TextField } from './textField';

export interface IAnswer {
    label: string;
    value: string;
}

export interface IAnswers {
    [id: string]: IAnswer;
}

interface ISurveyFormStepState {
    answers: IAnswers;
}

export class SurveyFormStep3 extends React.Component<any, ISurveyFormStepState> {
    state: ISurveyFormStepState = {
        answers: {
            question1: {
                label: 'First Name',
                value: ''
            }
        }
    };
    sendAnswerObject(answers: IAnswers) {
        // send answers through here
    }

    updateAnswers = (subAnswer: IAnswer, id: string) => {
        // copy over whole answers object
        let newAnswers = { ...this.state.answers };

        // assign just the sub-answer object coming through using the ID
        newAnswers[id] = subAnswer;

        // set state to the latest version of the answers object
        this.setState({ answers: newAnswers });

        // call to our stubbed method to send answer object through
        this.sendAnswerObject(newAnswers);
    };

    render() {
        const { answers } = this.state;
        return (
            <div>
                <h1>Survey</h1>
                <TextField answer={answers.question1} id="question1" updateAnswers={this.updateAnswers} />

                <p>Answer Value: {this.state.answers.question1.value}</p>
            </div>
        );
    }
}
