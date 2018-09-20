import * as React from 'react';
import { noop } from 'src/utils/noop';
import { Display } from '../display';
import { Keyboard } from '../keyboard';
import { CalculatorState } from './state/CalculatorState';
import { NumberHandlingState } from './state/NumberHandlingState';

// tslint:disable-next-line:no-empty-interface
export interface ICalculatorProps {

}

// tslint:disable-next-line:no-empty-interface
export interface ICalculatorState {
    display: CalculatorState
}

export class Calculator extends React.Component<ICalculatorProps, ICalculatorState> {

    constructor(props: ICalculatorProps) {
        super(props);

        this.state = {
            display: new NumberHandlingState()
        }
    }

    public render() {

        return (
            <div className="calculator">
                <Display 
                    expression="" 
                    evaluation={ this.state.display.scopedValue() } 
                    lastOperation=""
                />
                <Keyboard 
                    onAdd={noop}
                    onClear={this.handleClear}
                    onDivide={noop}
                    onDot={this.handleDot}
                    onEqual={noop}
                    onGrantTotal={noop}
                    onMultiply={noop}
                    onNumber={(this.handleNumber)}
                    onRemainder={noop}
                    onSign={noop}
                    onSubtract={noop}
                />
            </div>
        );
    }
    private handleNumber = (value: number): void => {
        this.mutateState(c => c.handleNumber(value));
    }

    private handleDot = (): void => {
        this.mutateState(c => c.handleNumericDot());
    }

    private handleClear = (): void => {
        this.mutateState(c => new NumberHandlingState());
    }

    private mutateState(fn: (c: CalculatorState) => CalculatorState): void {
        this.setState({
            display: fn(this.state.display)
        });
    }

}