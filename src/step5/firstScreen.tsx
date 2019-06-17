import React from 'react';
import { TextFieldStep5 as TextField } from './textField';
import { IAnswers, IAnswer } from './surveyForm';

interface IFirstScreenProps {
    answers: IAnswers;
    updateAnswers: (subAnswer: IAnswer, id: string) => void;
}

export class FirstScreen extends React.Component<IFirstScreenProps> {
    render() {
        const { answers, updateAnswers } = this.props;

        return (
            <div>
                <TextField answer={answers.question1} id="question1" updateAnswers={updateAnswers} />
                <TextField answer={answers.question2} id="question2" updateAnswers={updateAnswers} />
                <TextField answer={answers.question3} id="question3" updateAnswers={updateAnswers} />
                <TextField answer={answers.question4} id="question4" updateAnswers={updateAnswers} />
            </div>
        );
    }
}
