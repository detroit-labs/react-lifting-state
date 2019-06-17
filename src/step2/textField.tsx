import React, { ChangeEvent } from 'react';

interface ITextFieldProps {
    label: string;
    value: string;
    updateAnswers: (e: ChangeEvent<any>) => void;
}

export class TextFieldStep2 extends React.Component<ITextFieldProps> {
    render() {
        const { label, value, updateAnswers } = this.props;

        return (
            <div>
                <label>{label}: </label>
                <input type="text" value={value} onChange={updateAnswers} />
            </div>
        );
    }
}
