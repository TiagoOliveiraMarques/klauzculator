import * as React from 'react';

export interface IDisplayProps {
    lastOperation: string;
    expression: string;
    evaluation: string;
}

export class Display extends React.PureComponent<IDisplayProps> {

    public render() {
        const { expression, evaluation, lastOperation } = this.props;

        return (
            <div className="display">
                <p className="display__lastOperation">
                    { lastOperation }
                </p>
                <p className="display__history">
                    { expression }
                </p>
                <p className="display__current">
                    { evaluation }
                </p>
            </div>
        )
    }
}