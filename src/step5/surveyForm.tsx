import React from 'react';
import { FirstScreen } from './firstScreen';

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

export class SurveyFormStep5 extends React.Component<any, ISurveyFormStepState> {
    state: ISurveyFormStepState = {
        answers: {
            question1: {
                label: 'First Name',
                value: ''
            },
            question2: {
                label: 'Last Name',
                value: ''
            },
            question3: {
                label: 'Phone Number',
                value: ''
            },
            question4: {
                label: 'Address',
                value: ''
            }
        }
    };

    sendAnswerObject(answers: IAnswers) {
        // send answers through here
    }

    updateAnswers = (subAnswer: IAnswer, id: string) => {
        // copy over whole answers object
        let newAnswers: IAnswers = { ...this.state.answers };

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
                <FirstScreen answers={answers} updateAnswers={this.updateAnswers} />

                <p>Answer Value First Name: {this.state.answers.question1.value}</p>
                <p>Answer Value Last Name: {this.state.answers.question2.value}</p>
                <p>Answer Value Phone: {this.state.answers.question3.value}</p>
                <p>Answer Values Address: {this.state.answers.question4.value}</p>
            </div>
        );
    }
}
