import React, { ChangeEvent } from 'react';

interface ISurveyFormState {
    inputValue: string;
}

export class SurveyFormStep1 extends React.Component<any, ISurveyFormState> {
    state: ISurveyFormState = {
        inputValue: ''
    };

    onInputChange = (e: ChangeEvent<any>) => {
        this.setState({ inputValue: e.target.value });
    };

    sendAnswerObject() {
        // send answer value here
    }

    render() {
        const { inputValue } = this.state;
        return (
            <div>
                <h1>Survey</h1>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={inputValue} onChange={this.onInputChange} />
                </div>

                <p>Answer Value: {this.state.inputValue}</p>
            </div>
        );
    }
}
