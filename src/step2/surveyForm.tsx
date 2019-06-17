import React, { ChangeEvent } from 'react';
import { TextFieldStep2 as TextField } from './textField';

export interface IAnswer {
    label: string;
    value: string;
}

interface ISurveyFormState {
    inputLabel: string;
    inputValue: string;
}

export class SurveyFormStep2 extends React.Component<any, ISurveyFormState> {
    state = {
        inputLabel: 'First Name',
        inputValue: ''
    };

    sendAnswerObject() {
        // send answer value here
    }

    updateAnswers = (e: ChangeEvent<any>) => {
        this.setState({ inputValue: e.target.value });
    };

    render() {
        const { inputLabel, inputValue } = this.state;
        return (
            <div>
                <h1>Survey</h1>
                <TextField label={inputLabel} value={inputValue} updateAnswers={this.updateAnswers} />

                <p>Answer Value: {this.state.inputValue}</p>
            </div>
        );
    }
}
