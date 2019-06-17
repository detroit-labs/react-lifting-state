import React, { ChangeEvent } from 'react';
import { IAnswer } from './surveyForm';

interface ITextFieldProps {
    answer: {
        label: string;
        value: string;
    };
    id: string;
    updateAnswers: (subAnswer: IAnswer, id: string) => void;
}

interface ITextFieldState {
    inputValue: string;
}

export class TextFieldStep4 extends React.Component<ITextFieldProps, ITextFieldState> {
    state: ITextFieldState = {
        inputValue: ''
    };

    onInputChange = (e: ChangeEvent<any>) => {
        const { updateAnswers, answer, id } = this.props;
        // copy the answer so we can manipulate the value
        let copiedAnswer = { ...answer };

        // set the value to the latest input value
        copiedAnswer.value = e.target.value;

        // call to the prop method inside the parent component
        updateAnswers(copiedAnswer, id);
    };

    render() {
        const { answer, id } = this.props;

        return (
            <div>
                <label>{answer.label}: </label>
                <input type="text" id={id} value={answer.value} onChange={this.onInputChange} />
            </div>
        );
    }
}
